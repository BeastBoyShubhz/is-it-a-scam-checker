
import { describe, it, expect } from 'vitest';
import { calculateRiskScore } from './scamScorer';

describe('Scam Scorer Logic', () => {

    it('should flag the user reported false negative as High Risk', async () => {
        const input = "Win $1000 just visit the link and verify your age using your credit card.";
        const result = await calculateRiskScore(input);

        // Win + Link + Payment + Age + hard overrides
        expect(result.riskLevel).toBe('High');
        expect(result.score).toBeGreaterThanOrEqual(60);
        expect(result.signals.some(s => s.id === 'prize_bait')).toBe(true);
    });

    it('should flag benign messages as Low Risk', async () => {
        const input = "Hey, dinner at 7?";
        const result = await calculateRiskScore(input);
        expect(result.riskLevel).toBe('Low');
        expect(result.score).toBeLessThan(30);
    });

    it('should flag medium risk delivery messages', async () => {
        const input = "Your parcel is waiting for delivery. Please confirm your details here.";
        const result = await calculateRiskScore(input);
        // Note: New weights might make this Low if only link + confirm.
        // Link(15) + Verify(30) = 45 -> Medium (>=30)
        expect(result.score).toBeGreaterThanOrEqual(30);
    });

    it('should flag bank impersonation with login urgency as High', async () => {
        const input = "URGENT: Unusual activity on your account. Login immediately to verify.";
        const result = await calculateRiskScore(input);
        expect(result.riskLevel).toBe('High');
        expect(result.signals.some(s => s.id === 'urgency')).toBe(true);
    });

    // New Tests for Requirement A
    it('should flag Lookalike Domain (co.m.bank)', async () => {
        const input = "Login to https://co.m.bank to secure your account";
        const result = await calculateRiskScore(input);
        expect(result.riskLevel).toBe('High');
        expect(result.detectedUrls).toBeDefined();
        expect(result.detectedUrls?.[0].risk.riskLevel).toBe('High');
    });

    it('should flag CVV request as High Risk', async () => {
        const input = "Hi give me your cvv";
        const result = await calculateRiskScore(input);
        expect(result.riskLevel).toBe('High');
        expect(result.signals.some(s => s.id === 'cvv_request')).toBe(true);
    });

    it('should NOT flag Official Bank Domain as High', async () => {
        const input = "Visit https://www.commbank.com.au for more info";
        const result = await calculateRiskScore(input);
        // Official domain might subtract points or just not add any.
        // Assuming no other signals, it should be Low.
        expect(result.riskLevel).toBe('Low');
    });

    it('should flag Dot-Splitting brand impersonation', async () => {
        const input = "Go to http://my.gov.au.login-attempt.com";
        const result = await calculateRiskScore(input);
        expect(result.riskLevel).toBe('High');
    });

    it('should flag Typosquatting', async () => {
        const input = "Check http://commbannk.com";
        const result = await calculateRiskScore(input);
        expect(result.riskLevel).toBe('High');
        expect(result.summary).toContain('High Risk');
    });
});

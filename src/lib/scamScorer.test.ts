
import { describe, it, expect } from 'vitest';
import { calculateRiskScore } from './scamScorer';

describe('Scam Scorer Logic', () => {

    it('should flag the user reported false negative as High Risk', () => {
        const input = "Win $1000 just visit the link and verify your age using your credit card.";
        const result = calculateRiskScore(input);

        // Win ($35) + Link ($15) + Payment ($45) + Age ($60) + hard overrides
        // Expected score significantly > 55
        expect(result.riskLevel).toBe('High');
        expect(result.score).toBeGreaterThanOrEqual(55);
        // Should catch specific signals
        expect(result.signals.some(s => s.id === 'age_card_scam')).toBe(true);
        expect(result.signals.some(s => s.id === 'prize_bait')).toBe(true);
    });

    it('should flag benign messages as Low Risk', () => {
        const input = "Hey, dinner at 7?";
        const result = calculateRiskScore(input);
        expect(result.riskLevel).toBe('Low');
        expect(result.score).toBeLessThan(25);
    });

    it('should flag medium risk delivery messages', () => {
        const input = "Your parcel is waiting for delivery. Please confirm your details here.";
        // Confirm (25) + here/link (15) = 40 -> Medium
        const result = calculateRiskScore(input);
        expect(result.riskLevel).toBe('Medium');
    });

    it('should flag bank impersonation with login urgency as High', () => {
        const input = "URGENT: Unusual activity on your account. Login immediately to verify.";
        // Urgent (20) + Verify/Login (25) + Unusual activity (25) -> 70 -> High
        const result = calculateRiskScore(input);
        expect(result.riskLevel).toBe('High');
    });
});

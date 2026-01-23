
export interface Guide {
  slug: string;
  title: string;
  excerpt: string;
  content: string; // HTML or Markdown
  date: string;
}

export const guides: Guide[] = [
  {
    slug: 'is-this-a-scam-message',
    title: 'Is This a Scam Message? 5 Red Flags to Look For',
    excerpt: 'Received a strange text or WhatsApp? Here’s how to tell if it’s a scam in 60 seconds.',
    date: '2025-01-10',
    content: `
      <h2>1. The Urgency Trap</h2>
      <p>Scammers want you to panic. phrases like "immediate action required", "final notice", or "your account will be locked" are huge red flags. Legitimate organisations usually give you plenty of notice.</p>
      
      <h2>2. "Verify Your Account" Links</h2>
      <p>Banks and government agencies will almost NEVER send you a link via text to verify your identity. If you get a link, do not click it. Go to the official website or app separately.</p>

      <h2>3. Strange Phone Numbers</h2>
      <p>If the message comes from a random mobile number (+61 4...) but claims to be from a major bank or "AusPost", be suspicious. While some services use gateways, it's safer to assume it's fake until verified.</p>

      <h2>4. Formatting and Spelling Errors</h2>
      <p>Typos like "AuustPost" or weird grammar are dead giveaways. Professional organisations verify their communications.</p>

      <h2>What to do?</h2>
      <p>Block the number. Delete the message. If you are worried, call the official support line found on the back of your bank card.</p>
    `
  },
  {
    slug: 'is-this-website-legit',
    title: 'Is This Website Legit? How to Check Before You Buy',
    excerpt: 'Don’t get tricked by fake online stores. Learn to spot the signs of a fraudulent website.',
    date: '2025-01-11',
    content: `
      <h2>1. Check the URL (Web Address)</h2>
      <p>Look closely at the domain name. Scammers use tricks like "rn" instead of "m" (e.g., "amazorn.com"). Also watch for strange extensions like .xyz, .top, or .club for major brands.</p>

      <h2>2. Look for "Too Good To Be True" Prices</h2>
      <p>If a $500 item is selling for $50, it's almost certainly a scam. If it looks too good to be true, it is.</p>

      <h2>3. Check Contact Details</h2>
      <p>Legitimate businesses have clear contact pages, physical addresses, and phone numbers. If the only contact is a generic form or a Gmail address, run.</p>

      <h2>4. Domain Age</h2>
      <p>Use a "Whois" lookup tool. If the website was created 2 days ago but claims to be a "leading retailer since 2010", it's a scam.</p>
    `
  },
  {
    slug: 'phishing-email-signs',
    title: '7 Signs of a Phishing Email You Can\'t Ignore',
    excerpt: 'Phishing emails are getting smarter. Here are the subtle signs that give them away.',
    date: '2025-01-12',
    content: `
      <h2>1. The Sender Address Doesn't Match</h2>
      <p>It might say "Netflix Support", but if you click the sender name and the email is "netflix-support@gmail.com" or "mail-service-123.com", it's fake.</p>

      <h2>2. Generic Greetings</h2>
      <p>"Dear Customer" or "Dear Member" is common in mass phishing campaigns. Real services often use your name.</p>

      <h2>3. Suspicious Attachments</h2>
      <p>Never open an invoice or receipt (PDF, ZIP, EXE) you weren't expecting. These often contain malware.</p>

      <h2>4. Mismatched Links</h2>
      <p>Hover over a link (don't click!). Does the URL preview match the text? If the button says "Login to PayPal" but the link goes to "secure-login-verify.com", it's a trap.</p>
    `
  },
  {
    slug: 'australia-post-scams',
    title: 'Common Australia Post Text Scams & How to Spot Them',
    excerpt: 'Waiting for a parcel? Don\'t fall for the "delivery failed" SMS trap.',
    date: '2025-01-14',
    content: `
      <h2>The "Delivery Failed" SMS</h2>
      <p>You get a text saying "We attempted to deliver your parcel but no one was home. Reschedule here: [link]". This is the most common scam in Australia right now.</p>
      
      <h2>How to Spot it</h2>
      <ul>
        <li>Australia Post will strictly use standard tracking pages.</li>
        <li>They will rarely ask for a "redelivery fee" via a link in a text.</li>
        <li>The link often looks weird (e.g., auspost-verify.com/track).</li>
      </ul>

      <h2>What to do</h2>
      <p>Copy the tracking number (if provided) and paste it directly into the official AusPost app or website. Do not click the link.</p>
    `
  },
  {
    slug: 'ato-scams-australia',
    title: 'Warning: ATO Tax Refund & Debt Scams',
    excerpt: 'The ATO is warning Australians about a surge in fake tax refund emails and SMS.',
    date: '2025-01-15',
    content: `
        <h2>Fake Tax Refunds</h2>
        <p>You receive an email claiming you are owed a refund and just need to "click here" to claim it. The ATO will never ask you to click a link to claim a refund.</p>

        <h2>"You Have a Tax Debt"</h2>
        <p>Scammers call or text claiming you have a debt and threaten arrest if you don't pay immediately. The ATO does not threaten arrest over a text message.</p>

        <h2>How to Verify</h2>
        <p>Log in to your myGov account independently. Any genuine ATO communication will be in your myGov Inbox.</p>
      `
  },
  {
    slug: 'bank-impersonation-scams',
    title: 'Bank Impersonation Scams: "Did you spend $400?"',
    excerpt: 'Scammers are calling pretending to be from your bank\'s fraud team. Here is what you need to know.',
    date: '2025-01-16',
    content: `
        <h2>The Script</h2>
        <p>You get a call or text: "Did you authorize a transaction of $500 to XYZ Store? Reply N if not." You reply N, and they call you immediately.</p>

        <h2>The Trap</h2>
        <p>They pretend to be the "Fraud Team" and ask you to "move your money to a safe account" or give them a 2-factor code to stop the transaction. THIS IS A SCAM.</p>

        <h2>Golden Rule</h2>
        <p>Your bank will NEVR ask you to read out a 2-factor authentication code or move money to a "safe account". Hang up and call the bank back on their official number.</p>
      `
  },
  {
    slug: 'check-scam-screenshots',
    title: 'How to Check Scam Screenshots & Extract Text',
    excerpt: 'Learn how to use our screenshot analysis tool to detect scams in images, texts, and WhatsApp messages.',
    date: '2025-01-20',
    content: `
        <h2>Why Screenshots?</h2>
        <p>Scammers often use image-based messages to bypass text filters. Our tool extracts text from these images to uncover hidden keywords.</p>
        <h2>What to Look For</h2>
        <p>Visual signs of a scam include poor quality logos, mismatched fonts, and "Verify" buttons that are just images, not real buttons.</p>
        <p><a href="/guides/check-scam-screenshots">Read the full guide here -></a></p>
        `
  },
  {
    slug: 'check-scam-invoices-pdf',
    title: 'Detecting Fake Invoices and PDF Scams',
    excerpt: 'Fake invoices from "Norton" or "Geek Squad" are flooding inboxes. Here is how to check them safely.',
    date: '2025-01-21',
    content: `
        <h2>The Fake Invoice Ploy</h2>
        <p>Scammers send a PDF receipt for a service you never bought. They want you to panic and call their fake support number.</p>
        <h2>Safe Checking</h2>
        <p>Never call the number on the invoice. Upload the PDF to our checker to analyze the text for scam scripts without opening the file on your computer.</p>
        <p><a href="/guides/check-scam-invoices-pdf">Read the full guide here -></a></p>
        `
  }
];

export function getGuideBySlug(slug: string) {
  return guides.find(g => g.slug === slug);
}

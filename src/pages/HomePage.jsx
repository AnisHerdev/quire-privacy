import { useState } from 'react';
import { Link } from 'react-router-dom';
import FadeIn from '../components/FadeIn';
import FeatureCard from '../components/FeatureCard';
import ProblemItem from '../components/ProblemItem';
import FAQItem from '../components/FAQItem';
import styles from './HomePage.module.css';

const features = [
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 12 16 12 14 15 10 15 8 12 2 12" />
        <path d="M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z" />
      </svg>
    ),
    title: 'Zero-Friction Intake',
    description:
      'Share files from WhatsApp, Telegram, or any app directly into Quire via the OS share sheet. Files land in your Inbox automatically.',
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 10a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1h-2.5a1 1 0 0 1-.8-.4l-.9-1.2A1 1 0 0 0 15 3h-2a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1Z" />
        <path d="M20 21a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1h-2.9a1 1 0 0 1-.88-.55l-.42-.85a1 1 0 0 0-.92-.6H13a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1Z" />
        <path d="M3 5v14a2 2 0 0 0 2 2h7" />
        <path d="M8 17h1" />
        <path d="M8 9h1" />
      </svg>
    ),
    title: 'Smart Organization',
    description:
      'Auto-detect subjects from filenames. Organize into hierarchical folders (up to 3 levels deep). Batch move files with undo support.',
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="8" />
        <path d="m21 21-4.3-4.3" />
      </svg>
    ),
    title: 'Full-Text Search',
    description:
      'Native full-text search powered by Google Drive across all your PDFs and documents. Find notes by content, not just filename.',
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" />
      </svg>
    ),
    title: 'Cross-Device Sync',
    description:
      'Your notes sync across all your devices via Google Drive. File on your phone, read on your laptop.',
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
        <path d="M7 11V7a5 5 0 0 1 10 0v4" />
      </svg>
    ),
    title: 'Privacy by Design',
    description:
      "Your data stays in your Google ecosystem. Quire doesn't operate any custom backend servers. Your files live entirely in your Google Drive.",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="2" x2="22" y1="2" y2="22" />
        <path d="M8.5 16.5a5 5 0 0 1 7 0" />
        <path d="M2 8.82a15 15 0 0 1 4.17-2.65" />
        <path d="M10.66 5c4.01-.36 8.14.9 11.34 3.76" />
        <path d="M16.85 11.25a10 10 0 0 1 2.22 1.68" />
        <path d="M5 13a10 10 0 0 1 5.24-2.76" />
        <line x1="12" x2="12.01" y1="20" y2="20" />
      </svg>
    ),
    title: 'Offline First',
    description:
      'Cache files locally. Read your PDFs and study materials even without an internet connection.',
  },
];

const problems = [
  {
    number: '01',
    title: 'Scattered Notes',
    description:
      'Notes scattered across WhatsApp groups, Telegram channels, and email? Quire brings them all into one unified inbox effortlessly.',
  },
  {
    number: '02',
    title: 'Lost Files',
    description:
      "Can't find that one PDF from last semester? Retrieve anything instantly with Google Drive powered full-text search.",
  },
  {
    number: '03',
    title: 'Device Friction',
    description:
      'Switching between phones and laptops, losing your files? Everything syncs natively across devices so your study materials are always with you.',
  },
];

const faqs = [
  {
    question: 'Is Quire free?',
    answer: 'Free to use. No subscriptions, no ads.',
    answerHtml: true,
  },
  {
    question: 'Does Quire read my other Drive files?',
    answer:
      "No. Quire only accesses its own 'Quire' folder and a hidden app data folder. It cannot see your other Google Drive files.",
    answerHtml: true,
  },
  {
    question: 'What file types are supported?',
    answer:
      'PDF, DOCX, PPTX, TXT, images, spreadsheets, Google Workspace files (.gdoc, .gsheet, .gslides), and more — 15+ academic formats.',
    answerHtml: true,
  },
  {
    question: 'What about offline access?',
    answer:
      'Quire caches your files locally so you can read your PDFs without internet. Full-text search requires an active connection.',
    answerHtml: true,
  },
];

export default function HomePage() {
  const [activeFaq, setActiveFaq] = useState(null);

  return (
    <main>
      <section className={styles.hero}>
        <FadeIn>
          <h1>Your notes, everywhere.</h1>
        </FadeIn>
        <FadeIn delay={100}>
          <p>
            Quire is a smart filing cabinet for your academic life. Collect notes from WhatsApp,
            Telegram, or anywhere — then find them instantly with full-text search. All your files,
            synced across devices via Google Drive. Your files live entirely in your own Google
            account.
          </p>
        </FadeIn>
        <FadeIn delay={200}>
          <div className={styles.ctaGroup}>
            <a href="#features" className="btn btn-primary">Get Started</a>
            <Link to="/privacy" className="btn btn-outline">Read Privacy Policy</Link>
          </div>
        </FadeIn>
        <FadeIn delay={300}>
          <div className={styles.heroIllustration}>
            <img src="/assets/logo.png" alt="Quire Logo" className={styles.heroLogo} />
          </div>
        </FadeIn>
      </section>

      <section className={styles.problemSection}>
        {problems.map((p, i) => (
          <FadeIn key={p.number}>
            <ProblemItem number={p.number} title={p.title} description={p.description} reverse={i % 2 === 1} />
          </FadeIn>
        ))}
      </section>

      <section id="features" className={styles.featuresSection}>
        <h2 className="section-title">Features</h2>
        <div className={styles.featuresGrid}>
          {features.map((f, i) => (
            <FadeIn key={f.title} delay={i < 3 ? i * 100 : (i - 3) * 100}>
              <FeatureCard icon={f.icon} title={f.title} description={f.description} />
            </FadeIn>
          ))}
        </div>
      </section>

      <section className={styles.howItWorks}>
        <div className={styles.howContainer}>
          <FadeIn><h2 className="section-title">How It Works</h2></FadeIn>
          <div className={styles.stepsContainer}>
            <div className={styles.stepsLine} />
            <FadeIn>
              <div className={styles.step}>
                <div className={styles.stepNumber}>1</div>
                <div className={styles.stepContent}>
                  <h3>Share</h3>
                  <p>Receive files from any app via share sheet</p>
                </div>
              </div>
            </FadeIn>
            <FadeIn delay={100}>
              <div className={styles.step}>
                <div className={styles.stepNumber}>2</div>
                <div className={styles.stepContent}>
                  <h3>Organize</h3>
                  <p>Auto-tag and file into subjects</p>
                </div>
              </div>
            </FadeIn>
            <FadeIn delay={200}>
              <div className={styles.step}>
                <div className={styles.stepNumber}>3</div>
                <div className={styles.stepContent}>
                  <h3>Access</h3>
                  <p>Search online, read PDFs offline</p>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      <section className={styles.privacyHighlight}>
        <FadeIn>
          <div className={styles.privacyCard}>
            <h2>Built for Privacy</h2>
            <p>
              Quire respects your privacy. No custom backend servers, no third-party analytics, no
              data selling. Everything runs through your own Google account — and Quire only accesses
              its own Drive folder.
            </p>
            <Link to="/privacy" className="privacy-link">
              Read our full Privacy Policy &rarr;
            </Link>
          </div>
        </FadeIn>
      </section>

      <section className={styles.faqSection}>
        <FadeIn><h2 className="section-title">Frequently Asked Questions</h2></FadeIn>
        {faqs.map((faq, i) => (
          <FadeIn key={faq.question} delay={i * 100}>
            <FAQItem
              question={faq.question}
              answer={faq.answer}
              answerHtml={faq.answerHtml}
              isActive={activeFaq === i}
              onClick={() => setActiveFaq(activeFaq === i ? null : i)}
            />
          </FadeIn>
        ))}
      </section>
    </main>
  );
}

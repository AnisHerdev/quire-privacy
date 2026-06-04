import styles from './PrivacyPage.module.css';

const toc = [
  { href: '#section-1', label: '1. Introduction' },
  { href: '#section-2', label: '2. Information We Collect' },
  { href: '#section-3', label: '3. How We Use Your Information' },
  { href: '#section-4', label: '4. Data Storage and Security' },
  { href: '#section-5', label: '5. Google API Services User Data Policy Compliance' },
  { href: '#section-6', label: "6. Your Rights Under India's Digital Personal Data Protection Act, 2023 (DPDP Act)" },
  { href: '#section-7', label: "7. Children's Privacy" },
  { href: '#section-8', label: '8. Third-Party Services' },
  { href: '#section-9', label: '9. Changes to This Policy' },
  { href: '#section-10', label: '10. Contact' },
];

export default function PrivacyPage() {
  return (
    <main className={styles.main}>
      <h1>Privacy Policy</h1>
      <div className={styles.subtitle}>For Quire — Note Organization App for College Students</div>

      <div className={styles.toc} aria-label="Table of Contents">
        <h2>Table of Contents</h2>
        <ul>
          {toc.map((item) => (
            <li key={item.href}>
              <a href={item.href}>{item.label}</a>
            </li>
          ))}
        </ul>
      </div>

      <section id="section-1" className={styles.sectionCard}>
        <h2>1. Introduction</h2>
        <p>Quire is a note organization app developed by S A Herdev Anish.</p>
        <p><strong>Effective date:</strong> 31 May 2026</p>
        <p><strong>Package name:</strong> com.cobaltclutch.quire</p>
        <p>Quire uses Google Sign-In for authentication and Google Drive for file storage.</p>
        <p><strong>Contact email:</strong> <a href="mailto:quire.note@gmail.com">quire.note@gmail.com</a></p>
      </section>

      <section id="section-2" className={styles.sectionCard}>
        <h2>2. Information We Collect</h2>
        <ul>
          <li><strong>Google Account profile data:</strong> display name, email address, profile picture URL (via Firebase Auth and Google Sign-In).</li>
          <li><strong>Google Drive data (strictly scoped):</strong>
            <ul>
              <li><code>drive.file</code> scope: access limited to files and folders created by Quire (the &ldquo;Quire&rdquo; folder in user&rsquo;s Drive root).</li>
              <li><code>drive.appdata</code> scope: hidden application-specific folder for syncing <code>database.json</code> (invisible to user, contains folder structure and file metadata only).</li>
            </ul>
          </li>
          <li><strong>Search queries:</strong> search terms sent to Google Drive API to search within the Quire folder contents only.</li>
          <li><strong>Locally cached files:</strong> PDFs and documents shared to Quire are cached on-device in a local offline directory for offline viewing.</li>
        </ul>
      </section>

      <section id="section-3" className={styles.sectionCard}>
        <h2>3. How We Use Your Information</h2>
        <ul>
          <li><strong>Authentication:</strong> verify user identity via Google Sign-In.</li>
          <li><strong>File storage:</strong> store user&rsquo;s documents in their own Google Drive &ldquo;Quire&rdquo; folder.</li>
          <li><strong>Sync:</strong> maintain app state (folder structure, file organization) across devices via <code>database.json</code> in Drive appdata.</li>
          <li><strong>Search:</strong> search queries sent to Google Drive API to find documents within the Quire folder.</li>
          <li><strong>Offline access:</strong> locally cache previously viewed files so they are available without internet.</li>
          <li>We do <strong>NOT</strong> use your data for advertising, tracking, profiling, or any purpose beyond core app functionality.</li>
        </ul>
      </section>

      <section id="section-4" className={styles.sectionCard}>
        <h2>4. Data Storage and Security</h2>
        <ul>
          <li>Quire does <strong>NOT</strong> operate any custom backend servers, APIs, or databases.</li>
          <li>All user data remains entirely within the user&rsquo;s own Google account ecosystem.</li>
          <li>PDF files are stored in the user&rsquo;s Google Drive, not on any server controlled by us.</li>
          <li>The <code>database.json</code> file is stored in Google Drive&rsquo;s hidden appdata folder.</li>
          <li>Local cache is stored on-device only and is not transmitted anywhere.</li>
          <li>No user data is ever sold, rented, transferred, or disclosed to any third party.</li>
          <li>We do <strong>NOT</strong> use Firebase Analytics, Firebase Crashlytics, or any analytics/tracking/crash-reporting SDK.</li>
          <li>We do <strong>NOT</strong> use any third-party advertising network, data broker, or tracking service.</li>
        </ul>
      </section>

      <section id="section-5" className={styles.sectionCard}>
        <h2>5. Google API Services User Data Policy Compliance</h2>
        <ul>
          <li>Quire&rsquo;s use of information received from Google APIs will adhere to the <a href="https://developers.google.com/terms/api-services-user-data-policy" target="_blank" rel="noopener noreferrer">Google API Services User Data Policy</a>, including the Limited Use requirements.</li>
          <li>Google profile data (name, email, profile picture) is used solely for authentication and displaying the user&rsquo;s identity within the app.</li>
          <li>Google Drive data is used solely for storing, organizing, and searching the user&rsquo;s own documents within the Quire folder.</li>
          <li>We do not transfer Google user data to any third party except as necessary to provide the service (i.e., to Google&rsquo;s own Firebase and Drive APIs).</li>
          <li>We do not use Google user data for serving advertisements.</li>
        </ul>
      </section>

      <section id="section-6" className={styles.sectionCard}>
        <h2>6. Your Rights Under India&rsquo;s Digital Personal Data Protection Act, 2023 (DPDP Act)</h2>
        <ul>
          <li><strong>Right to Access:</strong> You can access all your data anytime within the app — your files, folders, and profile information.</li>
          <li><strong>Right to Correction:</strong> You can correct your Google profile information through your Google Account settings. Folder and file names can be edited directly within Quire.</li>
          <li><strong>Right to Erasure:</strong> You can delete any file or folder within Quire. This permanently removes it from your Google Drive. You can also revoke Quire&rsquo;s access to your Google Account at <a href="https://myaccount.google.com/permissions" target="_blank" rel="noopener noreferrer">myaccount.google.com/permissions</a>.</li>
          <li><strong>Right to Withdraw Consent:</strong> You can disconnect your Google account from Quire at any time by signing out from the app settings, or by revoking access at your Google Account permissions page (<a href="https://myaccount.google.com/permissions" target="_blank" rel="noopener noreferrer">myaccount.google.com/permissions</a>).</li>
          <li><strong>Nomination:</strong> You may nominate any other individual to exercise your rights in the event of your death or incapacity by contacting us at <a href="mailto:quire.note@gmail.com">quire.note@gmail.com</a>.</li>
          <li><strong>Grievance Officer:</strong> For any data protection concerns, contact our Grievance Officer: S A Herdev Anish, email: <a href="mailto:quire.note@gmail.com">quire.note@gmail.com</a>. We will respond within 30 days as required by the DPDP Act.</li>
        </ul>
      </section>

      <section id="section-7" className={styles.sectionCard}>
        <h2>7. Children&rsquo;s Privacy</h2>
        <ul>
          <li>Quire is used by high school and college students. We do not knowingly collect personal information from children under 13 without verifiable parental consent.</li>
          <li>If you are a parent or guardian and believe your child has provided us personal information without your consent, please contact us at <a href="mailto:quire.note@gmail.com">quire.note@gmail.com</a>.</li>
          <li>If we become aware that we have collected personal data from a child under 13 without parental consent, we will delete it promptly.</li>
          <li>Users under 13 must have a parent or guardian create and manage the Google Account used with Quire (Google&rsquo;s own policy requires parental consent for under-13 Google Accounts via Family Link).</li>
        </ul>
      </section>

      <section id="section-8" className={styles.sectionCard}>
        <h2>8. Third-Party Services</h2>
        <h3>Used by Quire:</h3>
        <ul>
          <li><strong>Firebase Authentication (Google)</strong> — for secure sign-in</li>
          <li><strong>Google Drive API</strong> — for file storage and sync</li>
          <li><strong>Google Sign-In SDK</strong> — for authentication</li>
        </ul>
        <p>These services have their own privacy policies:</p>
        <ul>
          <li><strong>Google Privacy Policy:</strong> <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">https://policies.google.com/privacy</a></li>
          <li><strong>Firebase Privacy:</strong> <a href="https://firebase.google.com/support/privacy" target="_blank" rel="noopener noreferrer">https://firebase.google.com/support/privacy</a></li>
        </ul>

        <h3>Third-party services NOT used by Quire:</h3>
        <ul>
          <li>No advertising networks (no AdMob, no Meta Audience Network, etc.)</li>
          <li>No analytics platforms (no Firebase Analytics, no Mixpanel, no Amplitude, etc.)</li>
          <li>No crash reporting (no Firebase Crashlytics, no Sentry, etc.)</li>
          <li>No data brokers or tracking SDKs</li>
          <li>No social media SDKs (no Facebook SDK, no Twitter SDK, etc.)</li>
        </ul>
      </section>

      <section id="section-9" className={styles.sectionCard}>
        <h2>9. Changes to This Policy</h2>
        <ul>
          <li>We may update this Privacy Policy from time to time.</li>
          <li>Any changes will be posted on this page with an updated effective date.</li>
          <li>For material changes, we will notify users through the app at next launch.</li>
          <li>Continued use of Quire after changes constitutes acceptance of the updated policy.</li>
        </ul>
      </section>

      <section id="section-10" className={styles.sectionCard}>
        <h2>10. Contact</h2>
        <ul>
          <li><strong>Data Controller:</strong> S A Herdev Anish</li>
          <li><strong>App:</strong> Quire (com.cobaltclutch.quire)</li>
          <li><strong>Email:</strong> <a href="mailto:quire.note@gmail.com">quire.note@gmail.com</a></li>
          <li><strong>Response time:</strong> within 30 days</li>
        </ul>
      </section>
    </main>
  );
}

import { Link } from 'react-router-dom';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.content}>
        <div className={styles.left}>
          <span className="logo">Quire</span>
          <p>Your notes, everywhere.</p>
        </div>
        <div className={styles.middle}>
          <Link to="/privacy">Privacy Policy</Link>
          <a href="mailto:quire.note@gmail.com">Contact</a>
        </div>
        <div className={styles.right}>
          <p>Made with care for students everywhere.<br />&copy; 2026</p>
        </div>
      </div>
    </footer>
  );
}

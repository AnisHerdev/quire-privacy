import { useState } from 'react';
import { Link } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';
import styles from './Navbar.module.css';

export default function Navbar({ hideFeatures = false }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <Link to="/" className="logo">Quire</Link>
        <div className={styles.right}>
          <div className={`${styles.links} ${menuOpen ? styles.show : ''}`}>
            {!hideFeatures && <a href="#features" onClick={closeMenu}>Features</a>}
            {hideFeatures && <Link to="/" onClick={closeMenu}>&larr; Home</Link>}
            <Link to="/privacy" onClick={closeMenu}>Privacy</Link>
            <a href="mailto:quire.note@gmail.com" onClick={closeMenu}>Contact</a>
          </div>
          <div className={styles.actions}>
            <ThemeToggle />
            <button
              className={styles.menuBtn}
              onClick={() => setMenuOpen(prev => !prev)}
              aria-label="Toggle menu"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </svg>
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
}

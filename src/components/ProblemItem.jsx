import styles from './ProblemItem.module.css';

export default function ProblemItem({ number, title, description, reverse = false }) {
  return (
    <div className={`${styles.item} ${reverse ? styles.reverse : ''}`}>
      <div className={styles.number}>{number}</div>
      <div className={styles.text}>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

import styles from './FAQItem.module.css';

export default function FAQItem({ question, answer, isActive, onClick, answerHtml = false }) {
  return (
    <div className={`${styles.item} ${isActive ? styles.active : ''}`}>
      <button className={styles.question} onClick={onClick}>
        {question}
        <svg className={styles.icon} viewBox="0 0 24 24">
          <path d="M7 10l5 5 5-5z" />
        </svg>
      </button>
      <div className={styles.answer}>
        <p>{answerHtml ? <><br />{answer}</> : answer}</p>
      </div>
    </div>
  );
}

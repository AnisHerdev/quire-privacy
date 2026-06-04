import { useState, useCallback } from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

export default function FadeIn({ children, delay = 0, className = '' }) {
  const [visible, setVisible] = useState(false);
  const cb = useCallback(() => setVisible(true), []);
  const ref = useIntersectionObserver(cb);

  const delayClass = delay === 100 ? 'delay-100' : delay === 200 ? 'delay-200' : delay === 300 ? 'delay-300' : '';

  return (
    <div ref={ref} className={`fade-up ${visible ? 'visible' : ''} ${delayClass} ${className}`}>
      {children}
    </div>
  );
}

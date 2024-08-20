'use client'

import styles from './counter.module.css';
import { useState, useEffect, useRef } from 'react';


const Counter = ({ target, duration = 2000 }) => {

    const [count, setCount] = useState(0);
    const counterRef = useRef(null);

    useEffect(() => {

        let animationFrameId;
    
        const startCounter = () => {
          const startTime = performance.now();
          const step = () => {
            const elapsed = performance.now() - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const newCount = Math.ceil(progress * target);
    
            setCount(newCount);
    
            if (progress < 1) {
              animationFrameId = requestAnimationFrame(step);
            }
          };
    
          step();
        };
    
        const handleIntersection = (entries) => {
          if (entries[0].isIntersecting) {
            startCounter();
            observer.disconnect(); // Stop observing after starting the counter
          }
        };
    
        const observer = new IntersectionObserver(handleIntersection, {
          threshold: 0.1 // Adjust as needed
        });
    
        if (counterRef.current) {
          observer.observe(counterRef.current);
        }
    
        return () => {
          if (animationFrameId) {
            cancelAnimationFrame(animationFrameId);
          }
          observer.disconnect();
        };

    }, [target, duration]);


  return (
    <div ref={counterRef}>{count}</div>
  )
}

export default Counter

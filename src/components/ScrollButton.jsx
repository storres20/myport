import React, { useState, useEffect } from 'react';
import { FaArrowCircleUp } from 'react-icons/fa';
import styles from './ScrollButton.module.css';

function ScrollButton() {
  /* **** */

  // The back-to-top button is hidden at the beginning
  const [showButton, setShowButton] = useState(false);

  const scrollChange = () => {
    if (window.pageYOffset > 300) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', scrollChange);
    // Fix ... Warning: Can't perform a React state update on an unmounted component.
    return () => {
      window.removeEventListener('scroll', scrollChange);
    };
  }, []);

  // This function will scroll the window to the top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // for smoothly scrolling
    });
  };

  return (
    <div className={styles.button}>
      {showButton && (
        <FaArrowCircleUp onClick={scrollToTop} />
      )}
    </div>
  );
}

export default ScrollButton;

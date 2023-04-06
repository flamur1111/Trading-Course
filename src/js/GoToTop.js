import React, { useState, useEffect } from 'react';

function GoToTopButton() {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const position = window.pageYOffset;
      setScrollPosition(position);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const showGoToTop = scrollPosition > 100;

  return (
    <>
      {showGoToTop && (
        <button className='GoTop' onClick={() => window.scrollTo(0, 0)}>Go To Top</button>
      )}
    </>
  );
}

export default GoToTopButton;
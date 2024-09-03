import React, { useEffect, useState, useRef } from 'react';

const HiddenComponent = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false);
  const componentRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              setIsVisible(true);
            }, 200); 
          } else if (entry.intersectionRatio === 0) {
            setIsVisible(false); 
          }
        });
      },
      {
        threshold: [0, 1], 
      }
    );

    if (componentRef.current) {
      observer.observe(componentRef.current);
    }

    return () => {
      if (componentRef.current) {
        observer.unobserve(componentRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={componentRef}
      className={`hidden-component ${isVisible ? 'visible' : ''}`}
    >
      {children}
    </div>
  );
};

export default HiddenComponent;

import React, { useEffect, useState } from 'react';
import wh from '../assets/wheel.png';
import './Wheel.css';

const Wheel = ({ scrollRef }) => {
  const [rotation, setRotation] = useState(0);

  useEffect(() => {
    const container = scrollRef.current;

    if (!container) return;

    const handleScroll = () => {
      const scrollTop = container.scrollTop;
      setRotation(scrollTop / 1); // Control speed of rotation here
    };

    container.addEventListener('scroll', handleScroll);

    return () => {
      container.removeEventListener('scroll', handleScroll);
    };
  }, [scrollRef]);

  return (
    <div className="wheel-container">
      <img
        src={wh}
        alt="Wheel"
        style={{transform: `rotate(${rotation}deg) scale(8)`}}
        className="wheel-img"
      />
    </div>
  );
};

export default Wheel;

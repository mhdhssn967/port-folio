import React, { useState, useEffect, useRef } from 'react';
import wheel from '../assets/wheel.png';
import './DisplayPage.css';

const DisplayPage = ({ setShowDisplay }) => {
  const rows = 15;
  const cols = 15;
  const totalWheels = rows * cols;

  const [rotations, setRotations] = useState(
    Array.from({ length: totalWheels }, () => Math.random() * 360)
  );

  const [exit, setExit] = useState(false);
  const boostRef = useRef(0); // for scroll boost

  useEffect(() => {
    const interval = setInterval(() => {
      setRotations((prev) =>
        prev.map((angle, idx) => {
          const baseSpeed = (idx % 2 === 0 ? 0.3 : 0.5) * 6;
          const boosted = baseSpeed + boostRef.current;
          return angle + boosted;
        })
      );

      // Decay boost over time
      boostRef.current = Math.max(0, boostRef.current - 0.5);
    }, 50);

    return () => clearInterval(interval);
  }, []);

  const handleScroll = (e) => {
    const scrollY = e.target.scrollTop;
    const maxScroll = e.target.scrollHeight - e.target.clientHeight;

    // Add boost on scroll
    boostRef.current = 20;

    if (scrollY > maxScroll * 0.3 && !exit) {
      setExit(true);
      setTimeout(() => {
        setShowDisplay(false);
      }, 600);
    }
  };

  // Optional: handle mouse movement boost
  const handleMouseMove = () => {
    boostRef.current = 20;
  };

  // Calculate overlay scale based on average rotation
  const averageRotation = rotations.reduce((a, b) => a + b, 0) / totalWheels;

  return (
    <div
      className={`display-grid ${exit ? 'fade-out' : ''}`}
      onScroll={handleScroll}
      onMouseMove={handleMouseMove}
    >
      {rotations.map((rotation, index) => {
        const isLarge = (Math.floor(index / cols) + index) % 2 === 0;
        return (
          <img
            key={index}
            src={wheel}
            alt="wheel"
            className={`wheel-image ${isLarge ? 'large' : 'small'}`}
            style={{ transform: `rotate(${rotation}deg)` }}
          />
        );
      })}

      <div
        className="hero-overlay"
              >
        <h1>Mohammed Hussain A</h1>
        <h2>Full Stack Developer | Designer | Problem Solver</h2>
        <p>I build intuitive experiences & solve real-world problems with code & design.</p>
        <div className="hero-buttons">
          <a href="/path-to-your-resume.pdf" className="hero-btn" download>
            📄 View Resume
          </a>
          <a href="mailto:mhdhssn967@gmail.com" className="hero-btn">
            ✉️ Contact Me
          </a>
        </div>
      </div>

      <span className="scroll-down">↓ Scroll to Explore</span>
    </div>
  );
};

export default DisplayPage;

import { useEffect, useState } from "react";
import "./MouseTrail.css"; 

const NUM_TRAIL_CIRCLES = 10;

const MouseTrail = () => {
  const [trail, setTrail] = useState([]);

  useEffect(() => {
    const moveMouse = (e) => {
      setTrail((prevTrail) => {
        const newTrail = [...prevTrail, { x: e.clientX, y: e.clientY }];
        return newTrail.slice(-NUM_TRAIL_CIRCLES); 
      });
    };

    window.addEventListener("mousemove", moveMouse);
    return () => window.removeEventListener("mousemove", moveMouse);
  }, []);

  return (
    <>
      {trail.map((pos, index) => (
        <div
          key={index}
          className="trail-circle"
          style={{
            left: `${pos.x - 20}px`,
            top: `${pos.y - 20}px`,
            transform: `scale(${1 - index * 1})`,
            opacity: `${1 - index * 0.1}`,
          }}
        />
      ))}
    </>
  );
};

export default MouseTrail;

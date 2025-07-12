import React, { useEffect, useState } from 'react';
import './SkillWheel.css';

import ai from '../assets/ai.png';
import axios from '../assets/axios.png';
import blender from '../assets/blender.png';
import bootstrap from '../assets/bootstrap.png';
import css from '../assets/css.png';
import ex from '../assets/ex.webp';
import figma from '../assets/figma.png';
import git from '../assets/git.png';
import html from '../assets/html.webp';
import ij from '../assets/ij.png';
import java from '../assets/java.png';
import js from '../assets/js.png';
import mongo from '../assets/mongo.svg';
import mui from '../assets/mui.png';
import mysql from '../assets/mysql.png';
import node from '../assets/node.png';
import pc from '../assets/pc.png';
import portfolio from '../assets/Portfolio.jpg';
import postman from '../assets/postman.webp';
import ps from '../assets/ps.png';
import python from '../assets/python.webp';
import react from '../assets/react.webp';
import rest from '../assets/rest.png';
import tailwind from '../assets/tailwind.png';
import vite from '../assets/vite.png';
import vs from '../assets/vs.png';
import fb from '../assets/fb.png'

const tools = [
  { name: 'HTML', image: html, category: 'Development' },
  { name: 'CSS', image: css, category: 'Development' },
  { name: 'JavaScript', image: js, category: 'Development' },
  { name: 'Bootstrap', image: bootstrap, category: 'Development' },
  { name: 'Tailwind', image: tailwind, category: 'Development' },
  { name: 'React', image: fb, category: 'Development' },

  { name: 'MUI', image: mui, category: 'Development' },
  { name: 'Vite', image: vite, category: 'Development' },
  { name: 'Node.js', image: node, category: 'Development' },
  { name: 'Express.js', image: ex, category: 'Development' },
  { name: 'REST API', image: rest, category: 'Development' },
  { name: 'Axios', image: axios, category: 'Development' },
  { name: 'VS Code', image: vs, category: 'Development' },
  { name: 'IntelliJ', image: ij, category: 'Development' },
  { name: 'Pycharm', image: pc, category: 'Development' },
  { name: 'Git', image: git, category: 'Development' },
  { name: 'Postman', image: postman, category: 'Development' },
  { name: 'Python', image: python, category: 'Programming & DB' },
  { name: 'Java', image: java, category: 'Programming & DB' },
  { name: 'MongoDB', image: mongo, category: 'Programming & DB' },
  { name: 'MySQL', image: mysql, category: 'Programming & DB' },
  { name: 'Photoshop', image: ps, category: 'Design & Media' },
  { name: 'Illustrator', image: ai, category: 'Design & Media' },
  { name: 'Figma', image: figma, category: 'Design & Media' },
  { name: 'Blender', image: blender, category: 'Design & Media' },
];


const SkillWheel = ({ scrollRef }) => {
  const [rotation, setRotation] = useState(0);

  useEffect(() => {
    const container = scrollRef?.current;
    if (!container) return;

    const onScroll = () => {
      const scrollTop = container.scrollTop;
      setRotation(scrollTop * 0.6); // Adjust rotation speed
    };

    container.addEventListener('scroll', onScroll);
    return () => container.removeEventListener('scroll', onScroll);
  }, [scrollRef]);

  const center = 150; // center of wheel
  const radius = 310; // radius for icon placement

  return (
    <div className="corner-slice">
       <div
    className="skill-wheel"
    style={{ transform: `rotate(${rotation}deg)` }}
  >
    {tools.map((tool, index) => {
      const angle = (360 / tools.length) * index;
      const rad = (angle * Math.PI) / 180;
      const x = center + radius * Math.cos(rad) - 25;
      const y = center + radius * Math.sin(rad) - 25;

      

      return (
        <div
          key={index}
          className="tool-icon"
          style={{
            transform: `translate(${x}px, ${y}px) rotate(${-rotation}deg)` // icons stay upright
          }}
        >
          <img src={tool.image} alt={tool.name} />
        </div>
      );
    })}
  </div>

  {/* Non-rotating center heading */}
  <div className="wheel-center-text">
    <h3>Tools & Technologies</h3> {/* Replace with your preferred heading */}
  </div>
    </div>
  );
};

export default SkillWheel;
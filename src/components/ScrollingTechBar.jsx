import React, { useEffect, useRef, useState } from 'react';
import './ScrollingTechBar.css';

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
import postman from '../assets/postman.webp';
import ps from '../assets/ps.png';
import python from '../assets/python.webp';
import react from '../assets/react.webp';
import rest from '../assets/rest.png';
import tailwind from '../assets/tailwind.png';
import vite from '../assets/vite.png';
import vs from '../assets/vs.png';
import fb from '../assets/fb.png';

const tools = [
  html, css, js, bootstrap, tailwind, fb, mui, vite, node, ex, rest, axios,
  vs, ij, pc, git, postman, python, java, mongo, mysql, ps, ai, figma, blender
];

const ScrollingTechBar = ({ mobScrollRef }) => {
  const [scrollX, setScrollX] = useState(0);

  useEffect(() => {
    const container = mobScrollRef?.current;
    if (!container) return;

    const handleScroll = () => {
      const scrollTop = container.scrollTop;
      setScrollX(scrollTop * 1.5); // adjust speed here
    };

    container.addEventListener('scroll', handleScroll);
    return () => container.removeEventListener('scroll', handleScroll);
  }, [mobScrollRef]);

  return (
    <div className="scrolling-tech-bar">
      <div
        className="tech-icons-track"
        style={{
          transform: `translateX(-${scrollX % (tools.length * 80)}px)`
        }}
      >
        {[...tools, ...tools].map((img, idx) => (
          <div className="tech-icon" key={idx}>
            <img src={img} alt="tech" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ScrollingTechBar;

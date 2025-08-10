import React, { useState, useEffect } from 'react';
import Landing from './pages/Landing';
import MouseTrail from './components/MouseTrail';
import Loader from './components/Preloader';
import './App.css'

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
  const handleLoad = () => {
    // Force loader to stay for at least 2 seconds
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  };

  if (document.readyState === "complete") {
    handleLoad();
  } else {
    window.addEventListener("load", handleLoad);
  }

  return () => {
    window.removeEventListener("load", handleLoad);
  };
}, []);

  return (
    <>
      {loading && 
        <div className='loder'><Loader /></div>
      }
        <div>
          <MouseTrail />
          <Landing />
        </div>
    </>
  );
};

export default App;

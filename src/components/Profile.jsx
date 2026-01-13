import React, { useEffect, useState } from 'react';
import './Profile.css';
import proimage from '../assets/face.png';

const Profile = ({ mobScrollRef }) => {
  const [scale, setScale] = useState(1);
  const [opacity, setOpacity] = useState(1);

  useEffect(() => {
    const container = mobScrollRef?.current;
    if (!container) return;

    const handleScroll = () => {
      const scrollTop = container.scrollTop;

      // Shrinks to as low as 0.2
      const newScale = Math.max(0.2, 1 - scrollTop / 400);
      const newOpacity = Math.max(0, 1 - scrollTop / 300); // Fades out completely

      setScale(newScale);
      setOpacity(newOpacity);
    };

    container.addEventListener('scroll', handleScroll);
    return () => container.removeEventListener('scroll', handleScroll);
  }, [mobScrollRef]);

  return (
    <div
      className="profile-container" 
      style={{
        transform: `scale(${scale})`,
        opacity: opacity,
        transition: 'transform 0.2s ease-out, opacity 0.2s ease-out',
      }}
    >
      <img src={proimage} alt=""  />

      <div className="det-container ">
        <h2 style={{ textWrap: 'nowrap' }}>Mohammed Hussain</h2>
        <h3>Passionate about code, design, and problem-solving.</h3>

        <div className="details">
          <ul>
            <li><i className="ri-phone-fill"></i> 7025 70 7936</li>
            <li><i className="ri-mail-fill"></i> mhdhssn967@gmail.com</li>
            <li><i className="ri-map-pin-fill"></i> Palakkad, Kerala</li>
          </ul>
        </div>

       <div className='btns'>
          <a href="mailto:mhdhssn967@gmail.com" className="contact-button">
            <i className="ri-discuss-line"></i> Let's Talk
          </a>
<a href="/Mohammed-Hussain-A-Resume.pdf" download className='contact-button resume-btn'>

    <i className="ri-download-line"></i> Resume

</a>
  
       </div>
      </div>
      
    </div>
  );
};

export default Profile;

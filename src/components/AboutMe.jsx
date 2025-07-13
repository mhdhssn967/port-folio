import React from 'react'
import './AboutMe.css'

const AboutMe = () => {
  return (
    <>
    <div className='main-point' >
        <h1 className='main-head' >SOFTWARE  <span>ENGINEER</span></h1>
        <p>Driven by a passion for blending design and technology to build impactful digital experiences. I specialize in turning concepts into functional, visually compelling solutions.</p>
    </div>
    <div className="what-i-do-section" >
  <h2>What I Do</h2>
  <div className="what-i-do-cards" >
    <div className="card">
      <i className="ri-code-s-slash-line"></i>
      <h3>Full-Stack Dev</h3>
      <p>Build responsive apps with modern tools.</p>
    </div>

    <div className="card">
      <i className="ri-paint-brush-line"></i>
      <h3>UI/UX & Design</h3>
      <p>Design clean, user-friendly interfaces and visuals.</p>
    </div>

    <div className="card">
      <i className="ri-megaphone-line"></i>
      <h3>Communication</h3>
      <p>Clear, confident in speaking, writing, and presenting.</p>
    </div>

    <div className="card">
      <i className="ri-lightbulb-line"></i>
      <h3>Leadership</h3>
      <p>Lead teams, manage events, and drive collaboration.</p>
    </div>
  </div>
</div>



    {/* <div className='about-me'>
<h1 style={{fontSize:'50px',textWrap:'nowrap'}} >About me</h1>
  <p><i class="ri-home-heart-line"></i> <strong>From Kerala, Rooted in Culture:</strong> <br /> Born and raised in a land of rich tradition and innovation, where my love for tech began.</p>
  
  <p><i class="ri-computer-line"></i> <strong>Tech & Gaming Enthusiast:</strong> <br /> Video games sparked my passion for coding, leading me into software development and creative problem-solving.</p>
  
  
  <p><i class="ri-book-open-line"></i> <strong>Curious Reader:</strong><br /> Drawn to stories that challenge perspectives and explore human emotion.</p>
  
  <p><i class="ri-mic-line"></i> <strong>Skilled Communicator:</strong><br /> Experienced in public speaking, event hosting, and team collaboration.</p>
  
  <p><i class="ri-brush-line"></i> <strong>Design-Driven Developer:</strong> <br />Blending aesthetics with functionality to build intuitive, user-focused digital experiences.</p>
    </div> */}

<h2>Education</h2>
<div class="education" >
  <p><i class="ri-school-line"></i> <strong>Schooling – Assisi EMHSS (2018)</strong><br />
    <ul><li>SSLC with full A+</li>  <li>Red Cross member</li>  <li>Selected for Govt. Programming Upliftment Program.</li></ul>
  </p>

  <p><i class="ri-graduation-cap-line"></i> <strong>Higher Secondary – Assisi EMHSS (2018–2020)</strong><br />
    <ul><li>School Leader</li>  <li>State Scratch Programming Winner</li> <li>Student of the Year.</li></ul>
  </p>

  <p><i class="ri-building-line"></i> <strong>B.Tech – JCET (2020–2024)</strong><br />
    <ul><li>Computer Science & Engineering graduate</li>  <li>Led tech and cultural events</li>  <li>President, Xmeron</li>  <li>Media Club Lead.</li></ul>
  </p>
</div>

    
    </>
  )
}

export default AboutMe
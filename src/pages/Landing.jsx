import React, { useRef } from 'react'
import Profile from '../components/Profile'
import './Landing.css'
import AboutMe from '../components/AboutMe'
import Wheel from '../components/Wheel'
import Experience from '../components/Experience'
import SkillWheel from '../components/SkillWheel'
import Social from '../components/Social'
import Projects from '../components/Projects'



const Landing = () => {
     const scrollRef = useRef(null);
  return (
    <>
<SkillWheel scrollRef={scrollRef}/>
{/* <h1 className='code-create' >Code. Create. Connect.</h1> */}
<Social/>

 <div className="main-container">
        <div className="left-container" >
          <div className="profile-tab">
            <Profile />
          </div>
        </div>

        <div className="right-container" ref={scrollRef}>
          <AboutMe />
          <Experience/>
          <Projects/>
          <div className='extra'></div>
        </div>
      </div>

      <Wheel scrollRef={scrollRef} />
      

</>
  )
}

export default Landing
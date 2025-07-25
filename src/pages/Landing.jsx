import React, { useRef } from 'react'
import Profile from '../components/Profile'
import './Landing.css'
import AboutMe from '../components/AboutMe'
import Wheel from '../components/Wheel'
import Experience from '../components/Experience'
import SkillWheel from '../components/SkillWheel'
import Social from '../components/Social'
import Projects from '../components/Projects'
import ScrollingTechBar from '../components/ScrollingTechBar'
import WheelMob from '../components/WheelMob'



const Landing = () => {
     const scrollRef = useRef(null);
     const mobScrollRef=useRef(null)
  return (
    <>

{/* <h1 className='code-create' >Code. Create. Connect.</h1> */}
<Social/>

 <div className="main-container" ref={mobScrollRef}>
  <div className='skill-pc'><SkillWheel scrollRef={scrollRef}/></div>
        <div className="left-container" >
          
          <div className='skill-mob'><ScrollingTechBar mobScrollRef={mobScrollRef}/></div>
          <div className="profile-tab">
            <Profile mobScrollRef={mobScrollRef}/>
            
          </div>
        </div>

        <div className="right-container" ref={scrollRef}>
          <AboutMe/>
          <Experience/>
          <Projects/>
          <div className='extra'></div>
        </div>
      </div>

      <div className='skill-pc'><Wheel scrollRef={scrollRef} /></div>
      <div className='skill-mob'><WheelMob mobScrollRef={mobScrollRef }/></div>
      

</>
  )
}

export default Landing
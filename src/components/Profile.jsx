import React from 'react'
import './Profile.css'
import proimage from '../assets/face.png'

const Profile = () => {
  return (
    <>
    <div className='profile-container' >
        <img src={proimage} alt="" />
       
            

        <div className='det-container'>
 <h2 style={{textWrap:'nowrap'}}>Mohammed Hussain</h2>

 <h3>Passionate about code, design, and problem-solving.</h3>
 {/* <div className='social'>
    <a href='https://github.com/mhdhssn967'><i title='github' class="ri-github-fill"></i></a>
    <a href='www.linkedin.com/in/mhdhssn'><i title='linked-in' class="ri-linkedin-box-fill"></i></a>
    <a href='https://www.instagram.com/hxn._____?igsh=MTk5djR1dzV2eXg0OA=='><i title='instagram' class="ri-instagram-fill"></i></a>
 </div> */}
 <div className='details'>
    <ul>
        <li><i class="ri-phone-fill"></i> 7025 70 7936</li>
        <li><i class="ri-mail-fill"></i> mhdhssn967@gmail.com</li>
        <li><i class="ri-map-pin-fill"></i> Palakkad, Kerala</li>
    </ul>

 </div>
        </div>
    </div>
    </>
  )
}

export default Profile
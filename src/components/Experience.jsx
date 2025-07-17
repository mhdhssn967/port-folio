import React from 'react'
import './Experience.css'
import assisi from '../assets/companies/assisi.png'
import conva from '../assets/companies/conva.png'
import iteam from '../assets/companies/iteam.png'
import luminar from '../assets/companies/luminar.png'
import oq from '../assets/companies/OQ.png'
import torc from '../assets/companies/torc.png'


const Experience = () => {
    const experience = [
       {
    role: "Full Stack Developer",
    company: "Oqulix Pvt Ltd",
    duration: "Mar 2020 – May 2021",
    icon: oq,
    description: "Managed educational content during the COVID-19 pandemic, assisting teachers and students in transitioning to online learning."
  },
  {
    role: "MERN Stack Intern",
    company: "Luminar Technolabs",
    duration: "July 2024 – Jan 2025",
    icon: luminar,
    description: "Gaining hands-on experience in full-stack web development using MongoDB, Express.js, React, and Node.js."
  },
  {
    role: "Graphic Designer",
    company: "iTeam",
    duration: "July 2023 – Dec 2023",
    icon: iteam,
    description: "Created digital content, delivering customized designs for branding and promotional materials."
  },
  {
    role: "Marketing Intern",
    company: "ConvAI Innovations Pvt. Ltd.",
    duration: "Nov 2022 – Nov 2023",
    icon: conva,
    description: "Collaborated with the marketing team, attended client meetings, and contributed to client-focused strategies to enhance product offerings."
  },
  {
    role: "Intern",
    company: "Torc Infotech",
    duration: "May 2023 – May 2023",
    icon: torc,
    description: "Learned full-stack development, gaining hands-on experience in both frontend and backend technologies."
  },

  {
    role: "Educational Media Facilitator",
    company: "Assisi EMHSS",
    duration: "Mar 2020 – May 2021",
    icon: assisi,
    description: "Managed educational content during the COVID-19 pandemic, assisting teachers and students in transitioning to online learning."
  },
 
];

  return (
    <>
  <h2>Experience</h2>
  <div className="exp-wrapper" >
    <div className="exp-container">
      {[...experience, ...experience].map((exp, index) => (
        <div className="exp" key={index}>
          <img className="comp-logo" src={exp.icon} alt={exp.company} />
          <p>{exp.role}</p>
        </div>
      ))}
    </div>
  </div>
</>

  )
}

export default Experience
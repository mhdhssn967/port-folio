import React from 'react'
import './Experience.css'

const Experience = () => {
    const experience = [
  {
    role: "MERN Stack Intern",
    company: "Luminar Technolabs",
    duration: "July 2024 – Jan 2025",
    icon: "https://studyapp-prod-s3.s3.amazonaws.com/seo/og_images/logo_qZlpEoR.png",
    description: "Gaining hands-on experience in full-stack web development using MongoDB, Express.js, React, and Node.js."
  },
  {
    role: "Graphic Designer",
    company: "iTeam",
    duration: "July 2023 – Dec 2023",
    icon: "https://scontent.fccj3-1.fna.fbcdn.net/v/t39.30808-6/302126143_111019161737281_1120704680258358245_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=Ht4VSihOlaMQ7kNvwECXZAO&_nc_oc=AdlRc8MoFXaaRZwsKM7NIlElKGlVh4WGmfv2C-WJS29YecXIv30Ng6DoKlXT-sbWEDI&_nc_zt=23&_nc_ht=scontent.fccj3-1.fna&_nc_gid=4NqA3TrABVDHrQKdZKgaQQ&oh=00_AfSf65L3s46xdQZofulAXrKWvJNbxcoGwHhaIOVi-uhguw&oe=6878085A",
    description: "Created digital content, delivering customized designs for branding and promotional materials."
  },
  {
    role: "Marketing Intern",
    company: "ConvAI Innovations Pvt. Ltd.",
    duration: "Nov 2022 – Nov 2023",
    icon: "https://media.licdn.com/dms/image/v2/C4D0BAQFdlQ7Lmt-2EQ/company-logo_200_200/company-logo_200_200/0/1633549703019?e=1755129600&v=beta&t=tuQvOvFxbBFM75s1I4-94HPMCxb24JaU-4ZQuT4tE2s",
    description: "Collaborated with the marketing team, attended client meetings, and contributed to client-focused strategies to enhance product offerings."
  },
  {
    role: "Intern",
    company: "Torc Infotech",
    duration: "May 2023 – May 2023",
    icon: "https://media.licdn.com/dms/image/v2/D560BAQHNUHdD-uRnVg/company-logo_200_200/company-logo_200_200/0/1702038133622/torc_infotech_logo?e=2147483647&v=beta&t=WX5bcl6tbPipwF4MvlLsODU5MnuUO3VOXUAt6oCG7fk",
    description: "Learned full-stack development, gaining hands-on experience in both frontend and backend technologies."
  },

  {
    role: "Educational Media Facilitator",
    company: "Assisi EMHSS",
    duration: "Mar 2020 – May 2021",
    icon: "https://play-lh.googleusercontent.com/54y3MukmblodujCdZEkm0ZtJ45DabMhhdJU1xlQJNBWpdkNqVdacjjU_EWnnsi6-EYri",
    description: "Managed educational content during the COVID-19 pandemic, assisting teachers and students in transitioning to online learning."
  }
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
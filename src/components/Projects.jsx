import React, { useEffect, useState } from 'react';
import './Projects.css'
import crm from '../assets/crm.png'
import finance from '../assets/finance.png'
import task from '../assets/task.png'

const projectList = [
  {
    title: 'Finance Tracker App',
    description: 'A personal finance manager to track income, expenses, and visualize savings trends with graphs.',
    link: 'nest-finance-dun.vercel.app',
    img:finance
  },
  {
    title: 'CRM System',
    description: 'Customer Relationship Management tool designed to manage leads, track sales, and handle customer interactions.',
    link: 'nest-crm-henna.vercel.app',
    img:crm
  },
  {
    title: 'Task Management App',
    description: 'A productivity app with features like project boards, task tracking, deadlines, and user assignment.',
    link: 'nest-pma.vercel.app',
    img:task
  }
];
const allowedRepos = ['bmi-calculator', 'enchantedEmporium', 'figmatemplate','media-player','omega-warfare','parallax','playstation'];


    const Projects = () => {
  const [repos, setRepos] = useState([]);
  console.log(repos);
  

  useEffect(() => {
    fetch('https://api.github.com/users/mhdhssn967/repos')
      .then((res) => res.json())
      .then((data) => {
        const filtered = data.filter(repo => repo.homepage); // only if you added live links
        setRepos(filtered);
      });
  }, []);
  return (
    <>
        <section className="projects-section">
          <h2 className="section-title">Recent Projects</h2>
          <div className="projects-grid">
            {projectList.map((project, index) => (
                <>
                    <div className='project-container'>
                        <div className='project-image'>
                            <img width={'320px'} src={project.img} alt="" />
                            <h3>{project.title}</h3>
                        </div>
                        <div className="project-card" key={index}>
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                    
                    <a href={project.link} target="_blank" rel="noopener noreferrer"><i class="ri-link"></i> View Project</a>
                  </div>
                    </div>
                  
                </>
            ))}
          </div>
        </section>
        <section>
      <h2>GitHub Projects</h2>
      <div className="git-projects-grid">
        {repos
  .filter(repo => allowedRepos.includes(repo.name))
  .map((repo) => (
    <div className="git-project-card" key={repo.id}>
      <h3>{repo.name}</h3>
      <p>{repo.description}</p>
      <a href={repo.homepage} target="_blank" rel="noopener noreferrer"><i class="ri-link"></i> View</a>
      {/* <a href={repo.html_url} target="_blank" rel="noopener noreferrer"> Code</a> */}
    </div>
))}

      </div>
    </section>
    </>
  );
};

export default Projects;

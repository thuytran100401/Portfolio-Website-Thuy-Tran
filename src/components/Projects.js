import React, { useState } from 'react';
import './Projects.css';
import olympiaImg from '../assets/olympia.avif';
import memoryGame from '../assets/memoryGame.png';
import taskTracker from '../assets/taskTracker.png'

function Projects() {
  const [flippedSection, setFlippedSection] = useState(null);

  const handleFlip = (section) => {
    setFlippedSection(flippedSection === section ? null : section);
  };

  const projects = [
    {
      id: 'olympia',
      title: 'Olympia',
      imgSrc: olympiaImg, // Replace with the actual path to the image
      introduction: 'An Online Hotel Booking Webpage',
      appLink: 'https://github.com/CatHer431/Olympias',
      sourceLink: 'https://github.com/CatHer431/Olympia',
      timeLine: 'Febuary 2023 - May 2023',
      techUsed: 'JavaScript · Testing · Debugging · Bootstrap (Framework) · Web Applications · SQL Database Administration · Sockets · HTML · Teamwork · Software Testing · Shell Scripting · Databases · JSON · Cascading Style Sheets (CSS)',
      description: 'Developed a comprehensive web application for hotel bookings using JavaScript, HTML, CSS, Node.js, Express, and MySQL, featuring user registration, login, reservations, payment, cancellation, and refund functionalities. Implemented search and filter options for hotel discovery, and integrated a reward points system, increasing user engagement by 30%. Conducted usability testing with 50+ users, refining the application to enhance user satisfaction by 25% and improve booking efficiency by 20%.',
    },
    {
      id: 'memoryGame',
      title: 'Light & Sound Memory Game',
      imgSrc: memoryGame,
      introduction: 'Light and sound memory game webpage',
      appLink: 'https://light-and-sound-memory-game-thuy-tran.glitch.me/',
      sourceLink: 'https://github.com/thuytran100401/Light-Sound-Memory-Game?tab=readme-ov-file',
      timeLine: 'April 2022 - May 2022',
      techUsed: 'JavaScript · glitch · Web Applications · Sockets · HTML · JSON · Cascading Style Sheets (CSS)Skills: JavaScript · glitch · Web Applications · Sockets · HTML · JSON · Cascading Style Sheets (CSS)',
      description: 'eveloped a user-friendly interface using HTML, CSS, and JavaScript, achieving 100% functionality with interactive game buttons and a Start/Stop button. Implemented advanced features using JavaScript, including 50% faster playback speed per turn, 100% increase in functional game buttons, and dynamically generated unique patterns for each game. Customized styling with CSS, incorporating 100% more vibrant colors and a forgiving loss condition that allows up to three mistakes, significantly improving the overall user experience.',
    },
    {
      id: 'taskTracker',
      title: 'Task Tracker',
      imgSrc: taskTracker,
      introduction: 'Task management website',
      appLink: 'https://github.com/thuytran100401/sjsu_cmpe_131',
      sourceLink: 'https://github.com/thuytran100401/sjsu_cmpe_131',
      timeLine: 'January 2022 - May 2022',
      techUsed: "Google Cloud Platform (GCP) · Web Applications · Sockets · Selenium · Python (Programming Language) · SQL · Databases · JSON · Flask",
      description: 'Developed a task management app using Python, Flask, and SQL, adopted by 75 students. Conducted user research with 20+ participants to refine the app functionality, leading to a 25% increase in user satisfaction. Launched the application on Google Cloud Platform using App Engine for scalable hosting, managing 200+ tasks daily. Directed the release cycle, including testing and deployment, reducing bugs by 30% post-deployment.',
    },
  ];

  return (
    <div className="project">
      <h1><strong>Projects</strong></h1>
      {projects.map((project) => (
        <div
          key={project.id}
          className={`project-section ${flippedSection === project.id ? 'flipped' : ''}`}
          onClick={() => handleFlip(project.id)}
        >
          <div className="front">
            <h2>{project.title}</h2>
            <img src={project.imgSrc} alt={`${project.title} screenshot`} />
            <p>{project.introduction}</p>
            <div class="link-container">
              <a href={project.appLink} class="box-link" target="_blank" rel="noopener noreferrer">App</a>
              <a href={project.sourceLink} class="box-link" target="_blank" rel="noopener noreferrer">Source</a>
            </div>
          </div>
          <div className="back">
            <h2>{project.title}</h2>
            <p><strong>Time Line: </strong>{project.timeLine}</p>
            <p><strong>Tech Used: </strong>{project.techUsed}</p>
            <p><strong>Description: </strong></p>
            <p>{project.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Projects;

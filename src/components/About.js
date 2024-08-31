import React, { useState } from 'react';
import './About.css';

function About() {
  const [flippedSection, setFlippedSection] = useState(null);

  const handleFlip = (section) => {
    setFlippedSection(flippedSection === section ? null : section);
  };

  return (
    <div className="about">
      <h1>About Me</h1>

      <div
        className={`about-section ${flippedSection === 'introduction' ? 'flipped' : ''}`}
        onClick={() => handleFlip('introduction')}
      >
        <div className="front">
          <h2>Introduction</h2>
          <p>Tell you about myself ...</p>
        </div>
        <div className="back">
          <p>
            As a recent Software Engineering graduate from San Jose State University with a GPA of 3.7, I have developed a strong interest in both frontend and backend development.
            My academic projects, such as an Encryption Suite and a Task Tracker application, have given me hands-on experience with Java, Python (Flask), JavaScript (React), HTML, CSS, and PHP.
            My role as a Threat Data Analyst at Ambient AI further refined my skills in research and collaboration.
          </p>
        </div>
      </div>

      <div
        className={`about-section ${flippedSection === 'education' ? 'flipped' : ''}`}
        onClick={() => handleFlip('education')}
      >
        <div className="front">
          <h2>Education</h2>
        </div>
        <div className="back">
          <h3>B.S., Software Engineering </h3>
          <p> San Jose State University - San Jose, CA </p>
          <p>September 2021 - May 2024</p>
          <p>GPA: 3.7</p>
        </div>
      </div>

      <div
        className={`about-section ${flippedSection === 'certification' ? 'flipped' : ''}`}
        onClick={() => handleFlip('certification')}
      >
        <div className="front">
          <h2>Certifications</h2>
        </div>
        <div className="back">
          <h3>SVCSI 2021 Summer Camp Cybersecurity Research</h3>
          <p>Silicon Valley Cybersecurity Institute - SJSU, San Jose, CA</p>
          <p>June 2021 - August 2021</p>
        </div>
      </div>

      <div
        className={`about-section ${flippedSection === 'technical-skills' ? 'flipped' : ''}`}
        onClick={() => handleFlip('technical-skills')}
      >
        <div className="front">
          <h2>Technical Skills</h2>
          <p>Programming Languages, Web Frameworks</p>
        </div>
        <div className="back">
          <p><strong>Programming Languages:</strong> Java, Python (Flask), JavaScript (React), HTML, CSS, PHP</p>
          <p><strong>Web Frameworks:</strong> Node.js (Express), Bootstrap, Flask, React</p>
          <p><strong>Databases:</strong> MySQL, XAMPP, MongoDB</p>
          <p><strong>Cloud Platforms:</strong> AWS (EC2), Google Cloud (App Engine), Heroku</p>
          <p><strong>DevOps/Networking Tools:</strong> Docker, Wireshark</p>
          <p><strong>Other:</strong> Jira, Git, Cisco Packet Tracer, MATLAB</p>
        </div>
      </div>
    </div>
  );
}

export default About;

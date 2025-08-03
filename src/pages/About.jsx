import Spline from '@splinetool/react-spline';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import './About.css';

export default function About() {
  const navigate = useNavigate();
  const [showFullContent, setShowFullContent] = useState(false);

  const aboutContent = {
    excerpt: [
      "Hi, I'm Owaif Aamir, a passionate Front-end Engineer based in Pakistan. I specialize in creating beautiful, interactive, and user-friendly web experiences using modern technologies and best practices.",
      "With a strong foundation in React, JavaScript, and modern web development tools, I love crafting digital experiences that not only look great but also provide seamless user interactions. My approach combines technical expertise with creative problem-solving to deliver exceptional results."
    ],
    fullContent: [
      "Hi, I'm Owaif Aamir, a passionate Front-end Engineer based in Pakistan. I specialize in creating beautiful, interactive, and user-friendly web experiences using modern technologies and best practices.",
      "With a strong foundation in React, JavaScript, and modern web development tools, I love crafting digital experiences that not only look great but also provide seamless user interactions. My approach combines technical expertise with creative problem-solving to deliver exceptional results.",
      "When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or sharing knowledge with the developer community. I believe in continuous learning and staying up-to-date with the latest trends in web development.",
      "I'm always excited to take on new challenges and collaborate on interesting projects. If you'd like to work together or just want to say hello, feel free to reach out!"
    ]
  };

  return (
    <div className="about-page">
      {/* Spline Animation Background */}
      <div className="spline-container">
        <Spline
          scene="https://prod.spline.design/qK5Aba3x2UOqeksF/scene.splinecode" 
        />
      </div>
      
      {/* Back Arrow */}
      <button className="back-arrow" onClick={() => navigate('/')}>
        <span className="arrow-icon">←</span>
        <span className="back-text">Back to Home</span>
      </button>

      {/* About Content */}
      <div className="about-content">
        <h1 className="about-title">About Me</h1>
        
        <div className="about-description">
          {aboutContent.excerpt.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
          <button 
            className="read-more-btn" 
            onClick={() => setShowFullContent(true)}
          >
            Read More
          </button>
        </div>
      </div>

      {/* Top Center - owaif-portfolio.com */}
      <div className="top-center">
        <p>owaif-portfolio.com</p>
      </div>

      {/* Right Menu - About, Blog, LinkedIn */}
      <div className="right-menu">
        <ul>
          <li
            className="clickable"
            onClick={() => navigate('/about')}
            style={{ pointerEvents: 'auto', cursor: 'pointer' }}
          >
            About
          </li>
          <li
            className="clickable"
            onClick={() => navigate('/blog')}
            style={{ pointerEvents: 'auto', cursor: 'pointer' }}
          >
            Blog
          </li>
          <li
            className="clickable"
            onClick={() => window.open('https://www.linkedin.com/in/YOUR_LINKEDIN_USERNAME', '_blank', 'noopener,noreferrer')}
            style={{ pointerEvents: 'auto', cursor: 'pointer' }}
          >
            LinkedIn
          </li>
        </ul>
      </div>

      {/* Popup for full about content */}
      {showFullContent && (
        <div className="popup-overlay" onClick={() => setShowFullContent(false)}>
          <div className="popup-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={() => setShowFullContent(false)}>
              ×
            </button>
            <h2 className="popup-title">About Me</h2>
            <div className="popup-body">
              {aboutContent.fullContent.map((paragraph, index) => (
                <p key={index} className="popup-paragraph">{paragraph}</p>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

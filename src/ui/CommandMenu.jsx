// src/ui/CommandMenu.jsx
import './CommandMenu.css';
import React, { useState } from 'react';
import { FiCopy, FiDownload, FiUser, FiMail, FiInstagram, FiLinkedin } from 'react-icons/fi'; // Feather icons

const menuItems = [
  { label: 'Copy link', icon: <FiCopy />, action: () => navigator.clipboard.writeText(window.location.href) },
  { label: 'Download CV', icon: <FiDownload />, action: () => window.open('/assets/your-cv.pdf', '_blank') },
  { label: 'Know my career', icon: <FiLinkedin />, action: () => window.open('https://www.linkedin.com/in/owaif-aamir-124147372/', '_blank') },
  { label: 'Send an email', icon: <FiMail />, action: () => window.open('mailto:owaifir005@gmail.com') },
  { label: 'Follow me on Instagram', icon: <FiInstagram />, action: () => window.open('https://www.instagram.com/owaif__rajpoot__/', '_blank') }
];

export default function CommandMenu({ isOpen, onClose }) {
  const [search, setSearch] = useState('');

  if (!isOpen) return null;

  const filteredItems = menuItems.filter(item =>
    item.label.toLowerCase().includes(search.toLowerCase())
  );

  const handleSelect = (action) => {
    action();
    onClose();
  };

  return (
    <div className="command-overlay" onClick={onClose}>
      <div className="command-menu" onClick={(e) => e.stopPropagation()}>
        <input
          className="command-input"
          type="text"
          placeholder="type what you would like to do..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <ul className="command-list">
          {filteredItems.map((item, index) => (
            <li key={index} className="command-item" onClick={() => handleSelect(item.action)}>
              <span className="icon">{item.icon}</span>
              {item.label}
            </li>
          ))}
          {filteredItems.length === 0 && <li className="no-result">No matching option...</li>}
        </ul>
      </div>
    </div>
  );
}

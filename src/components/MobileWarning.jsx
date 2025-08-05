import React, { useState } from 'react';
import './MobileWarning.css';

const MobileWarning = () => {
  const [copied, setCopied] = useState(false);
  
  const isMobile = () => {
    return window.innerWidth <= 768 || /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  };

  if (!isMobile()) {
    return null;
  }

  const handleCopyUrl = async () => {
    try {
      await navigator.clipboard.writeText('https://portfolio-website-rho-nine-26.vercel.app/');
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      // Fallback for older browsers
      const textArea = document.createElement('textarea');
      textArea.value = 'https://portfolio-website-rho-nine-26.vercel.app/';
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="mobile-warning">
      <div className="mobile-warning-content">
        <div className="mobile-warning-icon">💻</div>
        <h2>Desktop Experience Recommended</h2>
        <p>This website is built for desktop devices to provide the best experience.</p>
        <p>Please open this website on your desktop or laptop for optimal viewing.</p>
        <div className="mobile-warning-actions">
          <button 
            className={`mobile-warning-button ${copied ? 'copied' : ''}`}
            onClick={handleCopyUrl}
          >
            {copied ? 'URL Copied!' : 'Copy URL for Desktop'}
          </button>
          <button 
            className="mobile-warning-button secondary"
            onClick={() => {
              if (window.opener) {
                window.close();
              } else {
                window.history.back();
              }
            }}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default MobileWarning; 
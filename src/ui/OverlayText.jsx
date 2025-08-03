  // src/ui/OverlayText.jsx
  import './OverlayText.css';
  import { useEffect, useRef } from 'react';
  import gsap from 'gsap';
  import { TextPlugin } from 'gsap/TextPlugin';
  import { useNavigate } from 'react-router-dom';

  gsap.registerPlugin(TextPlugin);

  export default function OverlayText() {
    const refs = useRef([]);
    const navigate = useNavigate();

    const lines = [
      'Based in',
      'Pakistan',
      'owaif-portfolio.com',
      'Owaif',
      'Aamir',
      'A Front-end Engineer',
      'having fun crafting',
      'digital experiences',
      'About',
      'Blog',
      'LinkedIn',
      'Want to hire me?',
      'owaifir005@gmail.com',
    ];

    useEffect(() => {
      refs.current.forEach((el, i) => {
        if (!el) return;
        const text = el.dataset.text;
        el.innerHTML = '.'.repeat(text.length);
        gsap.to(el, {
          duration: 1,
          text: { value: text },
          ease: 'none',
          delay: i * 0.1,
        });
      });
    }, []);

    return (
      <div className="overlay">
        <div className="top-left">
          <p ref={(el) => (refs.current[0] = el)} data-text="Based in" className="no-underline" />
          <p><span className="underlined" ref={(el) => (refs.current[1] = el)} data-text="Pakistan" /></p>
        </div>

        <div className="top-center">
          <p ref={(el) => (refs.current[2] = el)} data-text="owaif-portfolio.com" />
        </div>

        <div className="middle-left">
          <h1>
            <span ref={(el) => (refs.current[3] = el)} data-text="Owaif" /><br />
            <span ref={(el) => (refs.current[4] = el)} data-text="Aamir" />
          </h1>
        </div>

        <div className="middle-right">
          <p>
            <span ref={(el) => (refs.current[5] = el)} data-text="A Front-end Engineer" className="bold-text" /><br />
            <span ref={(el) => (refs.current[6] = el)} data-text="having fun crafting" /><br />
            <span ref={(el) => (refs.current[7] = el)} data-text="digital experiences" />
          </p>
          <div className="start-hint blink">
            <span className="key-btn">ctrl</span> + <span className="key-btn">enter</span> to start
          </div>
        </div>

        <div className="right-menu">
          <ul>
            <li
              ref={(el) => (refs.current[8] = el)}
              data-text="About"
              className="clickable"
              onClick={() => navigate('/about')}
              style={{ pointerEvents: 'auto', cursor: 'pointer' }}
            />
            <li
              ref={(el) => (refs.current[9] = el)}
              data-text="Blog"
              className="clickable"
              onClick={() => navigate('/blog')}
              style={{ pointerEvents: 'auto', cursor: 'pointer' }}
            />
            <li
              ref={(el) => (refs.current[10] = el)}
              data-text="LinkedIn"
              className="clickable"
              onClick={() => window.open('https://www.linkedin.com/in/owaif-aamir-124147372/', '_blank', 'noopener,noreferrer')}
              style={{ pointerEvents: 'auto', cursor: 'pointer' }}
            />
          </ul>
        </div>

        <div className="bottom-right">
          <p>
            <span ref={(el) => (refs.current[11] = el)} data-text="Want to hire me?" /><br />
            <u ref={(el) => (refs.current[12] = el)} data-text="owaifir005@gmail.com" />
          </p>
        </div>
      </div>
    );
  }

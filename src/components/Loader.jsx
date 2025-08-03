import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import DrawSVGPlugin from 'gsap/DrawSVGPlugin';
import './Loader.css';

gsap.registerPlugin(DrawSVGPlugin);

const Loader = ({ onFinish }) => {
  const containerRef = useRef();
  const timelineRef = useRef();

  useEffect(() => {
    const paths = gsap.utils.toArray(".loader path");
    const refl = document.querySelector(".loader-refl");
    const ripple1 = ".ripple1 ellipse";
    const ripple2 = ".ripple2 ellipse";

    // Set everything to initial hidden state
    gsap.set(paths, { autoAlpha: 1, drawSVG: "0% 0%" });
    gsap.set(refl, { autoAlpha: 0.06, drawSVG: "0% 0%" }); // subtle reflection
    gsap.set([ripple1, ripple2], { autoAlpha: 0, rx: 0, ry: 0 });

    const resetAnimationState = () => {
      gsap.set(paths, { autoAlpha: 1, drawSVG: "0% 0%" });
      gsap.set(refl, { autoAlpha: 0.06, drawSVG: "0% 0%" }); // ensure reflection stays subtle
      gsap.set([ripple1, ripple2], { autoAlpha: 0, rx: 0, ry: 0 });
    };

    const tl = gsap.timeline({
      repeat: 2,
      onRepeat: resetAnimationState,
      onComplete: () => {
        gsap.to(containerRef.current, {
          autoAlpha: 0,
          duration: 0.7,
          onStart: () => {
            if (timelineRef.current) timelineRef.current.kill();
          },
          onComplete: onFinish,
        });
      }
    });

    timelineRef.current = tl;

    tl.add("start")
      .fromTo(
        paths,
        { autoAlpha: 1, drawSVG: "0% 0%" },
        { drawSVG: "0% 100%", duration: 0.5, stagger: 0.15 },
        "start"
      )
      .fromTo(
        refl,
        { autoAlpha: 0.06, drawSVG: "0% 0%" },
        { drawSVG: "0% 100%", duration: 0.5 },
        "start"
      )
      .fromTo(
        ripple1,
        { autoAlpha: 0.3, rx: 0, ry: 0 },
        { autoAlpha: 0, rx: 19.8, ry: 3.2, duration: 1, stagger: 0.2 },
        "start"
      )
      .to(paths, { drawSVG: "100% 100%" }, "start+=0.5")
      .to(refl, { drawSVG: "100% 100%" }, "start+=0.5")
      .fromTo(
        ripple2,
        { autoAlpha: 0.1, rx: 0, ry: 0 },
        { autoAlpha: 0, rx: 19.8, ry: 3.2, duration: 1, stagger: 0.3 },
        "start+=0.5"
      );

    return () => {
      if (timelineRef.current) timelineRef.current.kill();
    };
  }, [onFinish]);

  return (
    <div ref={containerRef} className="loader-container">
      <div className="container">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
          <defs>
            <filter id="glow">
              <feGaussianBlur stdDeviation="0.8" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>
          <g fill="none" strokeLinecap="round" strokeLinejoin="round" paintOrder="stroke fill markers">
            <g className="loader" filter="url(#glow)">
              <path strokeWidth="5.9" d="M20.7 50a29.4 29.4 0 1 1 58.8 0" style={{ stroke: '#444' }} />
              <path strokeWidth="5.9" d="M20.7 50a29.4 29.4 0 1 1 58.8 0" style={{ stroke: '#888' }} />
              <path strokeWidth="5.9" d="M20.7 50a29.4 29.4 0 1 1 58.8 0" style={{ stroke: '#fff' }} />
            </g>

            <path
              className="loader-refl"
              strokeWidth="5.9"
              d="M20.7 50a29.4 29.4 0 1 0 58.8 0"
              style={{ stroke: '#ccc', opacity: 0.06, filter: 'blur(1.2px)' }}
            />

            <g className="ripple1">
              <ellipse cx="20.6" cy="52.3" strokeWidth="1.7" rx="19.8" ry="3.2" style={{ stroke: '#fff' }} />
            </g>
            <g className="ripple2">
              <ellipse cx="79.4" cy="52.3" strokeWidth="1.7" rx="19.8" ry="3.2" style={{ stroke: '#fff' }} />
              <ellipse cx="79.4" cy="52.3" strokeWidth="1.7" rx="19.8" ry="3.2" style={{ stroke: '#fff' }} />
            </g>
          </g>
        </svg>
      </div>
    </div>
  );
};

export default Loader;

// src/animations/gsapTextReveal.js
import gsap from 'gsap';

export const animateText = (selector) => {
  const elements = document.querySelectorAll(selector);

  elements.forEach((el) => {
    const originalText = el.dataset.text || el.innerText;
    if (!originalText) return;

    el.innerHTML = ''; // Clear it

    const chars = originalText.split('');
    chars.forEach((char) => {
      const span = document.createElement('span');
      span.innerText = '.';
      span.setAttribute('data-char', char);
      el.appendChild(span);
    });

    gsap.to(el.querySelectorAll('span'), {
      duration: 0.05,
      delay: 0.3,
      stagger: 0.02,
      onUpdate: function () {
        const char = this.targets()[0].getAttribute('data-char');
        this.targets()[0].innerText = char;
      },
      ease: 'power1.inOut',
    });
  });
};

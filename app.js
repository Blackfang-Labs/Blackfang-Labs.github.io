/* Blackfang Labs — App JS
   Terminal animations and interaction layer */

(function () {
  'use strict';

  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  // Navbar active state on scroll
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-links a');

  function updateNav() {
    const scrollY = window.scrollY;
    sections.forEach(section => {
      const top = section.offsetTop - 80;
      const bottom = top + section.offsetHeight;
      if (scrollY >= top && scrollY < bottom) {
        navLinks.forEach(link => {
          link.style.color = '';
          if (link.getAttribute('href') === '#' + section.id) {
            link.style.color = 'var(--cyan)';
          }
        });
      }
    });
  }

  window.addEventListener('scroll', updateNav, { passive: true });

  // Typing animation for hero terminal
  function typewriter(el, text, delay = 40, callback) {
    if (!el) return;
    el.textContent = '';
    let i = 0;
    const interval = setInterval(() => {
      el.textContent += text[i];
      i++;
      if (i >= text.length) {
        clearInterval(interval);
        if (callback) callback();
      }
    }, delay);
  }

  // Run on load
  window.addEventListener('DOMContentLoaded', () => {
    updateNav();

    // Animate stat numbers counting up
    const statNums = document.querySelectorAll('.stat-num');
    statNums.forEach(el => {
      const target = el.textContent.replace('%', '');
      const isPercent = el.textContent.includes('%');
      const num = parseInt(target, 10);
      if (isNaN(num) || num === 0) return;
      let current = 0;
      const step = Math.ceil(num / 20);
      const timer = setInterval(() => {
        current = Math.min(current + step, num);
        el.textContent = current + (isPercent ? '%' : '');
        if (current >= num) clearInterval(timer);
      }, 40);
    });
  });
})();

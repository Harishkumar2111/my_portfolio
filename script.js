/* ============================================================
   HARISH K. M — PORTFOLIO JAVASCRIPT
   Pure Vanilla JS | No frameworks
   ============================================================ */

'use strict';

/* ─────────────────────────────────────────────────────────────
   1. DOM READY
   ───────────────────────────────────────────────────────────── */
document.addEventListener('DOMContentLoaded', () => {
  initNavbar();
  initHamburger();
  initTypedText();
  initScrollReveal();
  initActiveNav();
  initScrollTop();
  initContactForm();
  initFooterYear();
  initSmoothScroll();
});


/* ─────────────────────────────────────────────────────────────
   2. NAVBAR — shadow on scroll
   ───────────────────────────────────────────────────────────── */
function initNavbar() {
  const navbar = document.getElementById('navbar');
  if (!navbar) return;

  const onScroll = () => {
    navbar.classList.toggle('scrolled', window.scrollY > 20);
  };

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll(); // run once on load
}


/* ─────────────────────────────────────────────────────────────
   3. HAMBURGER MENU
   ───────────────────────────────────────────────────────────── */
function initHamburger() {
  const hamburger = document.getElementById('hamburger');
  const navMenu   = document.getElementById('nav-menu');
  if (!hamburger || !navMenu) return;

  const openMenu = () => {
    navMenu.classList.add('open');
    hamburger.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden'; // prevent bg scroll on mobile
  };

  const closeMenu = () => {
    navMenu.classList.remove('open');
    hamburger.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  };

  const toggleMenu = () => {
    navMenu.classList.contains('open') ? closeMenu() : openMenu();
  };

  hamburger.addEventListener('click', toggleMenu);

  // Close when a nav link is clicked
  navMenu.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', closeMenu);
  });

  // Close when clicking outside the menu
  document.addEventListener('click', (e) => {
    if (navMenu.classList.contains('open') &&
        !navMenu.contains(e.target) &&
        !hamburger.contains(e.target)) {
      closeMenu();
    }
  });

  // Close on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && navMenu.classList.contains('open')) {
      closeMenu();
      hamburger.focus();
    }
  });
}


/* ─────────────────────────────────────────────────────────────
   4. TYPED TEXT ANIMATION
   ───────────────────────────────────────────────────────────── */
function initTypedText() {
  const el = document.getElementById('typed-text');
  if (!el) return;

  // Respect prefers-reduced-motion
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReduced) {
    el.textContent = 'AI & Machine Learning Student';
    return;
  }

  const phrases = [
    'AI & Machine Learning Student',
    'Python Programming Enthusiast',
    'Deep Learning Explorer',
    'Data Analysis Learner',
    'Problem-Solving Developer',
  ];

  let phraseIndex = 0;
  let charIndex   = 0;
  let isDeleting  = false;
  let isPaused    = false;

  const typeSpeed   = 65;
  const deleteSpeed = 35;
  const pauseAfter  = 1800;
  const pauseBefore = 400;

  function type() {
    const currentPhrase = phrases[phraseIndex];

    if (isDeleting) {
      charIndex--;
      el.textContent = currentPhrase.slice(0, charIndex);
    } else {
      charIndex++;
      el.textContent = currentPhrase.slice(0, charIndex);
    }

    let delay = isDeleting ? deleteSpeed : typeSpeed;

    if (!isDeleting && charIndex === currentPhrase.length) {
      // Finished typing — pause, then delete
      if (isPaused) return;
      isPaused = true;
      setTimeout(() => {
        isDeleting = true;
        isPaused   = false;
        type();
      }, pauseAfter);
      return;
    }

    if (isDeleting && charIndex === 0) {
      // Finished deleting — move to next phrase
      isDeleting   = false;
      phraseIndex  = (phraseIndex + 1) % phrases.length;
      delay        = pauseBefore;
    }

    setTimeout(type, delay);
  }

  type();
}


/* ─────────────────────────────────────────────────────────────
   5. SCROLL REVEAL (IntersectionObserver)
   ───────────────────────────────────────────────────────────── */
function initScrollReveal() {
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReduced) {
    // Make all elements visible immediately
    document.querySelectorAll('.reveal-up, .reveal-left, .reveal-right')
      .forEach(el => el.classList.add('visible'));
    return;
  }

  const options = {
    threshold: 0.12,
    rootMargin: '0px 0px -40px 0px',
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target); // animate once
      }
    });
  }, options);

  document.querySelectorAll('.reveal-up, .reveal-left, .reveal-right')
    .forEach(el => observer.observe(el));
}


/* ─────────────────────────────────────────────────────────────
   6. ACTIVE NAV LINK ON SCROLL
   ───────────────────────────────────────────────────────────── */
function initActiveNav() {
  const navLinks = document.querySelectorAll('.nav-link[data-section]');
  if (!navLinks.length) return;

  const sections = Array.from(navLinks).map(link => {
    const id = link.dataset.section;
    return { link, section: document.getElementById(id) };
  }).filter(item => item.section);

  const navHeight = parseInt(getComputedStyle(document.documentElement)
    .getPropertyValue('--nav-h')) || 70;

  const setActive = () => {
    const scrollY = window.scrollY + navHeight + 20;

    let currentSection = sections[0];
    for (const item of sections) {
      if (item.section.offsetTop <= scrollY) {
        currentSection = item;
      }
    }

    navLinks.forEach(link => link.classList.remove('active'));
    if (currentSection) currentSection.link.classList.add('active');
  };

  window.addEventListener('scroll', setActive, { passive: true });
  setActive();
}


/* ─────────────────────────────────────────────────────────────
   7. SCROLL-TO-TOP BUTTON
   ───────────────────────────────────────────────────────────── */
function initScrollTop() {
  const btn = document.getElementById('scroll-top-btn');
  if (!btn) return;

  const toggleVisibility = () => {
    btn.classList.toggle('visible', window.scrollY > 400);
  };

  window.addEventListener('scroll', toggleVisibility, { passive: true });

  btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}


/* ─────────────────────────────────────────────────────────────
   8. CONTACT FORM VALIDATION
   ───────────────────────────────────────────────────────────── */
function initContactForm() {
  const form       = document.getElementById('contact-form');
  const successMsg = document.getElementById('form-success');
  const submitBtn  = document.getElementById('submit-btn');
  if (!form) return;

  /* ── Individual field validators ── */
  const validators = {
    'contact-name': {
      errorId: 'name-error',
      validate(val) {
        if (!val.trim()) return 'Please enter your full name.';
        if (val.trim().length < 2) return 'Name must be at least 2 characters.';
        return '';
      },
    },
    'contact-email': {
      errorId: 'email-error',
      validate(val) {
        if (!val.trim()) return 'Please enter your email address.';
        const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRe.test(val.trim())) return 'Please enter a valid email address.';
        return '';
      },
    },
    'contact-phone': {
      errorId: 'phone-error',
      validate(val) {
        if (!val.trim()) return ''; // optional field
        const phoneRe = /^[\d\s\+\-\(\)]{7,15}$/;
        if (!phoneRe.test(val.trim())) return 'Please enter a valid phone number.';
        return '';
      },
    },
    'contact-subject': {
      errorId: 'subject-error',
      validate(val) {
        if (!val.trim()) return 'Please enter a subject.';
        if (val.trim().length < 3) return 'Subject must be at least 3 characters.';
        return '';
      },
    },
    'contact-message': {
      errorId: 'message-error',
      validate(val) {
        if (!val.trim()) return 'Please write a message.';
        if (val.trim().length < 10) return 'Message must be at least 10 characters.';
        return '';
      },
    },
  };

  /* ── Show / clear error ── */
  function showError(fieldId, message) {
    const field = document.getElementById(fieldId);
    const error = document.getElementById(validators[fieldId].errorId);
    if (!field || !error) return;
    error.textContent = message;
    field.classList.toggle('invalid', !!message);
    field.setAttribute('aria-invalid', !!message);
  }

  function clearError(fieldId) {
    showError(fieldId, '');
  }

  /* ── Live validation on blur ── */
  Object.keys(validators).forEach(fieldId => {
    const field = document.getElementById(fieldId);
    if (!field) return;

    field.addEventListener('blur', () => {
      const error = validators[fieldId].validate(field.value);
      showError(fieldId, error);
    });

    field.addEventListener('input', () => {
      if (field.classList.contains('invalid')) {
        const error = validators[fieldId].validate(field.value);
        showError(fieldId, error);
      }
    });
  });

  /* ── Form submit ── */
  form.addEventListener('submit', (e) => {
    e.preventDefault();

    let isValid = true;

    Object.keys(validators).forEach(fieldId => {
      const field = document.getElementById(fieldId);
      if (!field) return;
      const error = validators[fieldId].validate(field.value);
      showError(fieldId, error);
      if (error) isValid = false;
    });

    if (!isValid) return;

    // Show loading state
    const btnLabel = submitBtn.querySelector('.btn-label');
    const btnIcon  = submitBtn.querySelector('i');
    submitBtn.disabled = true;
    if (btnIcon)  btnIcon.className  = 'fas fa-spinner fa-spin';
    if (btnLabel) btnLabel.textContent = 'Sending…';

    // Simulate async processing (frontend-only demo)
    setTimeout(() => {
      // Reset button
      submitBtn.disabled = false;
      if (btnIcon)  btnIcon.className  = 'fas fa-paper-plane';
      if (btnLabel) btnLabel.textContent = 'Send Message';

      // Show success message
      successMsg.removeAttribute('hidden');
      successMsg.scrollIntoView({ behavior: 'smooth', block: 'nearest' });

      // Reset form
      form.reset();
      Object.keys(validators).forEach(id => clearError(id));

      // Hide success after 8s
      setTimeout(() => { successMsg.setAttribute('hidden', ''); }, 8000);
    }, 1200);
  });
}


/* ─────────────────────────────────────────────────────────────
   9. DYNAMIC FOOTER YEAR
   ───────────────────────────────────────────────────────────── */
function initFooterYear() {
  const el = document.getElementById('footer-year');
  if (el) el.textContent = new Date().getFullYear();
}


/* ─────────────────────────────────────────────────────────────
   10. SMOOTH SCROLL — override anchor clicks for browsers that
       don't support CSS scroll-behavior
   ───────────────────────────────────────────────────────────── */
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      const href    = anchor.getAttribute('href');
      if (href === '#') {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
        return;
      }
      const target = document.querySelector(href);
      if (!target) return;
      e.preventDefault();

      const navHeight = parseInt(
        getComputedStyle(document.documentElement).getPropertyValue('--nav-h')
      ) || 70;

      const targetTop = target.getBoundingClientRect().top + window.scrollY - navHeight;
      window.scrollTo({ top: targetTop, behavior: 'smooth' });
    });
  });
}

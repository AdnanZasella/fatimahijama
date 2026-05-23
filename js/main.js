'use strict';

const navbar = document.getElementById('navbar');
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');
const bokningForm = document.getElementById('bokningForm');
const formSuccess = document.getElementById('formSuccess');

// --- Navbar: add .scrolled class on scroll ---
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 60);
}, { passive: true });

// --- Mobile nav: toggle open/closed ---
navToggle.addEventListener('click', () => {
  const isOpen = navLinks.classList.toggle('open');
  navToggle.setAttribute('aria-expanded', String(isOpen));

  const [top, mid, bot] = navToggle.querySelectorAll('span');
  if (isOpen) {
    top.style.transform = 'rotate(45deg) translate(5px, 5px)';
    mid.style.opacity = '0';
    bot.style.transform = 'rotate(-45deg) translate(5px, -5px)';
  } else {
    top.style.transform = '';
    mid.style.opacity = '';
    bot.style.transform = '';
  }
});

// Close mobile nav when any link is clicked
navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', closeNav);
});

function closeNav() {
  navLinks.classList.remove('open');
  navToggle.setAttribute('aria-expanded', 'false');
  const [top, mid, bot] = navToggle.querySelectorAll('span');
  top.style.transform = '';
  mid.style.opacity = '';
  bot.style.transform = '';
}

// --- Active nav link highlighting via IntersectionObserver ---
const sections = document.querySelectorAll('main section[id]');
const navAnchors = navLinks.querySelectorAll('a[href^="#"]');

const sectionObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      navAnchors.forEach(a => {
        a.classList.toggle('active', a.getAttribute('href') === '#' + entry.target.id);
      });
    }
  });
}, { rootMargin: '-50% 0px -50% 0px', threshold: 0 });

sections.forEach(s => sectionObserver.observe(s));

// --- Booking form: AJAX submit to Netlify ---
if (bokningForm && formSuccess) {
  bokningForm.addEventListener('submit', e => {
    e.preventDefault();

    // Client-side validation
    const requiredFields = bokningForm.querySelectorAll('[required]');
    let isValid = true;

    requiredFields.forEach(field => {
      field.classList.remove('is-error');
      if (!field.value.trim()) {
        field.classList.add('is-error');
        isValid = false;
      }
    });

    if (!isValid) return;

    const submitBtn = bokningForm.querySelector('.booking-form__submit');
    submitBtn.disabled = true;
    submitBtn.textContent = 'Skickar…';

    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams(new FormData(bokningForm)).toString()
    })
      .then(() => {
        bokningForm.style.display = 'none';
        formSuccess.hidden = false;
        formSuccess.scrollIntoView({ behavior: 'smooth', block: 'center' });
      })
      .catch(() => {
        // Network error fallback: submit normally (Netlify handles it)
        bokningForm.submit();
      });
  });

  // Clear error state on input
  bokningForm.querySelectorAll('input, select, textarea').forEach(field => {
    field.addEventListener('input', () => field.classList.remove('is-error'));
  });
}

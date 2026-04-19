/* WorldEvolvo — main.js */
document.addEventListener('DOMContentLoaded', () => {

  /* Navbar scroll */
  const navbar = document.querySelector('.navbar');
  if (navbar) {
    window.addEventListener('scroll', () => navbar.classList.toggle('scrolled', window.scrollY > 20), { passive: true });
    navbar.classList.toggle('scrolled', window.scrollY > 20);
  }

  /* Hamburger / Mobile menu */
  const burger = document.querySelector('.hamburger');
  const mMenu  = document.querySelector('.mobile-menu');
  if (burger && mMenu) {
    burger.addEventListener('click', () => {
      const open = burger.classList.toggle('open');
      mMenu.classList.toggle('open', open);
      document.body.style.overflow = open ? 'hidden' : '';
      burger.setAttribute('aria-expanded', open);
    });
    mMenu.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
      burger.classList.remove('open');
      mMenu.classList.remove('open');
      document.body.style.overflow = '';
    }));
  }

  /* Active nav link */
  const page = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a, .mobile-menu a').forEach(a => {
    if (a.getAttribute('href') === page) a.classList.add('active');
  });

  /* Scroll reveal */
  const obs = new IntersectionObserver(entries => {
    entries.forEach((e, i) => {
      if (e.isIntersecting) {
        setTimeout(() => e.target.classList.add('visible'), Number(e.target.dataset.delay) || 0);
        obs.unobserve(e.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

  document.querySelectorAll('.reveal').forEach((el, i) => {
    if (!el.dataset.delay) el.dataset.delay = (i % 4) * 80;
    obs.observe(el);
  });

  /* Contact form */
  const form = document.getElementById('contactForm');
  if (form) {
    form.addEventListener('submit', async e => {
      e.preventDefault();
      const btn = form.querySelector('.btn-submit');
      const suc = document.getElementById('formSuccess');
      btn.textContent = 'Sending…';
      btn.disabled = true;
      await new Promise(r => setTimeout(r, 1200));
      form.style.display = 'none';
      if (suc) suc.classList.add('show');
    });
  }

  /* Smooth scroll anchors */
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const t = document.querySelector(a.getAttribute('href'));
      if (t) {
        e.preventDefault();
        const off = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--nav-h')) || 76;
        window.scrollTo({ top: t.offsetTop - off, behavior: 'smooth' });
      }
    });
  });

});

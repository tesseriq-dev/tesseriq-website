// Mobile menu toggle with smooth animation
const menuBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');
const menuIcon = document.getElementById('menu-icon');

if (menuBtn && mobileMenu) {
  menuBtn.addEventListener('click', () => {
    const isOpen = mobileMenu.style.maxHeight && mobileMenu.style.maxHeight !== '0px';
    if (isOpen) {
      mobileMenu.style.maxHeight = '0px';
      mobileMenu.style.opacity = '0';
      menuIcon.setAttribute('d', 'M4 6h16M4 12h16M4 18h16');
    } else {
      mobileMenu.style.maxHeight = mobileMenu.scrollHeight + 'px';
      mobileMenu.style.opacity = '1';
      menuIcon.setAttribute('d', 'M6 18L18 6M6 6l12 12');
    }
  });
}

// Sticky download bar — show after scrolling past hero
const stickyBar = document.getElementById('sticky-download');
if (stickyBar) {
  let lastScroll = 0;
  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    if (scrollY > 400) {
      stickyBar.style.transform = 'translateY(0)';
    } else {
      stickyBar.style.transform = 'translateY(100%)';
    }
    lastScroll = scrollY;
  }, { passive: true });
}

// Highlight active nav link
const currentPage = window.location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('nav a').forEach(link => {
  const href = link.getAttribute('href');
  if (href === '/' && (currentPage === '' || currentPage === 'index.html')) {
    link.classList.add('text-white');
    link.classList.remove('text-white/60');
  } else if (href === currentPage) {
    link.classList.add('text-white');
    link.classList.remove('text-white/60');
  }
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', (e) => {
    const target = document.querySelector(anchor.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

// FAQ Accordion
document.querySelectorAll('.faq-toggle').forEach(btn => {
  btn.addEventListener('click', () => {
    const item = btn.closest('.faq-item');
    const answer = item.querySelector('.faq-answer');
    const chevron = item.querySelector('.faq-chevron');
    const isOpen = btn.getAttribute('aria-expanded') === 'true';

    // Close all other items
    document.querySelectorAll('.faq-item').forEach(other => {
      if (other !== item) {
        other.querySelector('.faq-answer').style.maxHeight = '0';
        other.querySelector('.faq-toggle').setAttribute('aria-expanded', 'false');
        other.querySelector('.faq-chevron').style.transform = 'rotate(0deg)';
      }
    });

    // Toggle current item
    if (isOpen) {
      answer.style.maxHeight = '0';
      btn.setAttribute('aria-expanded', 'false');
      chevron.style.transform = 'rotate(0deg)';
    } else {
      answer.style.maxHeight = answer.scrollHeight + 'px';
      btn.setAttribute('aria-expanded', 'true');
      chevron.style.transform = 'rotate(180deg)';
    }
  });
});

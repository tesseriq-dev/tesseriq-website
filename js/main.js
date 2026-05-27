// Mobile menu toggle
const menuBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');
const menuIcon = document.getElementById('menu-icon');

if (menuBtn && mobileMenu) {
  menuBtn.addEventListener('click', () => {
    const isOpen = !mobileMenu.classList.contains('hidden');
    mobileMenu.classList.toggle('hidden');
    menuIcon.setAttribute('d', isOpen
      ? 'M4 6h16M4 12h16M4 18h16'
      : 'M6 18L18 6M6 6l12 12'
    );
  });
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

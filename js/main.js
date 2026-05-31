// Value props carousel (mobile only)
const carousel = document.getElementById('value-carousel');
const dots = document.getElementById('carousel-dots');
if (carousel && dots) {
  const items = [
    { icon: '⏱️', bg: 'bg-brand-green/15', title: 'Save 2+ hrs/day', sub: 'No more phone juggling' },
    { icon: '📋', bg: 'bg-brand-orange/15', title: 'Zero paperwork', sub: 'Everything digital' },
    { icon: '💯', bg: 'bg-blue-500/15', title: '100% visibility', sub: 'Track every payment' }
  ];
  let current = 0;
  setInterval(() => {
    current = (current + 1) % items.length;
    const item = items[current];
    carousel.style.opacity = '0';
    carousel.style.transform = 'translateY(8px)';
    setTimeout(() => {
      carousel.innerHTML = `<div class="value-slide flex items-center gap-2">
        <div class="w-8 h-8 ${item.bg} rounded-full flex items-center justify-center text-sm">${item.icon}</div>
        <div class="text-left">
          <div class="text-white text-xs font-bold">${item.title}</div>
          <div class="text-white/40 text-[10px]">${item.sub}</div>
        </div>
      </div>`;
      carousel.style.opacity = '1';
      carousel.style.transform = 'translateY(0)';
    }, 300);
    // Update dots
    dots.querySelectorAll('div').forEach((dot, i) => {
      dot.className = i === current
        ? 'w-2 h-2 rounded-full bg-brand-orange transition-all duration-300'
        : 'w-2 h-2 rounded-full bg-white/20 transition-all duration-300';
    });
  }, 2500);
}

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
      mobileMenu.classList.add('pointer-events-none');
      menuIcon.setAttribute('d', 'M4 6h16M4 12h16M4 18h16');
    } else {
      mobileMenu.style.maxHeight = mobileMenu.scrollHeight + 'px';
      mobileMenu.style.opacity = '1';
      mobileMenu.classList.remove('pointer-events-none');
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

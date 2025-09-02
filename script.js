
//slideshow if the images on the hero section
let currentSlide = 0;
        const slides = document.querySelectorAll('.slide');
        const totalSlides = slides.length;

        function showNextSlide() {
            slides[currentSlide].classList.remove('active');
            currentSlide = (currentSlide + 1) % totalSlides;
            slides[currentSlide].classList.add('active');
        }

        // Change slide every 3 seconds
        setInterval(showNextSlide, 3000);




//for the navigation bar
// Smooth scroll to explore section
function scrollToExplore() {
  document.getElementById('explore').scrollIntoView({
    behavior: 'smooth'
  });
}

// Add fade-in animation on scroll
function addFadeInAnimation() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('fade-in');
      }
    });
  });

  document.querySelectorAll('.age-card, .about-card').forEach(card => {
    observer.observe(card);
  });
}

// Initialize animations when page loads
document.addEventListener('DOMContentLoaded', function() {
  addFadeInAnimation();
});

// Add smooth hover effects for cards
document.querySelectorAll('.age-card, .about-card').forEach(card => {
  card.addEventListener('mouseenter', function() {
    this.style.transform = 'translateY(-5px) scale(1.02)';
  });

  card.addEventListener('mouseleave', function() {
    this.style.transform = 'translateY(0) scale(1)';
  });
});

// Mobile menu toggle
const menuToggle = document.getElementById('menu-toggle');
const navMenu = document.querySelector('.nav-menu');

menuToggle.addEventListener('click', () => {
  navMenu.classList.toggle('show'); // ✅ use 'show' to match your CSS
});

// Navigation links click handler
const navLinks = document.querySelectorAll('.nav-menu a');
navLinks.forEach(link => {
  link.addEventListener('click', function (e) {
    const targetId = this.getAttribute('href');

    // Smooth scroll if it's an internal section
    if (targetId.startsWith('#') && document.querySelector(targetId)) {
      e.preventDefault();
      document.querySelector(targetId).scrollIntoView({
        behavior: 'smooth'
      });
    }

    // Update active class
    navLinks.forEach(l => l.classList.remove('active'));
    this.classList.add('active');

    // Close menu after clicking (mobile only)
    navMenu.classList.remove('show');
  });
});

  
  
// Also update active class while scrolling
const sections = document.querySelectorAll('section[id]');
window.addEventListener('scroll', () => {
  let current = "";
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 80; // adjust for navbar height
    const sectionHeight = section.clientHeight;

    if (pageYOffset >= sectionTop && pageYOffset < sectionTop + sectionHeight) {
      current = section.getAttribute('id');
    }
  });

  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === `#${current}`) {
      link.classList.add('active');
    }
  });
});

        





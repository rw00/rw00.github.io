document.body.onload = bodyLoaded

function bodyLoaded() {
  console.log("Test log");
}

// Parallax effect
document.addEventListener('mousemove', (e) => {
  const circles = document.querySelectorAll('.parallax-circle');
  const x = e.clientX / window.innerWidth;
  const y = e.clientY / window.innerHeight;

  circles.forEach((circle, index) => {
    const speed = (index + 1) * 20;
    const xMove = (x - 0.5) * speed;
    const yMove = (y - 0.5) * speed;
    circle.style.transform = `translate(${xMove}px, ${yMove}px)`;
  });
});

// Scroll parallax for background circles
window.addEventListener('scroll', () => {
  const scrolled = window.pageYOffset;
  const circles = document.querySelectorAll('.parallax-circle');

  circles.forEach((circle, index) => {
    const speed = (index + 1) * 0.3;
    circle.style.transform = `translateY(${scrolled * speed}px)`;
  });
});

// Intersection Observer for fade-in animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry, index) => {
    if (entry.isIntersecting) {
      setTimeout(() => {
        entry.target.classList.add('visible');
      }, index * 100);
    }
  });
}, observerOptions);

// Observe timeline items
document.querySelectorAll('.timeline-item').forEach(item => {
  observer.observe(item);
});

// Observe project cards
document.querySelectorAll('.project-card').forEach(card => {
  observer.observe(card);
});

// Smooth scroll for all internal links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});
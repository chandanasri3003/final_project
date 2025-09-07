// Smooth Scroll for Navigation Links
document.querySelectorAll('.main-nav a').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    if (this.getAttribute('href').startsWith('#')) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    }
  });
});

// Change Navbar Background on Scroll
window.addEventListener('scroll', () => {
  const nav = document.querySelector('.main-nav');
  if (window.scrollY > 50) {
    nav.classList.add('scrolled');
  } else {
    nav.classList.remove('scrolled');
  }
});

// Back to Top Button
const backToTop = document.createElement('button');
backToTop.innerText = "↑";
backToTop.classList.add('back-to-top');
document.body.appendChild(backToTop);

// Show button when scrolled down
window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    backToTop.style.display = 'block';
  } else {
    backToTop.style.display = 'none';
  }
});

// Scroll back to top smoothly
backToTop.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

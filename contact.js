document.addEventListener('DOMContentLoaded', () => {
  const contactSection = document.querySelector('.contact-section');

  const elementInView = (el, dividend = 1) => {
    const elementTop = el.getBoundingClientRect().top;
    return elementTop <= (window.innerHeight || document.documentElement.clientHeight) / dividend;
  };

  const showElement = () => {
    if (elementInView(contactSection, 1.2)) {
      contactSection.classList.add('visible');
    }
  };

  window.addEventListener('scroll', showElement);
  // Trigger on load
  showElement();
});

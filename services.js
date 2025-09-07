document.addEventListener('DOMContentLoaded', () => {
  const cards = document.querySelectorAll('.service-card');

  const revealOnScroll = () => {
    cards.forEach(card => {
      const cardTop = card.getBoundingClientRect().top;
      if(cardTop < window.innerHeight - 100){
        card.classList.add('visible');
      }
    });
  };

  window.addEventListener('scroll', revealOnScroll);
  revealOnScroll();
});

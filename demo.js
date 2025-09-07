// Simple effect: button glow on hover using JS (optional)
const demoBtn = document.getElementById('demoBtn');
demoBtn.addEventListener('mouseenter', () => {
  demoBtn.style.boxShadow = "0 0 20px rgba(255,255,255,0.8)";
});

demoBtn.addEventListener('mouseleave', () => {
  demoBtn.style.boxShadow = "none";
});

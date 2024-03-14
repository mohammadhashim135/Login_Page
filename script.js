// JavaScript effects
const logo = document.getElementById('logo');

// Add mouseover effect to logo
logo.addEventListener('mouseover', () => {
    logo.style.textShadow = '2px 2px 10px rgba(255, 255, 255, 0.8)';
});

// Add mouseout effect to logo
logo.addEventListener('mouseout', () => {
    logo.style.textShadow = '2px 2px 5px rgba(0, 0, 0, 0.5)';
});

const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('.nav');
const icons = document.querySelector('.icons');

hamburger.addEventListener('click', () => {
    nav.classList.toggle('active');  // Alterna a classe 'active' ao clicar no hamburger
    
    // Alterna a visibilidade dos ícones
    if (nav.classList.contains('active')) {
        icons.style.display = 'none';
    } else {
        icons.style.display = 'flex';
    }
});

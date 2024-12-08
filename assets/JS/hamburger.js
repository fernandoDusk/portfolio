const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('.nav');
const menuLinks = document.querySelectorAll('.nav-list a');

hamburger.addEventListener('click', () => {
    nav.classList.toggle('active')
});

menuLinks.forEach(link => {
    link.addEventListener('click', () => {
        nav.classList.remove('active');
    });
});

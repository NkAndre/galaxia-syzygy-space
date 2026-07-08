// Seletores do Slider
let prevButton = document.getElementById('prev');
let nextButton = document.getElementById('next');
let container = document.querySelector('.container');
let items = container.querySelectorAll('.list .item');
let dots = container.querySelectorAll('.indicators ul li');
let listNumber = container.querySelector('.number');

let active = 0;
let lastPosition = items.length - 1;

function updateSlider() {
    items.forEach(item => item.classList.remove('active'));
    dots.forEach(dot => dot.classList.remove('active'));

    items[active].classList.add('active');
    dots[active].classList.add('active');

    let displayActive = active + 1;
    listNumber.innerText = displayActive < 10 ? '0' + displayActive : displayActive;
}

nextButton.onclick = () => {
    active = active + 1 > lastPosition ? 0 : active + 1;
    updateSlider();
}

prevButton.onclick = () => {
    active = active - 1 < 0 ? lastPosition : active - 1;
    updateSlider();
}

// Swipe Mobile
let startX = 0;
container.addEventListener('touchstart', (e) => {
    startX = e.touches[0].clientX;
}, { passive: true });

container.addEventListener('touchend', (e) => {
    let endX = e.changedTouches[0].clientX;
    let distance = endX - startX;
    if (distance > 50) { // Direita
        active = active - 1 < 0 ? lastPosition : active - 1;
        updateSlider();
    } else if (distance < -50) { // Esquerda
        active = active + 1 > lastPosition ? 0 : active + 1;
        updateSlider();
    }
});

// Lógica de Dark/Light Mode
const themeToggle = document.getElementById('theme-toggle');
const currentTheme = localStorage.getItem('theme');

if (currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme);
}

themeToggle.addEventListener('click', () => {
    let theme = document.documentElement.getAttribute('data-theme');
    
    if (theme === 'light') {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
    } else {
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
    }
});
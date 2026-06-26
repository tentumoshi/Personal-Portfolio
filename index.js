/* v.2 */
const sunIcon = document.querySelector('.darkMode-svg');
const moonIcon = document.querySelector('.lightMode-svg');
const progressBar = document.querySelectorAll('circle');

const reactjs_card_bg = document.querySelector('.project-card.reactjs-card img');

const text = document.querySelectorAll('span, p, h2, h3, h4, h5, h6');



let currentTheme = localStorage.getItem('theme') || 'light';

function applyTheme(theme) {
    if (theme === 'dark') {
        document.documentElement.style.setProperty('--color-bg', '#141A20');
        document.documentElement.style.setProperty('--color-text', '#D0D1D3');
        sunIcon.style.display = 'none';
        moonIcon.style.display = 'inline';
        progressBar.forEach(circle => circle.style.stroke = '--color-dark-primary');
        text.forEach(p => p.style.color = 'white');
    } else {
        document.documentElement.style.setProperty('--color-bg', '#D0D1D3');
        document.documentElement.style.setProperty('--color-text', '#141A20');
        sunIcon.style.display = 'inline';
        moonIcon.style.display = 'none';
        progressBar.forEach(circle => circle.style.stroke = '--color-primary');

        reactjs_card_bg.style.backgroundColor = '#141A20';

        text.forEach(p => p.style.color = 'black');
    }
}

// Apply saved theme on load
applyTheme(currentTheme);

// Toggle on click — attach to both icons
[sunIcon, moonIcon].forEach(icon => {
    icon.addEventListener('click', () => {
        currentTheme = currentTheme === 'light' ? 'dark' : 'light';
        applyTheme(currentTheme);
        localStorage.setItem('theme', currentTheme);
    });
});

/* ===================PROGRESS BAR STARTUP ANIMATIONS===================*/

const circles = document.querySelectorAll('.HTML-circle, .CSS-circle, .JavaScript-circle, .Java-circle, .Python-circle, .Cpp-circle');

// target percentage of progress bars
const targets = {
    'HTML-circle':       0.45,
    'CSS-circle':        0.45,
    'JavaScript-circle': 0.18,
    'Java-circle':       0.30,
    'Python-circle':     0.10,
    'Cpp-circle':        0.25,
};

const circumference = 377;

circles.forEach((circle, i) => {
    const className = [...circle.classList].find(c => targets[c]);
    const fillPercent = targets[className];
    const targetOffset = circumference * (1 - fillPercent);

    circle.style.strokeDasharray = circumference;
    circle.style.strokeDashoffset = circumference; // start empty

    setTimeout(() => {
        circle.style.transition = 'stroke-dashoffset 1.2s ease-out';
        circle.style.strokeDashoffset = targetOffset;
    }, 100 + i * 100); // staggered delay
});
const sunIcon = document.querySelector('.darkMode-svg');
const moonIcon = document.querySelector('.lightMode-svg');
const progressBar = document.querySelectorAll('circle');
const text = document.querySelectorAll('span, p, h2, h3, h4, h5, h6');

let currentTheme = localStorage.getItem('theme') || 'light';

function applyTheme(theme) {
    if (theme === 'dark') {
        document.documentElement.style.setProperty('--color-bg', '#141A20');
        document.documentElement.style.setProperty('--color-text', '#D0D1D3');
        document.documentElement.style.setProperty('--color-primary', '#2C576A');
        document.documentElement.style.setProperty('--color-dark-primary', '#07354C');
        sunIcon.style.display = 'none';
        moonIcon.style.display = 'inline';
        progressBar.forEach(circle => circle.style.stroke = '--color-dark-primary');
        text.forEach(p => p.style.color = 'white');
    } else {
        document.documentElement.style.setProperty('--color-bg', '#D0D1D3');
        document.documentElement.style.setProperty('--color-text', '#141A20');
        document.documentElement.style.setProperty('--color-primary', '#2C576A');
        document.documentElement.style.setProperty('--color-dark-primary', '#07354C');
        sunIcon.style.display = 'inline';
        moonIcon.style.display = 'none';
        progressBar.forEach(circle => circle.style.stroke = '--color-primary');
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
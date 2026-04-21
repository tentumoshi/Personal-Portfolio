const sunIcon = document.querySelector('.darkMode-svg');
const moonIcon = document.querySelector('.lightMode-svg');
const progressBar = document.querySelector('circle');
const text = document.querySelectorAll('span, p, h2, h3, h4, h5, h6');

let currentTheme = localStorage.getItem('theme') || 'light';

function applyTheme(theme) {
    if (theme === 'dark') {
        document.body.style.backgroundColor = '#1a1a1a';
        sunIcon.style.display = 'none';
        moonIcon.style.display = 'inline';
        progressBar.style.stroke = '#fff';
        text.forEach(p => p.style.color = 'white');
    } else {
        document.body.style.backgroundColor = '#f0f0f0';
        sunIcon.style.display = 'inline';
        moonIcon.style.display = 'none';
        progressBar.style.stroke = '#000';
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
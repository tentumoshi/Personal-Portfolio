const sunIcon = document.querySelector('.darkMode-svg');
const moonIcon = document.querySelector('.lightMode-svg');

let currentTheme = localStorage.getItem('theme') || 'light';

function applyTheme(theme) {
    if (theme === 'dark') {
        document.body.style.backgroundColor = '#1a1a1a';
        sunIcon.style.display = 'none';
        moonIcon.style.display = 'inline';
    } else {
        document.body.style.backgroundColor = '#f0f0f0';
        sunIcon.style.display = 'inline';
        moonIcon.style.display = 'none';
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
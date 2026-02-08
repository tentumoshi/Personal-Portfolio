const toggleLightOrDarkBtn = document.getElementById('toggleLightDark');
const titleElement = document.querySelector('.title');
let currentTheme = localStorage.getItem('theme') || 'light';


// alert('Light mode activated');
if (currentTheme === 'dark') {
    document.body.style.backgroundColor = '#1a1a1a';
    toggleLightOrDarkBtn.textContent = 'Light';
} else {
    document.body.style.backgroundColor = '#f0f0f0';
    toggleLightOrDarkBtn.textContent = 'Dark';
}

toggleLightOrDarkBtn.addEventListener('click', () => {
    if (currentTheme === 'light') {
        // titleElement.style.color = 'white';
        toggleLightOrDarkBtn.textContent = 'Light';
        document.body.style.backgroundColor = '#1a1a1a';
        currentTheme = 'dark';
        // alert('Dark mode activated');
    } else {
        // titleElement.style.color = 'black'; asfdsd
        toggleLightOrDarkBtn.textContent = 'Dark';
        document.body.style.backgroundColor = '#f0f0f0';
        currentTheme = 'light';
        // alert('Light mode activated');
    }


    // test

    localStorage.setItem('theme', currentTheme);
});

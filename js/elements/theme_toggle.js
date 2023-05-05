const themeToggle = document.getElementById('theme-toggle');
const icons = themeToggle.querySelectorAll('.icon');

themeToggle.addEventListener('click', (event) => {
    
    const activeIcon = themeToggle.querySelector('.icon[active]');
    
    if (activeIcon) {
        activeIcon.removeAttribute('active');
    }

    const nextIcon = activeIcon.nextElementSibling || icons[0];
    nextIcon.setAttribute('active', '');

    document.body.dataset.theme = nextIcon.dataset.icon
    
})

// Тематический переключатель
const themeToggle = document.getElementById('themeToggle');
const html = document.documentElement;

// Проверяем сохраненную тему
const savedTheme = localStorage.getItem('theme') || 'light';
html.setAttribute('data-theme', savedTheme);
updateThemeButton(savedTheme);

// Обработчик клика
themeToggle.addEventListener('click', () => {
    const currentTheme = html.getAttribute('data-theme');
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    
    html.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateThemeButton(newTheme);
});

function updateThemeButton(theme) {
    const icon = themeToggle.querySelector('i');
    const text = themeToggle.querySelector('span');
    
    if (theme === 'dark') {
        icon.className = 'fas fa-sun';
        text.textContent = 'Светлая тема';
    } else {
        icon.className = 'fas fa-moon';
        text.textContent = 'Темная тема';
    }
}
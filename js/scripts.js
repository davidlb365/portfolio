const toggleTheme = document.getElementById('toggle-theme')
const toggleIcon = document.getElementById('toggle-icon')
const toggleText = document.getElementById('toggle-text')
const toggleColors = document.getElementById('toggle-colors')

const rootStyles = document.documentElement.style

if(window.matchMedia("(prefers-color-scheme: dark)").matches) {
    document.body.classList.add('dark');
    toggleText.textContent = 'Light Mode'
    toggleIcon.src = 'assets/icons/sun.svg'
}

toggleTheme.addEventListener('click', () => {
    document.body.classList.toggle('dark')
    if(toggleIcon.src.includes('moon.svg')) {
        toggleText.textContent = 'Light Mode'
        toggleIcon.src = 'assets/icons/sun.svg'
    }
    else {
        toggleText.textContent = 'Dark Mode'
        toggleIcon.src = 'assets/icons/moon.svg'
    }
})

toggleColors.addEventListener('click', e => {
    console.log(e.target.dataset)
    rootStyles.setProperty('--primary-color', e.target.dataset.color)
})
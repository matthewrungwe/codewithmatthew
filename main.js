// Saving the theme to Local Storage
let theme = localStorage.getItem('theme');

if(theme === null) {
    setTheme('light');
} else {
    setTheme(theme);
}
// Local Storage end

let themeDots = document.getElementsByClassName('theme-dot');

for (let i = 0; themeDots.length > i; i++) {
    themeDots[i].addEventListener('click', function () {
        let mode = this.dataset.mode;

        setTheme(mode);
    });
}

function setTheme(mode) {
    if(mode === 'light') {
        document.getElementById('theme-style').href = 'styles.css'; 
    }

    if(mode === 'blue') {
        document.getElementById('theme-style').href = './css/blue.css'; 
    }

    if(mode === 'green') {
        document.getElementById('theme-style').href = './css/green.css'; 
    }

    if(mode === 'purple') {
        document.getElementById('theme-style').href = './css/purple.css'; 
    }

    localStorage.setItem('theme', mode);
}
function changeBackgroundColor() {
    const buttons = document.querySelectorAll('.nav-button');
    const body = document.body;
    const colors = {
        0: '#210121',
        1: '#01210f',
        2: '#011721',
        3: '#210101'
    }
    buttons.forEach((button, index) => {
        button.addEventListener('click', () => {
            body.style.background = `${colors[index]}`;
        });
    });
}

function restoreDefaultColor() {
    const logo = document.querySelector('.logo');
    const body = document.body;
    const defaultColor = '#080b1c';
    logo.addEventListener('click', () => {
        body.style.background = defaultColor;
    });
}

function visitSites() {
    const logos = document.querySelectorAll('.sidebar-item');
    const websiteURLs = {
        0: 'https://en.wikipedia.org/wiki/HTML',
        1: 'https://pl.wikipedia.org/wiki/CSS',
        2: 'https://en.wikipedia.org/wiki/JavaScript',
        3: 'https://en.wikipedia.org/wiki/Sass_(stylesheet_language)'
    }
    logos.forEach((logo, index) => {
        logo.addEventListener('click', () => {
            window.open(websiteURLs[index]);
        });
    });
}

changeBackgroundColor();
restoreDefaultColor();
visitSites();
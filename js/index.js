document.addEventListener('DOMContentLoaded', () => {
    startApp();
})

const startApp = () => {
    stickyNav();
    createGallery();
    smoothNav();

    document.querySelector('#current-year').textContent = new Date().getFullYear();
}

const stickyNav = () => {
    const header = document.querySelector('header');
    const body = document.querySelector('body');
    const limitSection = document.querySelector('.hero__video-section');
}
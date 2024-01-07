const btn = document.querySelector('.banner button');
const banner = document.querySelector('.banner');
const slideshowWrapper = document.querySelector('.slideshow-wrapper');


btn.addEventListener('click', () => {
    banner.style.display = 'none';
    slideshowWrapper.style.cssText = 'opacity: 1; visibility: visible;'
})
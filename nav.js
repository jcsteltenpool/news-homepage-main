const primaryNav = document.querySelector('.primary-navigation');
const navToggle = document.querySelector('.mobile-nav-toggle');
const overlay = document.querySelector('.overlay');
const navLinks = document.querySelectorAll('.primary-navigation a');

navToggle.addEventListener('click', () => {
    const visibility = primaryNav.getAttribute('data-visible')

    if (visibility === 'false') {
        primaryNav.setAttribute('data-visible', true);
        navToggle.setAttribute('aria-expanded', true);
        overlay.style.display = 'block';
    } else {
        primaryNav.setAttribute('data-visible', false);
        navToggle.setAttribute('aria-expanded', false);
        overlay.style.display = 'none';
    }
})

navLinks.forEach((navLink) => {
    // const visibility = primaryNav.getAttribute('data-visible')
    navLink.addEventListener('click', () => {
        primaryNav.setAttribute('data-visible', false);
        navToggle.setAttribute('aria-expanded', false);
        overlay.style.display = 'none';
 
    })
})
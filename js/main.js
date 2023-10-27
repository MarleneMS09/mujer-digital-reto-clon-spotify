/* Funcionality of menu logo of navbar - responsiveness*/

const menuIcon = document.querySelector('.menu-icon');
const navLinks = document.querySelector('nav ul');

menuIcon.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});



/* for movement of header*/
const header = document.querySelector('header');


window.addEventListener('scroll', function() {

    const scrollPosition = window.scrollY || window.pageYOffset;

    if (scrollPosition > 0) {
        header.classList.add('scrolling');
    } else {
        
        header.classList.remove('scrolling');
    }
});

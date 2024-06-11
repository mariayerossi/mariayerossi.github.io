window.addEventListener('load', function() {
    document.querySelector('.profile-pic').style.animation = 'fadeInLeft 1s forwards';
    document.querySelector('.intro p').style.animation = 'fadeInRight 1s forwards';
});
// script.js
document.addEventListener("DOMContentLoaded", function () {
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('nav-links');

    hamburger.addEventListener('click', function () {
        navLinks.classList.toggle('active');
    });
});


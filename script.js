const menuIcon = document.getElementById('menue');
const mobileMenu = document.querySelector('.mobile-minue');

menuIcon.addEventListener('click', () => {
    mobileMenu.classList.toggle('show');
});
const menuLinks = document.querySelectorAll('.mobile-minue nav a');

menuLinks.forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.remove('show');
    });
});

document.addEventListener('click', function(e) {
        if (!mobileMenu.contains(e.target) && e.target !== menuIcon) {
            mobileMenu.classList.remove('show');
        }
    });
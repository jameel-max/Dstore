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
const menuLinksx = document.querySelectorAll('.mobile-minue nav a i');

menuLinksx.forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.remove('show');
    });
});

document.addEventListener('click', function(e) {
        if (!mobileMenu.contains(e.target) && e.target !== menuIcon) {
            mobileMenu.classList.remove('show');
        }
    });

// لما نكبس على أيقونة المنيو
menuIcon.addEventListener('click', () => {
    mobileMenu.classList.add('active');
    menuIcon.classList.add('active');
    document.body.classList.add('no-scroll'); // هون
});

// لما نكبس على إشارة X
closeIcon.addEventListener('click', () => {
    mobileMenu.classList.remove('active');
    menuIcon.classList.remove('active');
    document.body.classList.remove('no-scroll'); // وهون
});

// لما نكبس على رابط داخل المنيو
menuLinks.forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.remove('active');
        menuIcon.classList.remove('active');
        document.body.classList.remove('no-scroll'); // وهون كمان
    });
});

// لما نكبس برا القائمة
document.addEventListener('click', (e) => {
    if (!mobileMenu.contains(e.target) && e.target !== menuIcon) {
        mobileMenu.classList.remove('active');
        menuIcon.classList.remove('active');
        document.body.classList.remove('no-scroll'); // كمان هون
    }
});

$(document).ready(function() {
    $('#mobile_btn').on('click', function() {
        $('#mobile_menu').toggleClass('active'); // Alterna entre abrir e fechar
        $(this).find('i').toggleClass('fa-times');
    });
});

document.querySelectorAll('.nav-item a').forEach(link => {
    link.addEventListener('click', function() {
        document.querySelectorAll('.nav-item').forEach(item => item.classList.remove('active'));
        this.parentElement.classList.add('active');
    });
});


ScrollReveal().reveal('#titulo', { origin: 'top', duration: 1800, distance: '50px' });
        ScrollReveal().reveal('.card', { origin: 'left', duration: 2000, distance: '50px', interval: 200 });
        ScrollReveal().reveal('.swiper-slide', { origin: 'bottom', duration: 2000, distance: '50px' });
        ScrollReveal().reveal('.description-sobre', { origin: 'right', duration: 2000, distance: '50px' });

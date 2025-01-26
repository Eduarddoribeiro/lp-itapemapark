$(document).ready(function() {
    $('#mobile_btn').on('click', function() {
        $('#mobile_menu').toggleClass('active'); // Alterna entre abrir e fechar
        $(this).find('i').toggleClass('fa-times');
    });
});


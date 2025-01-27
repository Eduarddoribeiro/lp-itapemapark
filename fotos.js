$(document).ready(function(){
  $('.carousel').slick({
    infinite: true,  // Carrossel infinito
    slidesToShow: 1, // Mostrar uma imagem por vez no celular
    slidesToScroll: 1, // Avançar uma imagem de cada vez
    autoplay: true,  // Avanço automático
    autoplaySpeed: 2000,  // Tempo de cada slide
    arrows: true,  // Mostrar setas de navegação
    dots: true,  // Mostrar pontos de navegação
    responsive: [
      {
        breakpoint: 768, // Para telas até 768px (celular)
        settings: {
          slidesToShow: 1, // Uma imagem por vez no celular
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 1024, // Para telas até 1024px (tablet)
        settings: {
          slidesToShow: 2, // Duas imagens por vez no tablet
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 1200, // Para telas acima de 1200px (desktop)
        settings: {
          slidesToShow: 3, // Três imagens por vez no desktop
          slidesToScroll: 1
        }
      }
    ]
  });
});
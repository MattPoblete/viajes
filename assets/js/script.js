$( document ).ready(function() {
    
    //Smooth scroll
    $("#navbar a").on("click", (function (evento) { 
        evento.preventDefault();
        let elemento = $(this).attr("href");
      console.log(elemento);
      $('html, body').animate({scrollTop: $(elemento).offset().top}, 1500);
      }));
      
    //desactivar pausa del carrusel en hover y modificacion de intervalo  
    $('.carousel').carousel({
        pause : false,
        interval: 3500
    })
  });
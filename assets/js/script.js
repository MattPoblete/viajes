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
    //modals//
    $('#btn-card1').click(function(){
        $('#modal1').modal('show')
    })
    $('#btn-card2').click(function(){
        $('#modal2').modal('show')
    })
    $('#btn-card3').click(function(){
        $('#modal3').modal('show')
    })
    $('#btn-card4').click(function(){
        $('#modal4').modal('show')})
  });
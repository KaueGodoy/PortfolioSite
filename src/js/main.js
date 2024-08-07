$(function() {
  // Carousel
  $('.owl-carousel').owlCarousel({
    loop: false,
    items: 1,
    dots: false,
    nav: true,
    navText: ["<i class='bi bi-arrow-left'></i>", "<i class='bi bi-arrow-right'></i>"],
  });

  var $audio = $('#song')[0];
  
  if ($audio) {
    $audio.volume = 0.05; 
    
    $(".sound-on").hide();

    $(".sound-muted").on('click', function() {
      $(".sound-on").show();
      $(".sound-muted").hide();
      $audio.play(); 
    });

    $(".sound-on").on('click', function() {
      $(".sound-muted").show();
      $(".sound-on").hide();
      $audio.pause(); 
    });
  }
});

/* Button Play */
$('.play').on('click', function() {
  $(this).toggleClass('goDown');
});

/* Sections */
$('footer').hide();

/* About me */
$('#about-me').hide();

$('#sd-about-me').on('click', function(event) {
  event.preventDefault(); // Impede o comportamento padrão do link

  $(this).fadeOut();
  $('#hero').fadeOut();
  $('#about-me').fadeIn();
  $('footer').fadeIn();
});

/* Botão de voltar */
$('.back').on('click', function() {
  $('#about-me').fadeOut();
  $('footer').fadeOut();
  $('#sd-about-me').fadeIn();
  $('#hero').fadeIn();
});

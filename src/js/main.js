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

/* Botão About Me */
$('.button-info').on('click', function(event) {
  event.preventDefault();

  let sectionId = $(this).data('section');
  $('.game-section').removeClass('active-section').fadeOut(500);

  $('.game-section').removeClass('active-section').hide();
  $(`#${sectionId}`).addClass('active-section').fadeIn(1000);

  $(this).fadeOut(500);
  $('#hero').fadeOut(500);
  $('.wrapper-sections').fadeToggle(1000);
  $('footer').fadeIn(1000);
  $('.button-navigation.back').fadeIn(1000);
});

/* Botões de Navegação dos Jogos */
$('.button-navigation').on('click', function() {
  let gameId = $(this).data('section');
  $('.info-section').removeClass('active-section').fadeOut(500);

  $('.game-section').removeClass('active-section').hide();
  $(`#${gameId}`).addClass('active-section').fadeIn(1000);

  $('#hero').fadeOut(500);
  $('.wrapper-sections').fadeToggle(1000);
  $('footer').fadeIn(1000);
  $('.button-navigation.back').fadeIn(1000);
});

/* Botão de Voltar */
$('.button-navigation.back').on('click', function() {
  $(this).fadeOut(500);
  $('footer').fadeOut(500);
  $('.wrapper-sections').fadeOut(500);
  $('#hero').fadeIn(1000);
  $('.button-info').fadeIn(1000);
});

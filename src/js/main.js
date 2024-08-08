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

function showSection(sectionType, sectionId) {
  $(`.${sectionType}`).removeClass('active-section').fadeOut(1000);
  $(`#${sectionId}`).addClass('active-section').fadeIn(1000);
  $('#hero').fadeOut();
  $('.wrapper-sections').fadeIn();
  $('.button-navigation.back').fadeIn(2000);
  $('footer').fadeIn(1000);
}

// About me
$('.button-info').on('click', function(event) {
  event.preventDefault();
  let sectionId = $(this).data('section');
  $('.button-info').fadeOut();
  showSection('info-section', sectionId);
});

// Games
$('.button-navigation').on('click', function() {
  let gameId = $(this).data('section');
  showSection('game-section', gameId);
});

// Evitar múltiplos eventos
$('.button-navigation').on('click', '*', function(e) {
  e.stopPropagation(); 
  $(this).closest('.button-navigation').trigger('click');
});

/* Botão de voltar */
$('.back').on('click', function() {
  $('#about-me').fadeOut();
  $('footer').fadeOut();
  $('.button-info').fadeIn();
  $('#hero').fadeIn();
});



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
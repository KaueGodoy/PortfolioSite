$(function() {
  const $owlCarousel = $('.owl-carousel');
  const $soundButtons = $('.sound');
  
  // Inicializa o carrossel
  $owlCarousel.owlCarousel({
    loop: false,
    items: 1,
    dots: false,
    nav: true,
    navText: ["<i class='bi bi-arrow-left'></i>", "<i class='bi bi-arrow-right'></i>"],
    onChange: function() {
      // Pausa e muta o vídeo do slide atual
      $('.owl-item.active video').each(function() {
        const $video = $(this);
        $video.get(0).pause();
        $video.prop('muted', true);
      });

      // Reseta os botões de áudio dos slides não ativos
      $('.owl-item').not('.active').each(function() {
        const $slide = $(this);
        $slide.find('.sound-on').hide();
        $slide.find('.sound-muted').show();
      });
    },
    onTranslated: function() {
      // Retoma o vídeo do slide ativo
      $('.owl-item.active video').each(function() {
        $(this).get(0).play();
      });
    }
  });

  // Alterna o áudio dos vídeos
  $soundButtons.on('click', function() {
    const $this = $(this);
    const $video = $this.siblings('video');
    const isMuted = $this.hasClass('sound-muted');
    
    $video.prop('muted', !isMuted);
    $this.toggle();
    $this.siblings('.sound').toggle();
  });
});

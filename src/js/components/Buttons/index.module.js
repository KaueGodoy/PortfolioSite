import { reduceVolume, resetAudio } from '../Audio/index.module.js'; 

/* Botões de informações e play */
export function initInfoButton() {
  /* Botão About Me */
  $('.button-info').on('click', function(event) {
    event.preventDefault();

    let sectionId = $(this).data('section');
    $('.game-section').removeClass('active-section').fadeOut(500);
    $('.gameplay-section').removeClass('active-section').fadeOut(500);
    $('.info-section').removeClass('active-section').fadeOut(500);

    $(`#${sectionId}`).addClass('active-section').fadeIn(1000);
    $(this).fadeOut(500);

    setTimeout(() => {
      $('#nav ul.nav-links').css('gap', '0');
    }, 500);

    $('#hero').fadeOut(500);
    $('.wrapper-sections').fadeIn(1000);
    $('footer').fadeIn(1000);
    $('.button-navigation.back').fadeIn(1000);
  });

  $('.button-navigation.game-download').on('click', function(event) {
    event.stopPropagation(); // Evita que o clique propague para outros manipuladores de eventos
    
    let $button = $(this);
    let $buttonText = $button.find('.button-navigation-top'); 
    let originalText = $buttonText.html(); 
    
    // loader
    $buttonText.html('<div class="dots-loader"><span></span><span></span><span></span></div>');

    // Iniciar o download
    let file = $button.data('file');
    window.location.href = file;

    setTimeout(() => {
      $buttonText.html(originalText);
    }, 3000); 
  }); 

  /* Botões de Navegação dos Jogos */
  $('.button-navigation').not('.game-download').on('click', function() {
    if ($(this).hasClass('publish')) {
      let url = $(this).data('url');
      window.open(url, '_blank');
      return;
    }

    let gameId = $(this).data('section');

    if ($(window).width() <= 767 && gameId === 'gameplay-camundangos' && $(this).hasClass('playBtn')) {
      window.location.href = 'https://kauegodoy.itch.io/os-camundangos';
      return;
    }
    
    $('.gameplay-section').removeClass('active-section').fadeOut(500);
    $('.info-section').removeClass('active-section').fadeOut(500);
    $('.game-section').removeClass('active-section').hide();
    
    if ($(this).hasClass('playBtn')) {
      if ($(this).hasClass('active')) return; 
    
      $(this).addClass('active');

      $(this).animate({
        marginTop: '100px', 
        opacity: 0
      }, 1000, function() {
        $(this).hide();
        
        $('.game-section').removeClass('active-section').fadeOut(500);
        $('.info-section').removeClass('active-section').fadeOut(500);

        $(`#${gameId}`).addClass('active-section').fadeIn(1000);
        $('#hero').fadeOut(500);
        $('.wrapper-sections').fadeIn(1000);
        $('footer').fadeIn(1000);
        $('.button-navigation.back').fadeIn(1000);

        let iframeSrc = $(`#${gameId} .iframe_placeholder`).data('iframe-src');
        if (iframeSrc) {
          let iframe = `<iframe allowfullscreen="true" scrolling="no" src="${iframeSrc}" id="game_drop" allow="autoplay; fullscreen *; geolocation; microphone; camera; midi; monetization; xr-spatial-tracking; gamepad; gyroscope; accelerometer; xr; cross-origin-isolated; web-share" allowtransparency="true" webkitallowfullscreen="true" mozallowfullscreen="true" msallowfullscreen="true" frameborder="0"></iframe>`;
          $(`#${gameId} .iframe_placeholder`).html(iframe);
          $('.alert-message').hide();

          // Reduz o volume apenas se o iframe estiver presente
          reduceVolume();
        } else {
          $('.alert-message').show();
          $(`#${gameId} .iframe_placeholder`).html('');
          // O áudio não será alterado se o alerta estiver presente
        }

        $(this).css({ marginTop: '', opacity: '' }).show(4000);
      });
    } else {
      $(`#${gameId}`).addClass('active-section').fadeIn(1000);
      $('#hero').fadeOut(500);
      $('.wrapper-sections').fadeToggle(1000);
      $('footer').fadeIn(1000);
      $('.button-navigation.back').fadeIn(1000);
    }
  });
}

/* Botão de Voltar */
export function initBackButton() {
  $('.button-navigation.back').on('click', function() {
    const isGameplayActive = $('.gameplay-section').hasClass('active-section');
    const isGameplayVisible = $('.gameplay-section').is(':visible');
    const hasIframe = $('.iframe_placeholder iframe').length > 0;
    const hasAlertMessage = $('.alert-message:visible').length > 0;


    $(this).fadeOut(500);
    $('footer').fadeOut(500);
    $('.wrapper-sections').fadeOut(500);
    $('.playBtn').removeClass('active');
    $('#hero').fadeIn(1000);
    $('.button-info').fadeIn(1000);  
    // Remove o iframe
    $('.iframe_placeholder').html('');
    
    // Remove as classes de seção ativa
    $('.gameplay-section').removeClass('active-section').fadeOut(500);
    $('.game-section').removeClass('active-section').fadeOut(500);
    $('.info-section').removeClass('active-section').fadeOut(500);

    if (!isGameplayActive && isGameplayVisible && hasIframe && !hasAlertMessage) {
      resetAudio();
    }

    setTimeout(() => {
      $('#nav ul.nav-links').css('gap', '2rem');
    }, 0);
  });
}
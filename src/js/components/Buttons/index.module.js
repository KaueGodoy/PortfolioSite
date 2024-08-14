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

  /* Botões de Navegação dos Jogos */
  $('.button-navigation').on('click', function() {
    if ($(this).hasClass('publish')) {
      // Redirecionar para o URL especificado no data-url e abrir em nova aba
      let url = $(this).data('url');
      window.open(url, '_blank');
      return;
    }

    let gameId = $(this).data('section');
    
    // Remove as seções ativas e oculta todas as seções
    $('.gameplay-section').removeClass('active-section').fadeOut(500);
    $('.info-section').removeClass('active-section').fadeOut(500);
    $('.game-section').removeClass('active-section').hide();
    
    if ($(this).hasClass('game-download')) {
      // Função para download do arquivo
      let file = $(this).data('file');
      window.location.href = file; 
      return;
    } else if ($(this).hasClass('playBtn')) {
      if ($(this).hasClass('active')) return; 
    
      $(this).addClass('active');

      if (!$('.gameplay-section').hasClass('active-section')) {
        reduceVolume();
      }

      $(this).animate({
        marginTop: '100px', 
        opacity: 0
      }, 1000, function() {
        $(this).hide();
        
        $('.game-section').removeClass('active-section').fadeOut(500);
        $('.info-section').removeClass('active-section').fadeOut(500);

        // Exibir a seção correspondente
        $(`#${gameId}`).addClass('active-section').fadeIn(1000);
        $('#hero').fadeOut(500);
        $('.wrapper-sections').fadeIn(1000);
        $('footer').fadeIn(1000);
        $('.button-navigation.back').fadeIn(1000);

        // Adicionar o iframe específico da seção
        let iframeSrc = $(`#${gameId} .iframe_placeholder`).data('iframe-src');
        let iframe = `<iframe allowfullscreen="true" scrolling="no" src="${iframeSrc}" id="game_drop" allow="autoplay; fullscreen *; geolocation; microphone; camera; midi; monetization; xr-spatial-tracking; gamepad; gyroscope; accelerometer; xr; cross-origin-isolated; web-share" allowtransparency="true" webkitallowfullscreen="true" mozallowfullscreen="true" msallowfullscreen="true" frameborder="0"></iframe>`;
        $(`#${gameId} .iframe_placeholder`).html(iframe);

        $(this).css({ marginTop: '', opacity: '' }).show(4000);
      });
    } else {
      // Exibir a seção correspondente
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

    $(this).fadeOut(500);
    $('footer').fadeOut(500);
    $('.wrapper-sections').fadeOut(500);
    $('.playBtn').removeClass('active');
    $('#hero').fadeIn(1000);
    $('.button-info').fadeIn(1000);  
    // Remove o iframe
    $('.iframe_placeholder').html('');
    
    // Remove as classes de seção ativa
    $('.game-section').removeClass('active-section').fadeOut(500);
    $('.info-section').removeClass('active-section').fadeOut(500);

    if (!isGameplayActive && isGameplayVisible) {
      resetAudio();
    }

    setTimeout(() => {
      $('#nav ul.nav-links').css('gap', '2rem');
    }, 0);
  });
}



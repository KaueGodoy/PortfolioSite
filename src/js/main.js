$(function() {
  // Carousel - Hero Banner
  $('.owl-carousel').owlCarousel({
    loop: false,
    items: 1,
    dots: false,
    nav: true,
    navText: ["<i class='bi bi-arrow-left'></i>", "<i class='bi bi-arrow-right'></i>"],
  });

  // Carousel - Gallery
  $('.owl-carousel.gallery').owlCarousel({
    loop: false,
    items: 1,
    margin: 20,
    dots: false,
    nav: true,
    navText: ["<i class='bi bi-arrow-left'></i>", "<i class='bi bi-arrow-right'></i>"],
    responsive: {
      0: { 
        items: 1
      },
      768: {
        items: 3
      }
    }
  });

  $audio = $('#song')[0];
  if ($audio) {
    $audio.volume = 0.115; 
    
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
  
  /* Button Play */
  $('#playBtn').on('click', function() {
    // Adicione lógica se necessário
  });

  /* Sections */

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

      // Reduzir o volume do áudio para 0
      if ($audio.volume == 0.115) {
        $audio.volume = 0; 
        $(".sound-on").hide();
        $(".sound-muted").show().prop('disabled', true);
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

  /* Visualização Galeria */
  $('.owl-carousel.gallery img').on('click', function() {
    let src = $(this).attr('src');
    $('#modalImage').attr('src', src); 
    $('#modalGallery').modal('show');
  });

  $('button.close').on('click', function () {
    $('#modalImage').attr('src', '');
    $('#modalGallery').modal('hide'); 
  });

  /* Botão de Voltar */
  $('.button-navigation.back').on('click', function() {
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

    // Restaurar o volume do áudio e o estado dos botões de som
    if ($audio) {
      $audio.pause(); // Pausa o áudio
      $audio.currentTime = 0; // Opcional: Reseta a posição do áudio
      $audio.volume = 0.115;
      $(".sound-on").hide();
      $(".sound-muted").show().prop('disabled', false);
    }

    setTimeout(() => {
      $('#nav ul.nav-links').css('gap', '2rem');
    }, 0);
  });
});
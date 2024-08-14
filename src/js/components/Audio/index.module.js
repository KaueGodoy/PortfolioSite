export function initAudio() {
  const $audio = $('#song')[0];
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
}

export function reduceVolume() {
  const $audio = $('#song')[0];
  if ($audio.volume == 0.115) {
    $audio.volume = 0; 
    $(".sound-on").hide();
    $(".sound-muted").show().prop('disabled', true);
  }
}

export function resetAudio() {
  const $audio = $('#song')[0];
  $audio.pause(); 
  $audio.currentTime = 0; 
  $audio.volume = 0.115;
  $(".sound-on").hide();
  $(".sound-muted").show().prop('disabled', false);
}

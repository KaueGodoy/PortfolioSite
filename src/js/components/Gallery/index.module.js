export function initGallery() {
  $('.gallery-carousel img').on('click', function() {
    let src = $(this).attr('src');
    $('#modalImage').attr('src', src); 
    $('#modalGallery').modal('show');
  });

  $('button.close').on('click', function () {
    $('#modalImage').attr('src', '');
    $('#modalGallery').modal('hide'); 
  });
}

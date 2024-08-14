export function initHeroCarousel() {
  $('#hero-carousel').owlCarousel({
    loop: false,
    items: 1,
    dots: false,
    nav: true,
    navText: ["<i class='bi bi-arrow-left'></i>", "<i class='bi bi-arrow-right'></i>"],
  });
}

export function initGalleryCarousel() {
  $('.gallery-carousel').owlCarousel({
    loop: false,
    items: 1,
    margin: 20,
    dots: false,
    nav: true,
    navText: ["<i class='bi bi-arrow-left'></i>", "<i class='bi bi-arrow-right'></i>"],
    mouseDrag: false,
    touchDrag: false,
    responsive: {
      0: { 
        items: 1
      },
      768: {
        items: 3
      }
    }
  });
}
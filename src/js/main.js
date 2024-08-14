import { initHeroCarousel, initGalleryCarousel } from '../../src/js/components/Carousel/index.module.js';
import { initAudio } from '../../src/js/components/Audio/index.module.js';
import { initInfoButton, initBackButton } from '../../src/js/components/Buttons/index.module.js';
import { initGallery } from '../../src/js/components/Gallery/index.module.js';

$(function() {
  initHeroCarousel();
  initGalleryCarousel();
  initAudio();
  initInfoButton();
  initBackButton();
  initGallery();
});

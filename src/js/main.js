import { initHeroCarousel, initGalleryCarousel } from './components/Carousels/index.module.js';
import { initAudio } from './components/Audio/index.module.js';
import { initInfoButton, initBackButton } from './components/Buttons/index.module.js';
import { initGallery } from './components/Gallery/index.module.js';

$(function() {
  initHeroCarousel();
  initGalleryCarousel();
  initAudio();
  initInfoButton();
  initBackButton();
  initGallery();
});

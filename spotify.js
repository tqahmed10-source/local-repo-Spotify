new Swiper('.swiper', {
  slidesPerView: 'auto',
  spaceBetween: 20,
  slidesPerGroup: 3,     // move 3 slides
  loop: false,
  watchOverflow: true,
  loopFillGroupWithBlank: true, // fill last group so all slides move
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

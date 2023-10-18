const slider = document.querySelector('.slider__items');
const slides = Array.from(slider.querySelectorAll('.slider__item'));
const prevButton = document.querySelector('.slider__arrow');
const nextButton = document.querySelector('.slider__arrow_next');

function nextSlide() {
  let index = slides.findIndex((slide) => slide.classList.contains('slider__item_active'));
  slides[index].classList.remove('slider__item_active');
  index < slides.length - 1 ? index++ : index = 0;
  slides[index].classList.add('slider__item_active');
}

function previousSlide() {
  let index = slides.findIndex((slide) => slide.classList.contains('slider__item_active'));
  slides[index].classList.remove('slider__item_active');
  index > 0 ? index-- : index = slides.length - 1;
  slides[index].classList.add('slider__item_active');
}

nextButton.addEventListener('click', nextSlide);
prevButton.addEventListener('click', previousSlide);

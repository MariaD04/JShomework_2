const slider = document.querySelector('.slider__items');
const slides = Array.from(slider.querySelectorAll('.slider__item'));
const prev_button = document.querySelector('.slider__arrow');
const next_button = document.querySelector('.slider__arrow_next');
const counter = slides.length;
let slide_index = 0;

function updateslider() {
  slides.forEach((slide, index) => {
    if (index === slide_index) {
      slide.classList.add('slider__item_active');
    } else {
      slide.classList.remove('slider__item_active');;
    }
  });
}

function previousslide() {
    slide_index = (slide_index - 1 + counter ) % counter ;
    updateslider();
}

  function nextslide() {
    slide_index = (slide_index + 1) % counter;
    updateslider();
}

next_button.addEventListener('click', nextslide);
prev_button.addEventListener('click', previousslide);

updateslider();

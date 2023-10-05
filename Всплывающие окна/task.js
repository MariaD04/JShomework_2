const modal_main = document.querySelector('#modal_main');
const modal_success = document.querySelector('#modal_success');
const btn_danger = document.querySelector('.btn_danger');
const modal__close = document.querySelectorAll('.modal__close_times');
const array = Array.from(modal__close);

array.forEach((button) => {
    button.addEventListener('click', () => {
        modal_main.classList.remove('modal_active');
        modal_success.classList.remove('modal_active');
    })
});

btn_danger.addEventListener('click', () => {
    modal_main.classList.remove('modal_active');
    modal_success.classList.add('modal_active');
})
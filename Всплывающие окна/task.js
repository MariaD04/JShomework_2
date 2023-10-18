const modalMain = document.querySelector('#modal_main');
const modalSuccess = document.querySelector('#modal_success');
const btnDanger = document.querySelector('.btn_danger');
const modalClose =  Array.from(document.querySelectorAll('.modal__close_times'));

modalClose.forEach((button) => {
    button.addEventListener('click', () => {
        modalMain.classList.remove('modal_active');
        modalSuccess.classList.remove('modal_active');
    })
});

btnDanger.addEventListener('click', () => {
    modalMain.classList.remove('modal_active');
    modalSuccess.classList.add('modal_active');
})

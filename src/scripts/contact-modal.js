const modal = document.getElementById('contact-modal');
const modalCloseBtn = document.getElementById('contact-modal-close');
const modalBtns = document.querySelectorAll('.js-show-contact');


const showModal = () => {
    if(modal){
        modal.classList.add('is-shown');
        setTimeout( () => {
            modal.classList.add('is-expanded');
        }, 100);
        setTimeout( () => {
            modal.classList.add('is-fully-shown');
            document.body.classList.add('no-scroll');
        }, 600);
    }
};

const hideModal = () => {
    if(modal){
        document.body.classList.remove('no-scroll');
        modal.classList.remove('is-fully-shown');
        modal.classList.remove('is-expanded');
        setTimeout( () => {
            modal.classList.remove('is-shown');
        }, 600);
    }
};


modalBtns.forEach( (btn) => {
    btn.addEventListener('click', () => {
        showModal();
    });
});

if(modalCloseBtn){
    modalCloseBtn.addEventListener('click', () => {
        hideModal();
    });
}

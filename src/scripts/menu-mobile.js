const menuBtn = document.getElementById('menu-mob-btn');
const menuCloseBtn = document.getElementById('menu-mob-close-btn');
const navEl = document.getElementById('mobile-nav');

const mobMenuItemsWrap = document.getElementById('menu-mob-items');

let mobMenuItems = false;

if(mobMenuItemsWrap){
    mobMenuItems = mobMenuItemsWrap.querySelectorAll('a');
}

const showMenu = () => {
    document.body.classList.add('no-scroll');
    navEl.classList.add('is-shown');
    setTimeout(() => {
        navEl.classList.add('is-expanded');
    }, 100);
    setTimeout(() => {
        navEl.classList.add('is-fully-shown');
    }, 600);
};


const hideMenu = () => {
    document.body.classList.remove('no-scroll');
    navEl.classList.remove('is-fully-shown');
    setTimeout(() => {
        navEl.classList.remove('is-expanded');
    }, 300);
    setTimeout(() => {
        navEl.classList.remove('is-shown');
    }, 700);
};


if(navEl && menuBtn){
    menuBtn.addEventListener('click', () => {
        showMenu();
    });
}

if(navEl && menuCloseBtn){
    menuCloseBtn.addEventListener('click', () => {
        hideMenu();
    });
}



if(mobMenuItems){
    mobMenuItems.forEach(link => {
        link.addEventListener('click', () => {
            hideMenu();
        });
    });
}

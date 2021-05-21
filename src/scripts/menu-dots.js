const header = document.getElementById('mainheader');
const menu = document.getElementById('menu');
const menuMoreBtn = document.getElementById('menu-more');
const menuCollapseBtn = document.getElementById('menu-collapse');


const hiddenItems = [...document.querySelectorAll('#menu-hidden .menu-item-hidden')];



const revealItems = () => {

    let delay = 10;

    hiddenItems.forEach((item) => {
        delay = delay * 1.1;
        item.classList.add('menu-item-revealed');
        setTimeout(() => {
            item.classList.add('menu-item-visible');
        }, delay);
    });

};

const fadeItems = () => {

    let delay = 100;
    const itemsReversed = hiddenItems.slice().reverse();

    itemsReversed.forEach((item) => {
        // delay = delay * 1.1;
        setTimeout(() => {
            item.classList.remove('menu-item-visible');
            item.classList.remove('menu-item-revealed');
        }, delay);
    });

};


if(menu && menuMoreBtn){
    menuMoreBtn.addEventListener('click', () => {
        revealItems();
        menu.classList.add('is-expanded');
        header.classList.add('is-faded');
    });
}

if(menu && menuCollapseBtn){
    menuCollapseBtn.addEventListener('click', () => {
        fadeItems();
        menu.classList.remove('is-expanded');
        header.classList.remove('is-faded');
    });
}

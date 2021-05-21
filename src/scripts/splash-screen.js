const splashEl = document.getElementById('splash');


const removeSplash = () => {
    splashEl.classList.add('splash-hide');
};

document.addEventListener('DOMContentLoaded', function(){ 
    if(splashEl){
        setTimeout(removeSplash, 1000);
    }
}, false);


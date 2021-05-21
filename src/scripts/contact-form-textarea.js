const textarea = document.getElementById('user_msg');


const decreaseFont = () => {
    if(textarea){
        textarea.classList.add('large-field-input-full');
    }
};

const increaseFont = () => {
    if(textarea){
        textarea.classList.remove('large-field-input-full');
    }
};


if(textarea){
    textarea.addEventListener('input', (event) => {
        let msg = event.target.value;
        let msgLength = msg.length;

        if(msgLength > 50){
            decreaseFont();
        } else {
            increaseFont();
        }

    });
}

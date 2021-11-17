const $form = document.querySelector('#contact-form');
const msgInput = document.getElementById('user_msg');
const endPoint = 'http://aemorph.com/static/654-heartmedia/message/';
const closeBtn = document.querySelector('#contact-modal-close');

const populateSubmissionStatus = (status) => {

    if (status === 'SUCCESS') { 
        $form.classList.add('contact-form-success');
        if (msgInput) {
            msgInput.classList.remove('large-field-input-full');
        }
        $form.reset();
    }

    if (status === 'REJECT') {
        $form.classList.add('contact-form-error');
    }
    
    if(status == 'IDLE'){
        $form.classList.remove('contact-form-success');
        $form.classList.remove('contact-form-not-filled');
        $form.classList.remove('contact-form-error');
        $form.classList.remove('contact-form-error');
        msgInput.classList.remove('large-field-input-full');
    }
};

const sendRequestToServer = (url, options) => fetch(url, options).then((response) =>  response.json());

$form.addEventListener("submit", (event) => {
    event.preventDefault();
    populateSubmissionStatus('IDLE');
    const data = Object.fromEntries(new FormData(event.target).entries());

    const options = {
        method: 'POST',
        mode: "no-cors",
        headers: {
            'Content-Type': 'application/json',
        },
        body:JSON.stringify(data)
    };
 
    // validation
    if (data.user_name === "" | data.user_email === "" | data.user_msg === "") {
        populateSubmissionStatus('IDLE');
        populateSubmissionStatus('REJECT');
        $form.classList.add('contact-form-not-filled');
        return false;
    }  
    sendRequestToServer(endPoint, options).then(() =>  populateSubmissionStatus('SUCCESS')).catch(() =>  populateSubmissionStatus('REJECT'));
});
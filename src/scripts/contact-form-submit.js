import $ from "jquery";

const $form = $('#contact-form');
const msgInput = document.getElementById('user_msg');


const formFeedback = (response) => {

	$form.removeClass('contact-form-success');
	$form.removeClass('contact-form-not-filled');
	$form.removeClass('contact-form-error');
	
	if(response == 'success'){
		$form.addClass('contact-form-success');
		$form.trigger("reset");
		if(msgInput){
			msgInput.classList.remove('large-field-input-full');
		}
	} else if(response == 'notfilled'){
		$form.addClass('contact-form-not-filled');
	} else {
		$form.addClass('contact-form-error');
	}

};



$form.submit((e) => {

	e.preventDefault();

	$.post('http://aemorph.com/static/654-heartmedia/message/', $form.serialize(), (response) => {
		formFeedback(response);
	});

});

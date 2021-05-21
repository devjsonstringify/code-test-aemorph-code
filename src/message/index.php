<?php

if( !isset($_POST['user_name']) || !isset($_POST['user_email']) || !isset($_POST['user_msg']) || empty($_POST['user_name']) || empty($_POST['user_email']) || empty($_POST['user_msg']) ){
    die('notfilled');
}

$user_email = $_POST['user_email'];
$user_name = $_POST['user_name'];
$user_msg = $_POST['user_msg'];



$message = ' <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">';
$message .= '<html xmlns="http://www.w3.org/1999/xhtml">';
$message .= '<head><meta http-equiv="Content-Type" content="text/html; charset=UTF-8" /><meta name="viewport" content="width=device-width, initial-scale=1.0"/></head>';
$message .= '<body style="margin: 0; padding: 0;">';

$message .= '<table bgcolor="#ffffff" align="center" border="0" cellpadding="0" cellspacing="0" width="600">';
$message .= '
<tr>
    <td>Name:</td><td>' . $user_name . '</td>
</tr>
<tr>
    <td>Email:</td><td>' . $user_email . '</td>
</tr>
<tr>
    <td>Message:</td><td>' . $user_msg . '</td>
</tr>
';
$message .= '</table></body></html>';



// The subject of the email
$subject = 'Form submission from ' . $user_email;

// The address to which you want to receive the messages
$to = 'almaz.bisenbaev@aemorph.com';

// The address which the messages will come from
$from = 'Heart Media contact form';
$fromEmail = 'testhm@aemorph.com';


$header = 'MIME-Version: 1.0' . "\r\n";  
$header .= 'Content-type: text/html; charset=utf-8' . "\r\n";  
$header .= "From:" . $fromEmail . "\r\n" .  
       "Reply-To: order \r\n" .  
       "X-Mailer: PHP/" . phpversion(); 


// Send the email
if( !mail($to, $subject, $message, $header) ){
    die('error');
} else {
    die('success');
}
<?php
    $response = array( 'success' => false, 'message' => '' );
    $formData = file_get_contents( 'php://input' );
    $data = json_decode( $formData );
    if ( $data->submit && empty( $data->poohbear ) ) {
        $name = $data->name;
        $email = $data->email;
        $message = $data->message;
        $email_from = "contactform@lorinsteel.com";
        $full_name = 'LScom';
        $from_mail = $full_name.'<'.$email_from.'>';
        $from = $from_mail;
        $reply_mail = $name.'<'.$email.'>';
        $reply = $reply_mail;

        if ( $name == '' && $email == '' && $message == '' ) {
          $response[ 'success' ] = false;
          $response[ 'message' ] = 'Name, Email, and Message fields are required.';
        }

        else if ( $name == '' || $email == '' || $message == '' ) {
          $response[ 'success' ] = false;
          $response[ 'message' ] = 'Name, Email, and Message fields are required.';
        }

        else if ( $name != '' && $email != '' && $message != '' ) {
            $mailTo = 'lorinsteel@gmail.com';
            $subject = 'LorinSteel.com form submission from ' . $email;
            $body  = 'From: ' . $name . "\n";
            $body .= 'Email: ' . $email . "\n";
            $body .= "Message:\n" . $message . "\n\n";

            $headers = "" .
            $headers .= 'From: ' . $from . "\r\n";
            $headers .= 'Reply-to: ' . $reply . "\r\n";

            $success = mail( $mailTo, $subject, $body, $headers );

            if ( $success ) {
                $response[ 'success' ] = true;
                $response[ 'message' ] = 'Thank you! Your message has been sent!';
            }
        }
    }

    echo json_encode( $response );
?>

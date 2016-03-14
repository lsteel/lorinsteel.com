<?php
    $response = array( 'success' => false );
    $formData = file_get_contents( 'php://input' );
    $data = json_decode( $formData );
    if ( $data->submit && empty( $data->honeypot ) ) {
        $name = $data->name;
        $email = $data->email;
        $message = $data->message;

        if ( $name != '' && $email != '' && $message != '' ) {
            $mailTo = 'lorinsteel@gmail.com';
            $subject = $email . ' from ls.com contact form';
            $body  = 'From: ' . $name . "\n";
            $body .= 'Email: ' . $email . "\n";
            $body .= "Message:\n" . $message . "\n\n";

            $success = mail( $mailTo, $subject, $body );

            if ( $success ) {
                $response[ 'success' ] = true;
            }
        }
    }

    echo json_encode( $response );
?>
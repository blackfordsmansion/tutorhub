<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $to = "tutorhubwork1@gmail.com"; // Your email address
    $subject = "New Tutoring Request";
    
    $body = "A new tutoring request has been submitted:\n\n";
    $body .= "Name: " . $_POST['name'] . "\n";
    $body .= "Email: " . $_POST['email'] . "\n";
    $body .= "Phone: " . $_POST['phone'] . "\n";
    $body .= "Parent/Guardian: " . $_POST['parent_guardian'] . "\n";
    $body .= "Grade: " . $_POST['grade'] . "\n";
    $body .= "Subjects: " . $_POST['subjects'] . "\n";
    $body .= "Tutoring Needs: " . $_POST['needs'] . "\n";
    $body .= "Referral: " . $_POST['referral'] . "\n";
    
    $headers = "From: " . $_POST['email'] . "\r\n" .
               "Reply-To: " . $_POST['email'] . "\r\n" .
               "X-Mailer: PHP/" . phpversion();
    
    if (mail($to, $subject, $body, $headers)) {
        echo "<script>alert('Your request has been sent successfully!'); window.location.href='four.html';</script>";
    } else {
        echo "<script>alert('There was a problem sending your request. Please try again.'); window.location.href='four.html';</script>";
    }
}
?>
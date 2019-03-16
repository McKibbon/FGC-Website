<?php

if (isset($_POST['submit'])) {
    $fullName = $_POST['fullName'];
    $emailFrom  = $_POST['email'];
    $message = $_POST['message'];

    $emailTo = "natosEmail@email"; //Update
    $headers = "From: ".$emailFrom;
    $txt = "You have received an e-mail from ".$fullName.".\n\n".$message;
    $emailSubject = "FGC - Email From".$fullName;

    mail($emailTo, $emailSubject, $txt, $headers);
    header("Location: index.html?mailsend"); //https://www.youtube.com/watch?v=4q0gYjAVonI

}

?>
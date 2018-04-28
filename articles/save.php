<?php
    
    $referer = $_SERVER['HTTP_REFERER'];
    $arr = explode("-",$referer);
    $email = $arr[2];
    $contents = file_get_contents("users.txt");
    $temp = explode(" ",$contents);
    $new = $contents . ' ' . $email;
    $alreadySignedUp = false;
    
    foreach ($temp as $tempEmail) {
        if($tempEmail == $email){
            $alreadySignedUp = true;
        }
    }
    
    if($alreadySignedUp == false){
        $myfile = fopen("users.txt", "w") or die("Unable to open file!");
        $txt = "$new";
        fwrite($myfile, $txt);
        fclose($myfile);
        // Thanks for signing up
        header("Location: https://dylan-turner.github.io/formSender");
    }
    else{
        // already signed up
        header("Location: https://dylan-turner.github.io/formSender");
    }
    
?>
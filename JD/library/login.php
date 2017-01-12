 <?php
    $userName = $_POST["user"];
    $userPwd = $_POST["pwd"];

    if($userName == "111111" && $userPwd == "111111"){
        echo 0;
    }else{
        echo 1;
    }
?>
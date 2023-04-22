<?php

define("DB_HOST", "localhost:3307");
define("DB_USER", "root");
define("DB_PASSWORD", "");
define("DB_DATABASE", "test1");

$conn = mysqli_connect(DB_HOST,DB_USER,DB_PASSWORD,DB_DATABASE);

if (!$conn) {

    echo "Connection failed!";
}
else
{
    echo "Connection was successfull";
}

if(isset($_POST['submit']))
{
    $username = $_POST['username'];
    $email = $_POST['email'];
    $password = $_POST['password'];

   $sql = "insert into registration(username,email,password) values('$username','$email','$password')";

   if(mysqli_query($conn,$sql))
   {
     echo "<script>alert('present record inserted')</script>";
   }
   else
   {
     echo "error:".mysqli_error($conn);
   }
   mysqli_close($conn);
}

?>
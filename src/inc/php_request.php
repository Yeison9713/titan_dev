<?php
header("Access-Control-Allow-Origin: *");
// $url = "http://45.58.34.159/" . $_POST['url'];
$url = "http://80.211.145.179/" . $_POST['url'];
$datos = $_POST['data'];
$data = array('importarhtml' => $datos);

$options = array(
    'http' => array(
        'header'  => "Content-type: application/x-www-form-urlencoded\r\n",
        'method'  => 'POST',
        'content' => http_build_query($data)
    )
);

$context  = stream_context_create($options);
$result = file_get_contents($url, false, $context);
if (!$result) {
	// echo 'Error' . PHP_EOL;
	var_dump($result);
}else{ 
	print_r($result); 
}
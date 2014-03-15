<?php
/*
Uploadify
Copyright (c) 2012 Reactive Apps, Ronnie Garcia
Released under the MIT License <http://www.opensource.org/licenses/mit-license.php> 
*/

// Define a destination
$targetFolder = '/e/inayam/public/uploads'; // Relative to the root

$verifyToken = md5('unique_salt' . $_POST['timestamp']);

if (!empty($_FILES) && $_POST['token'] == $verifyToken)
{
	$tempFile = $_FILES['Filedata']['tmp_name'];
	$targetPath = $_SERVER['DOCUMENT_ROOT'] . $targetFolder;

	// Validate the file type
	$fileTypes = array('JPG','jpg','jpeg','gif','png'); // File extensions
	$fileParts = pathinfo($_FILES['Filedata']['name']);
	
	$fPart = explode(".", $_FILES['Filedata']['name']);

	$fileName	= $_FILES['Filedata']['name'];
	$fileName	= $verifyToken . "." . $fileParts['extension'];
	$fileName	= sha1(date('h-i-s, j-m-y, w')) . "." . $fileParts['extension'];
	$fileName	= str_replace('---','-',str_replace(' ','-',preg_replace("/[^A-Za-z0-9 -_]/", '', substr($fPart[0], 0, 64)))) . '-' . date('ymjhis') . "." . strtolower($fileParts['extension']);
	$fileName	= str_replace('(','-',$fileName);
	$fileName	= str_replace(')','-',$fileName);
	$fileName	= str_replace('!','-',$fileName);
	$fileName	= str_replace('--','-',$fileName);
	
	$targetFile = rtrim($targetPath,'/') . '/' . $fileName;
	
	if (in_array($fileParts['extension'],$fileTypes)) {
		move_uploaded_file($tempFile,$targetFile);
		//echo $tempFile . "<br>";
		//echo $targetFile . "<br>";
		echo $fileName;
		// echo '1';
	} else {
		echo 'Invalid file type.';
	}
}


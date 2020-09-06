<?php
$user = "root";
$password = '';
$db = 'job';
$host = 'localhost';

$dsn = 'mysql:host='.$host.';dbname='.$db;
$pdo = new PDO($dsn, $user, $password);

$pdo->query("SET NAMES UTF-8")
?>

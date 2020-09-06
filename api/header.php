<?php
    require_once 'config.php';
    $massiv = Array();
    $select = $pdo->query("SELECT * FROM `test`");
    foreach ($select as $item){
        array_push($massiv,$item);
    }
    echo json_encode($massiv);
?>
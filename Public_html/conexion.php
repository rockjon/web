<?php
try {
    $mbd = new PDO('mysql:host=mysql.hostinger.mx;dbname=u638142326_db1', 'u638142326_joma', 'avatar321');
    foreach($mbd->query('SELECT * from tabla_prueba') as $fila) {
        print_r($fila);
    }
    $mbd = null;
} catch (PDOException $e) {
    print "¡Error!: " . $e->getMessage() . "<br/>";
    die();
}


?>
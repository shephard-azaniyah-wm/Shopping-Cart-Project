<?php
try {
    $con = new PDO('mysql:host=127.0.0.1;dbname=Lucky Bunny', 'root', 'root');
} catch (PDOException $e) {
    print "Error!: " . $e->getMessage() . "<br/>";
    die();
}
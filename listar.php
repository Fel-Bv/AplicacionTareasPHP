<?php

    include('bd.php');

    $consulta = "SELECT * FROM Tareas";
    $resultado = mysqli_query($conexion, $consulta);

    if (! $resultado) die('No hay registros.');

    $json = array();
    while ($registro = mysqli_fetch_array($resultado)) {
        $json[] = array(
            "ID" => $registro['ID'],
            "nombre" => $registro['Nombre'],
            "descripcion" => $registro['Descripcion']
        );
    }
    $json = json_encode($json);

    echo $json;

?>
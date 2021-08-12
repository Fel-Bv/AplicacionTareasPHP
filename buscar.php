<?php

    include('bd.php');

    $busqueda = $_POST['busqueda'];
    if (! empty($busqueda)) {
        $consulta = "SELECT * FROM Tareas WHERE Nombre LIKE '%$busqueda%'";
        $resultado = mysqli_query($conexion, $consulta);

        if (! $resultado) die('Error de consulta ' . mysqli_error($conexion) . '.');

        $json = array();
        while ($registro = mysqli_fetch_array($resultado)) {
            $json[] = array(
                "ID" => $registro['ID'],
                "nombre" => $registro['Nombre'],
                "descripcion" => $registro['Descripcion']
            );
        }
        $jsonstring = json_encode($json);

        echo $jsonstring;
    }

?>
<?php

    include('bd.php');

    $id = $_POST['id'];
    if (! empty($id)) {
        $consulta = "SELECT * FROM Tareas WHERE ID=$id";
        $resultado = mysqli_query($conexion, $consulta);

        if (! $resultado) die('La ejecución de la consulta ha fallado.');
        
        $json = array();
        while ($registro = mysqli_fetch_array($resultado)) {
            $json[] = array(
                'ID' => $registro['ID'],
                'nombre' => $registro['Nombre'],
                'descripcion' => $registro['Descripcion'],
            );
        }
        $json = json_encode($json[0]);

        echo $json;
    }
    else echo 'Dame datos';

?>
<?php

    include('bd.php');

    $id = $_POST['id'];
    $nombre = $_POST['nombre'];
    $descripcion = $_POST['descripcion'];
    if (! (empty($nombre) || empty($id))) {
        $consulta = "UPDATE Tareas SET Nombre='$nombre', Descripcion='$descripcion' WHERE ID=$id";
        $resultado = mysqli_query($conexion, $consulta);

        if (! $resultado) die('La ejecución de la consulta ha fallado.');
        echo 'Tarea editada exitosamente.';
    }
    else echo 'Dame datos';

?>
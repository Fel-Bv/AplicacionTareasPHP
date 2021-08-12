<?php

    include('bd.php');

    $nombre = $_POST['nombre'];
    $descripcion = $_POST['descripcion'];
    if (! empty($nombre)) {
        $consulta = "INSERT INTO Tareas(Nombre, Descripcion) VALUES ('$nombre', '$descripcion')";
        $resultado = mysqli_query($conexion, $consulta);

        if (! $resultado) die('La ejecución de la consulta ha fallado.');
        echo 'Tarea agregada exitosamente.';
    }
    else echo 'Dame datos';

?>
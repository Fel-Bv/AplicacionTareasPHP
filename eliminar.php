<?php

    include('bd.php');

    $id = $_POST['id'];
    if (! empty($id)) {
        $consulta = "DELETE FROM Tareas WHERE ID=$id";
        $resultado = mysqli_query($conexion, $consulta);

        if (! $resultado) die('La ejecución de la consulta ha fallado.');
        echo 'Tarea eliminada exitosamente.';
    }
    else echo 'Dame datos';

?>
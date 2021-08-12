import listar_tareas from './listar.js';

$(() => {
    $(document).on('click', '.eliminar-tarea', function() {
        const $registro = $(this)[0].parentElement.parentElement;
        const id = $($registro).attr('id-tarea');

        if (confirm(`¿Estas seguro de eliminar el registro ${id}?`)) {
            $.post(
                'eliminar.php',
                {id},
                respuesta => {
                    console.info(respuesta);

                    listar_tareas();
                }
            )
        }
    });
});
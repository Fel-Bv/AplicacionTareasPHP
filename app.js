import agregar_tarea from './agregar.js';
import listar_tareas from './listar.js';
import editar_tarea from './editar.js';

$(() => {
    console.debug('\njQuery está funcionando.\n\n');

    const $formulario = $('#formulario-tarea');

    $('#resultado-busqueda').hide();
    listar_tareas();
    $('#nombre').focus();

    $formulario.submit(evento => {
        evento.preventDefault();

        if (editando_tarea) editar_tarea();
        else agregar_tarea();

        $('#nombre').focus();
    });
});
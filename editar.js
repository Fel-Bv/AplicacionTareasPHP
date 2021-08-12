import Formulario from './formulario.js';

let $formulario;
let $enviar;
let $id;
let $nombre;
let $descripcion;

export default function editar_tarea() {
    const id = $id.val();
    const nombre = $nombre.val();
    const descripcion = $descripcion.val();
    const datos_post = {
        id,
        nombre,
        descripcion
    }

    if (! nombre) return;

    $formulario.enviar('editar.php', datos_post);
}

$(() => {
    $formulario = new Formulario('formulario-tarea');
    $enviar = $('#formulario-tarea button[type="submit"]')[0];
    $id = $('#id-tarea');
    $nombre = $('#nombre');
    $descripcion = $('#descripcion');

    $(document).on('click', '.item-tarea', function() {
        const $registro = $(this)[0].parentElement.parentElement;
        const id = $($registro).attr('id-tarea');

        $.post(
            'obtener-tarea.php',
            {id},
            respuesta => {
                const tarea = JSON.parse(respuesta);

                editando_tarea = true;
                console.info(`Editando tarea ${tarea.ID}.`);
                console.table(tarea);

                $id.val(tarea.ID);
                $nombre.val(tarea.nombre);
                $descripcion.val(tarea.descripcion);
                $enviar.innerText = 'EDITAR TAREA';

                $nombre.focus();
            }
        );
    });
});
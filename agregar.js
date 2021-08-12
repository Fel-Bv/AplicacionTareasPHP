import Formulario from './formulario.js';

let $formulario;
let $nombre;
let $descripcion;

export default function agregar_tarea() {
    const nombre = $nombre.val();
    const descripcion = $descripcion.val();
    const datos_post = {
        nombre,
        descripcion,
    }

    if (! nombre) return;

    $formulario.enviar('agregar.php', datos_post)
}

$(() => {
    $formulario = new Formulario('formulario-tarea');
    $nombre = $("#nombre");
    $descripcion = $("#descripcion");
});
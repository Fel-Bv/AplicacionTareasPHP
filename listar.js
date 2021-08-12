export default function listar_tareas() {
    const $tareas = $('#tareas');

    $.ajax({
        url: 'listar.php',
        type: 'GET',
        success: respuesta => {
            const tareas = JSON.parse(respuesta);
            let $tareas_html = '';

            tareas.forEach(tarea => {
                $tareas_html += `
                <tr id-tarea=${tarea.ID}>
                    <td>${tarea.ID}</td>
                    <td>
                        <a href="#" class="item-tarea">${tarea.nombre}</a>
                    </td>
                    <td>${tarea.descripcion}</td>
                    <td>
                        <button class="eliminar-tarea btn btn-danger">
                            ELIMINAR
                        </button>
                    </td>
                </tr>
                `;
            });

            $tareas.html($tareas_html);
        }
    })
}
$(() => {
    const $resultados_busqueda_contenedor = $('#resultado-busqueda-contenedor');
    const $resultados_busqueda = $('#resultado-busqueda');
    const $busqueda = $('#busqueda');
    $busqueda.keyup(() => {
        const busqueda = $busqueda.val();

        if (! busqueda) {
            $resultados_busqueda_contenedor.html('');
            $resultados_busqueda.hide();

            return;
        }

        $.ajax({
            url: 'buscar.php',
            type: 'POST',
            data: { busqueda },
            success: respuesta => {
                const tareas = JSON.parse(respuesta);
                let $tareas = '';
                tareas.forEach(tarea => {
                    $tareas += `
                        <li>
                            ${tarea.nombre}
                        </li>
                    `;
                });

                $resultados_busqueda_contenedor.html($tareas);
                $resultados_busqueda.show();
            },
        });
    });
});
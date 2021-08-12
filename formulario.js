import listar_tareas from "./listar.js";

export default class Formulario {
    constructor(id_formulario) {
        this.__formulario = $('#' + String(id_formulario));
    }

    enviar(url, datos) {
        console.info('Enviando formulario. ' + url);

        $.post(
            url,
            datos,
            respuesta_peticion => {
                listar_tareas();
                this.__formulario.trigger('reset');

                console.info(respuesta_peticion);
            }
        );
    }
}
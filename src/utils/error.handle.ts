import { Response } from "express";

const handleHttp = (res: Response, error: string, errorRaw?: any) => {
    console.error(errorRaw); 

    // Mapear errores conocidos a códigos de estado HTTP adecuados
    let statusCode = 500;
    switch (error) {
        case 'ERROR_GET_TASKS':
        case 'ERROR_GET_TASK':
        case 'ERROR_UPDATE_TASK':
        case 'ERROR_POST_TASK':
        case 'ERROR_DELETE_TASK':
            statusCode = 400; // Bad Request
            break;
        // Añadir más casos según sea necesario
    }

    // Proporcionar mensajes de error más descriptivos
    const errorMessage = getErrorMessage(error);

    // Enviar la respuesta con el código de estado y el mensaje de error
    res.status(statusCode).send({ error: errorMessage });
};

const getErrorMessage = (error: string): string => {
    switch (error) {
        case 'ERROR_GET_TASKS':
            return 'Error al obtener las tareas.';
        case 'ERROR_GET_TASK':
            return 'Error al obtener la tarea.';
        case 'ERROR_UPDATE_TASK':
            return 'Error al actualizar la tarea.';
        case 'ERROR_POST_TASK':
            return 'Error al crear una nueva tarea.';
        case 'ERROR_DELETE_TASK':
            return 'Error al eliminar la tarea.';
        default:
            return 'Error interno del servidor.';
    }
};

export { handleHttp };

# Servicio de API

Este proyecto es una API para la gestión de tareas, puedes agregar una descripción a las tareas y el estado en el que se encuentran.

## Referencia de la API

Para probar la API ---> `http://13.39.112.125/tasks` 

| Método | URL | Descripción |
| ------ | --- | ----------- |
| GET    | /tasks | Debería devolver todas las tareas |
| GET    | /tasks/1 | Debería devolver una sola tarea con el `id=1` |
| POST   | /tasks | Debería crear una nueva tarea |
| PUT    | /tasks/1 | Debería actualizar la información de la tarea con el `id=1` |
| DELETE | /tasks/1 | Debería eliminar la tarea con el `id=1` |


### Pre-requisitos


- [Node.js](https://nodejs.org/)
- [MongoDB](https://www.mongodb.com/)

## Ejecución
```bash
  npm run start
```
    
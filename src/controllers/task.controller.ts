import { Request, Response, request, } from 'express'
import { handleHttp } from '../utils/error.handle'
import { insertTask, showTasks, showTask, modifyTask, hideTask } from '../services/task.service'


const getTasks = async (req: Request, res: Response) => {
    try{
        const response = await showTasks()
        res.send(response)
    }catch (e) {
        handleHttp( res, 'ERROR_GET_TASKS', )
    }
}

const getTask = async ({params}: Request, res: Response) => {
    try{
        const {id} = params
        const response = await showTask(id)
        const data = response ? response : 'NOT_FOUND'
        res.send(data)
    }catch (e) {
        handleHttp( res, 'ERROR_GET_TASK' )
    }
}

const updateTask = async ({params, body}: Request, res: Response) => {
    try{
        const {id} = params
        const response = await modifyTask(id, body)
        res.send(response)
    }catch (e) {
        handleHttp( res, 'ERROR_UPDATE_TASK' )
    }
}

const postTask = async (req: Request, res: Response) => {
    try{
        const responseTask = await insertTask(req.body)
        res.send(responseTask)
    }catch (e) {
        handleHttp( res, 'ERROR_POST_TASK', e )
    }
}

const deleteTask = async ({params}: Request, res: Response) => {
    try{
        const {id} = params
        const response = await hideTask(id)
        res.send(response)
    }catch (e) {
        handleHttp( res, 'ERROR_DELETE_TASK' )
    }
}

export { getTasks, getTask, updateTask, postTask, deleteTask }
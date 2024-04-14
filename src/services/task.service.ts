import { Task } from "../interfaces/task.interface"
import TaskModel from "../models/task.model"

const insertTask = async ( task:Task ) => {
    try{
        const responseInsert = await TaskModel.create(task)
        return responseInsert
    }catch (error){
        throw error
    }
}

const showTasks = async () => {
    const responseTask = await TaskModel.find({})
    return responseTask
}

const showTask = async (id: string) =>{
    const responseTask = await TaskModel.findOne({ _id: id })
    return responseTask
}

const modifyTask = async (id: string, data: Task) =>{
    const responseTask = await TaskModel.findOneAndUpdate({ _id: id }, data, {
        new:true
    })
    return responseTask
}

const hideTask = async (id:string) =>{
    const responseTask = await TaskModel.deleteOne({ _id: id })
    return responseTask
}

export { insertTask, showTasks, showTask, modifyTask, hideTask }


import { Schema, Types, model, Model } from "mongoose";
import { Task } from "../interfaces/task.interface";

const TaskSchema = new Schema<Task>(
    {
        title: {
            type: String,
            required: true
        },
       description: {
            type: String,
        },
        status: {
            type: String,
            enum: ['pending', 'in progress', 'done'],
            required: true
        }
    },
    {
        timestamps: true,
        versionKey: false
    }

)

const TaskModel = model('task-list', TaskSchema)
export default TaskModel
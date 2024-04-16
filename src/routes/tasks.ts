import { Router } from 'express'
import { getAllTasks, getOneTask, updateOneTask, createNewTask, deleteOneTask } from '../controllers/task.controller';


const router = Router();


router.get('/', getAllTasks)
router.get('/:id', getOneTask)
router.put('/:id', updateOneTask)
router.post('/', createNewTask)
router.delete('/:id', deleteOneTask)

export { router }
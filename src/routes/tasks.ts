import { Request, Response, Router } from 'express'
import { getAllTasks, getOneTask, updateOneTask, createNewTask, deleteOneTask } from '../controllers/task.controller';
import { logMiddleware } from '../middleware/log';

const router = Router();


router.get('/', getAllTasks)
router.get('/:id', getOneTask, logMiddleware)
router.put('/:id', updateOneTask)
router.post('/', createNewTask)
router.delete('/:id', deleteOneTask)

export { router }
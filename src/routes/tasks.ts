import { Request, Response, Router } from 'express'
import { getTasks, getTask, updateTask, postTask, deleteTask } from '../controllers/task.controller';
import { logMiddleware } from '../middleware/log';

const router = Router();


router.get('/', getTasks)
router.get('/:id', getTask, logMiddleware)
router.put('/:id', updateTask)
router.post('/', postTask)
router.delete('/:id', deleteTask)

export { router }
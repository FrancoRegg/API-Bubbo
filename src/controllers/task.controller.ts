import { Request, Response } from 'express';
import { handleHttp } from '../utils/error.handle';
import { insertTask, showTasks, showTask, modifyTask, hideTask } from '../services/task.service';



const getAllTasks = async (req: Request, res: Response) => {
  try {
    const response = await showTasks();
    res.send(response)
  } catch (e) {
    //handleHttp(res, 'ERROR_GET_TASKS', e);

  }
};

const getOneTask = async ({ params }: Request, res: Response) => {
  try {
    const { id } = params;
    const response = await showTask(id);
    //const data = response ? response : 'NOT_FOUND';
    res.send(response);
  } catch (e) {
    //handleHttp(res, 'ERROR_GET_TASK', e);
  }
};

const updateOneTask = async ({ params, body }: Request, res: Response) => {
  try {
    const { id } = params;
    const response = await modifyTask(id, body);
    res.send(response);
  } catch (e) {
    //handleHttp(res, 'ERROR_UPDATE_TASK', e);
  }
};

const createNewTask = async (req: Request, res: Response) => {
  try {
    const responseTask = await insertTask(req.body);
    res.send(responseTask);
  } catch (e) {
    handleHttp(res, 'ERROR_POST_TASK', e);
  }
};

const deleteOneTask = async ({ params }: Request, res: Response) => {
  try {
    const { id } = params;
    const response = await hideTask(id);
    res.send(response);
  } catch (e) {
    //handleHttp(res, 'ERROR_DELETE_TASK', e);
  }
};


export { getAllTasks, getOneTask, updateOneTask, createNewTask, deleteOneTask };

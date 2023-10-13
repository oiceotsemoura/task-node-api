import express, { Application, Request, Response } from 'express';
import * as TasksService from '@service/TasksServices';
import { IRequestBody } from '@interfaces/Http';
import { ITask } from '@model/TasksModel';
const router = express.Router();

router.post('/tasks', async (req: IRequestBody<{ task: ITask }>, res: Response): Promise<Response> => {
  try {
    const { task } = req.body;
    await TasksService.createTask(task);
    return res.status(201).send({ data: task });
  } catch (err) {
    return res.status(500).send({ err });
  }
});

router.get('/tasks', async (req: Request, res: Response): Promise<Response> => {
  try {
    const tasks = await TasksService.listTasks();
    return res.status(200).send({ data: tasks });
  } catch (err) {
    return res.status(500).send({ err });
  }
});

router.get('/tasks/:id', async (req: Request, res: Response): Promise<Response> => {
  try {
    const { id } = req.params;
    const task = await TasksService.listTask(id);
    return res.status(200).send({ data: task });
  } catch (err) {
    return res.status(500).send({ err });
  }
});

router.put('/tasks', async (req: IRequestBody<{ task: ITask }>, res: Response): Promise<Response> => {
  try {
    const { task } = req.body;
    const newTask = await TasksService.updateTask(task);
    return res.status(200).send({ data: newTask });
  } catch (err) {
    return res.status(500).send({ err });
  }
});

router.delete('/tasks:/id', async (req: Request, res: Response): Promise<Response> => {
  try {
    const { id } = req.params;
    await TasksService.deleteTask(id);
    return res.status(200).send();
  } catch (err) {
    return res.status(500).send({ err });
  }
});

export default router;

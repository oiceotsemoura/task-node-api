import { ITask } from '@model/TasksModel';
import { newId } from '@utils/uuid';
import * as TasksRepository from '@repository/TasksRepository';

export const createTask = async (task: Omit<ITask, 'id'>) => {
  const newTask = { ...task, id: newId() };
  const taskCreated = await TasksRepository.createTask(newTask);
  return taskCreated;
};

export const listTasks = async () => {
  return await TasksRepository.findAllTasks();
};

export const listTask = async (id: string) => {
  return await TasksRepository.findTask(id);
};

export const updateTask = async (newTask: ITask) => {
  return await TasksRepository.updateTask(newTask);
};

export const deleteTask = async (id: string) => {
  return await TasksRepository.deleteTask(id);
};

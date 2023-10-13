import { ITask } from '@model/TasksModel';
let tasks: ITask[] = [];

export const createTask = (task: ITask) => {
  return new Promise((resolve) => {
    tasks = [...tasks, task];
    resolve(task);
  });
};

export const findTask = (id: string) => {
  return new Promise((resolve, reject) => {
    const task = tasks.find((task) => task.id === id);

    return task ? resolve(task) : reject('Not found');
  });
};

export const findAllTasks = () => {
  return new Promise((resolve) => {
    resolve(tasks);
  });
};

export const updateTask = (newTask: ITask) => {
  return new Promise((resolve, reject) => {
    const taskIndex = tasks.findIndex((task) => task.id === newTask.id);
    tasks[taskIndex] = newTask;

    taskIndex ? resolve(newTask) : reject('Not found');
  });
};

export const deleteTask = (id: string) => {
  return new Promise((resolve, reject) => {
    const found = tasks.find((task) => task.id === id);
    if (found) {
      tasks = tasks.filter((task) => task.id !== id);
      resolve(true);
      return;
    }
    reject('Not found');
  });
};

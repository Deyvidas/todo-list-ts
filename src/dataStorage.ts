import { SubTaskModel } from './models/SubTaskModel';
import { TaskModel } from './models/TaskModel';
import { TasksStorageModel } from './models/TasksListModel';

let task1 = new TaskModel('Films to watch');
task1.bulkCreateSubTasks([
    new SubTaskModel('Terminator', true),
    new SubTaskModel('XXX', false),
    new SubTaskModel('Gentlemen\'s of fortune', true), //prettier-ignore
]);

let task2 = new TaskModel('To practice');
task2.bulkCreateSubTasks([
    new SubTaskModel('TypeScript', true),
    new SubTaskModel('HTML', true),
    new SubTaskModel('React', false),
    new SubTaskModel('Python', true),
    new SubTaskModel('Redux', false),
]);

let task3 = new TaskModel('Task 1');
task3.bulkCreateSubTasks([
    new SubTaskModel('task1.1', true),
    new SubTaskModel('task1.2', true),
    new SubTaskModel('task1.3', false),
    new SubTaskModel('task1.4', true),
    new SubTaskModel('task1.5', false),
]);

let task4 = new TaskModel('Task 2');
task4.bulkCreateSubTasks([
    new SubTaskModel('task2.1', true),
    new SubTaskModel('task2.2', false),
    new SubTaskModel('task2.3', true),
]);

const tasksTodo: TasksStorageModel = new TasksStorageModel();
tasksTodo.bulkCreateTask([task1, task2, task3, task4]);

export { tasksTodo };

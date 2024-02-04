import SubTaskModel from './models/SubTaskModel';
import TaskModel from './models/TaskModel';
import TasksListModel from './models/TasksListModel';

let task1 = new TaskModel('Films to watch');
task1.createSubTask(new SubTaskModel('Terminator', true));
task1.createSubTask(new SubTaskModel('XXX', false));
task1.createSubTask(new SubTaskModel('Gentlemen\'s of fortune', true)); // prettier-ignore

let task2 = new TaskModel('To practice');
task2.bulkCreateSubTasks([
    new SubTaskModel('TypeScript', true),
    new SubTaskModel('HTML', true),
    new SubTaskModel('React', false),
    new SubTaskModel('Python', true),
    new SubTaskModel('Redux', false),
]);

let task3 = new TaskModel('To practice');
task3.bulkCreateSubTasks([
    new SubTaskModel('TypeScript', true),
    new SubTaskModel('HTML', true),
    new SubTaskModel('React', false),
    new SubTaskModel('Python', true),
    new SubTaskModel('Redux', false),
]);

let task4 = new TaskModel('Films to watch');
task4.bulkCreateSubTasks([
    new SubTaskModel('Terminator', true),
    new SubTaskModel('XXX', false),
    new SubTaskModel("Gentlemen's of fortune", true),
]);

export const tasksTodo2: TasksListModel = new TasksListModel([]);

export const tasksTodo: TasksListModel = new TasksListModel([task1, task2, task4, task3]);

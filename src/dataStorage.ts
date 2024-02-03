import SubTaskModel from "./models/SubTaskModel";
import TaskModel from "./models/TaskModel";
import TasksListModel from "./models/TasksListModel";

let task1 = new TaskModel(1, "Films to watch");
task1.addSubTask(new SubTaskModel(1, "Terminator", true, task1));
task1.addSubTask(new SubTaskModel(2, "XXX", false, task1));
task1.addSubTask(new SubTaskModel(3, "Gentlemen's of fortune", true, task1));

let task2 = new TaskModel(2, "To practice");
task2.addManySubTasks([
    new SubTaskModel(1, "TypeScript", true, task2),
    new SubTaskModel(2, "HTML", true, task2),
    new SubTaskModel(3, "React", false, task2),
    new SubTaskModel(4, "Python", true, task2),
    new SubTaskModel(5, "Redux", false, task2),
]);

let task3 = new TaskModel(3, "To practice");
task3.addManySubTasks([
    new SubTaskModel(1, "TypeScript", true, task3),
    new SubTaskModel(2, "HTML", true, task3),
    new SubTaskModel(3, "React", false, task3),
    new SubTaskModel(4, "Python", true, task3),
    new SubTaskModel(5, "Redux", false, task3),
]);

export const tasksTodo2: TasksListModel = new TasksListModel([]);

export const tasksTodo: TasksListModel = new TasksListModel([task1, task2, task3]);

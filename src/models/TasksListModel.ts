import TaskModel from "./TaskModel";

export default class TasksListModel {
    tasks: Array<TaskModel>;

    constructor(tasks: Array<TaskModel>) {
        this.tasks = tasks;
    }
}

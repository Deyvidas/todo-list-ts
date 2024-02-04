import BaseModel from "./BaseModels";
import TaskModel from "./TaskModel";

export default class TasksListModel extends BaseModel {
    tasks: Array<TaskModel>;

    constructor(tasks: Array<TaskModel>) {
        super();
        this.tasks = tasks;
    }
}

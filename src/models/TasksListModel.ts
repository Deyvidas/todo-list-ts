import BaseModel from './BaseModels';
import TaskModel from './TaskModel';

export default class TasksStorageModel extends BaseModel {
    tasks: Array<TaskModel>;

    constructor() {
        super();
        this.tasks = [];
    }

    /**
     * Adds the passed instance of TaskModel to the end of tasks array.
     * @param task An instance that must be added to the tasks array.
     */
    createTask(task: TaskModel) {
        this.tasks.push(task);
    }

    /**
     * Extends the tasks array with the passed array of TaskModel.
     * @param tasks An array of TaskModel instances that need to be added to the tasks array.
     */
    bulkCreateTask(tasks: Array<TaskModel>) {
        tasks.forEach((t) => this.createTask(t));
    }
}

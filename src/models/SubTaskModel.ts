import TaskModel from "./TaskModel";

export default class SubTaskModel {
    id: number;
    title: string;
    isDone: boolean;
    owner: TaskModel;

    constructor(id: number, title: string, isDone: boolean, owner: TaskModel) {
        this.id = id;
        this.title = title;
        this.isDone = isDone;
        this.owner = owner;
    }

    deleteThis() {
        this.owner.deleteSubTask(this.id);
    }
}

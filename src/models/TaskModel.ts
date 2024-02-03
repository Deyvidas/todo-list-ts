import SubTaskModel from "./SubTaskModel";

export default class TaskModel {
    id: number;
    cardTitle: string;
    subTasks: Array<SubTaskModel>;

    constructor(id: number, cardTitle: string) {
        this.id = id;
        this.cardTitle = cardTitle;
        this.subTasks = [];
    }

    addSubTask(subTask: SubTaskModel) {
        this.subTasks.push(subTask);
    }

    addManySubTasks(subTasks: Array<SubTaskModel>) {
        this.subTasks.push(...subTasks);
    }

    getSubTasksWithStatus(isDone: boolean): Array<SubTaskModel> {
        return this.subTasks.filter((t) => t.isDone === isDone);
    }

    deleteSubTask(id: number) {
        this.subTasks = this.subTasks.filter((t) => t.id !== id);
    }
}

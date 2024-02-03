import { v4 } from "uuid";
import SubTaskModel from "./SubTaskModel";

export default class TaskModel {
    id: string;
    cardTitle: string;
    subTasks: Array<SubTaskModel>;

    constructor(cardTitle: string) {
        this.id = v4();
        this.cardTitle = cardTitle;
        this.subTasks = [];
    }

    createSubTask(subTask: SubTaskModel) {
        this.subTasks.push(subTask);
    }

    bulkCreateSubTasks(subTasks: Array<SubTaskModel>) {
        this.subTasks.push(...subTasks);
    }

    filterSubTasks(isDone: boolean): Array<SubTaskModel> {
        return this.subTasks.filter((t) => t.isDone === isDone);
    }

    deleteSubTask(id: string) {
        this.subTasks = this.subTasks.filter((t) => t.id !== id);
    }
}

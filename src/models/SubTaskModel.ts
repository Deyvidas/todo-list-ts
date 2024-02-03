import { v4 } from "uuid";

export default class SubTaskModel {
    id: string;
    title: string;
    isDone: boolean;

    constructor(title: string, isDone: boolean = false) {
        this.id = v4();
        this.title = title;
        this.isDone = isDone;
    }

    changeStatus() {
        // XXX IS IT REQUIRED???
        this.isDone = !this.isDone;
    }
}

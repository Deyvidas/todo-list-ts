import { BaseTaskModel } from './BaseModels';

class SubTaskModel extends BaseTaskModel {
    isDone: boolean;

    constructor(title: string, isDone: boolean = false) {
        super(title);
        this.isDone = isDone;
    }

    switchStatus() {
        this.isDone = !this.isDone;
    }
}

export { SubTaskModel };

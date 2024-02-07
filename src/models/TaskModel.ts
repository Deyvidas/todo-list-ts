import { BaseTaskModel } from './BaseModels';
import { SubTaskModel } from './SubTaskModel';

class TaskModel extends BaseTaskModel {
    subTasks: Array<SubTaskModel>;

    constructor(title: string) {
        super(title);
        this.subTasks = [];
    }

    /**
     * Adds the passed instance of SubTaskModel to the end of subTasks array.
     * @param subTask An instance that must be added to the subTasks array.
     */
    createSubTask(subTask: SubTaskModel) {
        this.subTasks.push(subTask);
    }

    /**
     * Extends the subTasks array with the passed array of SubTaskModel.
     * @param subTasks An array of SubTaskModel instances that need to be added to the subTasks array.
     */
    bulkCreateSubTasks(subTasks: Array<SubTaskModel>) {
        subTasks.forEach((t) => this.createSubTask(t));
    }

    /**
     * Returns the new array that contains all subtask's that have the same isDone property
     * value as the passed one.
     * @param isDone The status of subTask's that must contain the final array.
     */
    filterSubTasks(isDone: boolean): Array<SubTaskModel> {
        return this.subTasks.filter((t) => t.isDone === isDone);
    }

    /**
     * Delete the subtask that has the same id property value as the passed one from
     * original subTasks array.
     * @param id The uuid4 string of the SubTaskModel that must be deleted from the subTasks array.
     */
    deleteSubTask(id: string) {
        this.subTasks = this.subTasks.filter((t) => t.id !== id);
    }
}

export { TaskModel };

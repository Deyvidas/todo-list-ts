import { SubTaskModel } from '../models/SubTaskModel';
import { TaskItemTitle } from './TaskItemTitle';
import { TaskItemTitlePropsType } from './TaskItemTitle';

type SubTasksContainerPropsType = {
    subTasks: Array<SubTaskModel>;
    onClickCheckbox: (subTask: SubTaskModel) => void;
    onClickButton: (subTask: SubTaskModel) => void;
};

function SubTasksContainer(props: SubTasksContainerPropsType) {
    if (props.subTasks.length === 0) {
        return <></>;
    }

    function getSubTaskElement(subTask: SubTaskModel) {
        const TaskItemTitleProps: TaskItemTitlePropsType = {
            subTask: subTask,
            onClickCheckbox: props.onClickCheckbox,
            onClickButton: props.onClickButton,
        };

        return <TaskItemTitle key={subTask.id} {...TaskItemTitleProps} />;
    }

    return <>{props.subTasks.map(getSubTaskElement)}</>;
}

export { type SubTasksContainerPropsType, SubTasksContainer };

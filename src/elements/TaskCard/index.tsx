import { useState } from 'react';

import { ButtonsGroup } from '../ButtonsGroup';
import { ButtonsGroupPropsType } from '../ButtonsGroup';
import { ButtonType } from '../ButtonsGroup';
import { InputWithAddBtn } from '../InputWitAddBtn';
import { InputWithAddBtnPropsType } from '../InputWitAddBtn';
import { SubTaskModel } from '../../models/SubTaskModel';
import { SubTasksContainer } from '../SubTasksContainer';
import { SubTasksContainerPropsType } from '../SubTasksContainer';
import { TaskListTitle } from '../TaskListTitle';
import { TaskListTitlePropsType } from '../TaskListTitle';
import { TaskModel } from '../../models/TaskModel';

import styles from './styles.module.css';

const defaultCssClass = 'block';
type TaskCardPropsType = {
    task: TaskModel;
    onClickDeleteCard: (task: TaskModel) => void;
};

function TaskCard(props: TaskCardPropsType) {
    const [subTasks, setSubTasks] = useState<Array<SubTaskModel>>(props.task.subTasks);

    function addNewSubtask(title: string) {
        props.task.createSubTask(new SubTaskModel(title));
        setSubTasks([...props.task.subTasks]);
    }

    function onClickCheckbox(subTask: SubTaskModel) {
        subTask.switchStatus(); // Changing an object attribute in an array is not the same as changing the array. React does not see the change.
        setSubTasks([...props.task.subTasks]);
    }

    function onClickDelete(subTask: SubTaskModel) {
        props.task.deleteSubTask(subTask.id);
        setSubTasks(props.task.subTasks);
    }

    function onClickFilter(buttonText: ButtonType) {
        let subTasksToShow: Array<SubTaskModel>;
        switch (buttonText) {
            case 'All':
                subTasksToShow = props.task.subTasks;
                break;
            case 'Active':
                subTasksToShow = props.task.filterSubTasks(false);
                break;
            case 'Completed':
                subTasksToShow = props.task.filterSubTasks(true);
                break;
        }
        setSubTasks(subTasksToShow);
    }

    const TaskListTitleProps: TaskListTitlePropsType = {
        task: props.task,
        onClickButton: props.onClickDeleteCard,
    };
    const InputWithAddBtnProps: InputWithAddBtnPropsType = {
        placeholder: 'Enter the name of new tasks',
        addNewItem: addNewSubtask,
    };
    const SubTasksContainerProps: SubTasksContainerPropsType = {
        subTasks: subTasks,
        onClickCheckbox: onClickCheckbox,
        onClickButton: onClickDelete,
    };
    const ButtonsGroupProps: ButtonsGroupPropsType = {
        onClick: onClickFilter,
    };

    return (
        <div className={styles[defaultCssClass]}>
            <TaskListTitle {...TaskListTitleProps} />
            <InputWithAddBtn {...InputWithAddBtnProps} />
            <SubTasksContainer {...SubTasksContainerProps} />
            <ButtonsGroup {...ButtonsGroupProps} />
        </div>
    );
}

export { type TaskCardPropsType, TaskCard };

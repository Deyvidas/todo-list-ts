import React from 'react';

import { useCallback } from 'react';
import { useState } from 'react';

import ButtonsGroup from '../ButtonsGroup';
import InputWithAddBtn from '../InputWitAddBtn';
import TaskListTitle from '../TaskListTitle';

import { ButtonsGroupPropsType } from '../ButtonsGroup';
import { ButtonType } from '../ButtonsGroup';
import { InputWithAddBtnPropsType } from '../InputWitAddBtn';
import { SubTaskModel } from '../../models/SubTaskModel';
import { SubTasksContainer } from '../SubTasksContainer';
import { SubTasksContainerPropsType } from '../SubTasksContainer';
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
        addNewItem: useCallback(addNewSubtask, [props.task]),
    };
    const SubTasksContainerProps: SubTasksContainerPropsType = {
        subTasks: subTasks,
        onClickCheckbox: useCallback(onClickCheckbox, [props.task.subTasks]),
        onClickButton: useCallback(onClickDelete, [props.task]),
    };
    const ButtonsGroupProps: ButtonsGroupPropsType = {
        onClick: useCallback(onClickFilter, [props.task]),
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

export default React.memo(TaskCard);
export { type TaskCardPropsType };

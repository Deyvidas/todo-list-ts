import { ButtonHTMLAttributes } from 'react';
import { useState } from 'react';

import SubTaskModel from '../models/SubTaskModel';
import SubTasksContainer from './SubTasksContainer';
import TaskCardButtonsContainer from './TaskCardButtonsContainer';
import TaskCardInput from './TaskCardInput';
import TaskModel from '../models/TaskModel';

import { ContainerProps } from './SubTasksContainer';
import { filterType } from './TaskCardButton';
import { TaskCardButtonsProps } from './TaskCardButtonsContainer';
import { TaskInputProps } from './TaskCardInput';

export type TaskCardProps = {
    onClickDeleteTaskCard: (task: TaskModel) => void;
    task: TaskModel;
};

export default function TaskCard(props: TaskCardProps) {
    const [subTasks, setSubTasks] = useState<Array<SubTaskModel>>(props.task.subTasks);
    const [activeFilterBtn, setActiveFilterBtn] = useState<filterType>('All');

    const buttonDeleteTaskCardProps: ButtonHTMLAttributes<HTMLButtonElement> = {
        onClick: () => props.onClickDeleteTaskCard(props.task),
        className: 'delete_button',
    };

    const taskCardInputProps: TaskInputProps = {
        addNewItemFunction: addNewSubtask,
    };

    const subTasksContainerProps: ContainerProps = {
        subTasks: subTasks,
        onClickCheckbox: onClickCheckbox,
        onClickDelete: onClickDelete,
    };

    const taskCardButtonsProps: TaskCardButtonsProps = {
        activeButton: activeFilterBtn,
        onClick: onClickFilter,
    };

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

    function onClickFilter(btnText: filterType) {
        let subTasksToShow: Array<SubTaskModel>;
        switch (btnText) {
            case 'All':
                subTasksToShow = props.task.subTasks;
                setActiveFilterBtn('All');
                break;
            case 'Active':
                subTasksToShow = props.task.filterSubTasks(false);
                setActiveFilterBtn('Active');
                break;
            case 'Completed':
                subTasksToShow = props.task.filterSubTasks(true);
                setActiveFilterBtn('Completed');
                break;
        }
        setSubTasks(subTasksToShow);
    }

    return (
        <div className='task_card'>
            <div className='task_card__title'>
                <h5>{props.task.title}</h5>
                <button {...buttonDeleteTaskCardProps}>X</button>
            </div>
            <TaskCardInput {...taskCardInputProps} />
            <SubTasksContainer {...subTasksContainerProps} />
            <TaskCardButtonsContainer {...taskCardButtonsProps} />
        </div>
    );
}

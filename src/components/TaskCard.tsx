import { ChangeEvent } from 'react';
import { KeyboardEvent } from 'react';
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
import { ValidationError } from '../errors';

type TaskCardProps = {
    task: TaskModel;
};

export default function TaskCard({ task }: TaskCardProps) {
    const [subTasks, setSubTasks] = useState<Array<SubTaskModel>>(task.subTasks);
    const [taskInputValue, setTaskInputValue] = useState<string>('');
    const [activeFilterBtn, setActiveFilterBtn] = useState<filterType>('All');

    const taskCardInputProps: TaskInputProps = {
        value: taskInputValue,
        onClickBtn: onClickAddTaskButton,
        onPressEnter: onPressEnter,
        onChange: onChangeInputValue,
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

    function onClickCheckbox(subTask: SubTaskModel) {
        subTask.switchStatus(); // Changing an object attribute in an array is not the same as changing the array. React does not see the change.
        setSubTasks([...task.subTasks]);
    }

    function onClickDelete(subTask: SubTaskModel) {
        task.deleteSubTask(subTask.id);
        setSubTasks(task.subTasks);
    }

    function onClickFilter(btnText: filterType) {
        let subTasksToShow: Array<SubTaskModel>;
        switch (btnText) {
            case 'All':
                subTasksToShow = task.subTasks;
                setActiveFilterBtn('All');
                break;
            case 'Active':
                subTasksToShow = task.filterSubTasks(false);
                setActiveFilterBtn('Active');
                break;
            case 'Completed':
                subTasksToShow = task.filterSubTasks(true);
                setActiveFilterBtn('Completed');
                break;
        }
        setSubTasks(subTasksToShow);
    }

    function addNewTaskAfterEvent() {
        try {
            const newSubTask = new SubTaskModel(taskInputValue);
            task.createSubTask(newSubTask);
        } catch (e: any) {
            if (e instanceof ValidationError) {
                window.alert(e.message);
            }
        } finally {
            setTaskInputValue('');
        }
    }

    function onClickAddTaskButton() {
        addNewTaskAfterEvent();
    }

    function onPressEnter(event: KeyboardEvent<HTMLInputElement>) {
        if (event.key !== 'Enter') return;
        addNewTaskAfterEvent();
    }

    function onChangeInputValue(event: ChangeEvent<HTMLInputElement>) {
        setTaskInputValue(event.target.value);
    }

    return (
        <div className='task_card'>
            <div className='task_card__title'>
                <h5>{task.title}</h5>
                <button className='delete_button'>X</button>
            </div>
            <TaskCardInput {...taskCardInputProps} />
            <SubTasksContainer {...subTasksContainerProps} />
            <TaskCardButtonsContainer {...taskCardButtonsProps} />
        </div>
    );
}

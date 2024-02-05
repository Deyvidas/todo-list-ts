import { useState } from 'react';

import TaskCardInput from './components/TaskCardInput';
import TaskCardsContainer from './components/TaskCardsContainer';
import TaskModel from './models/TaskModel';
import TasksStorageModel from './models/TasksListModel';

import { TaskInputProps } from './components/TaskCardInput';
import { TasksContainerProps } from './components/TaskCardsContainer';

export type AppProps = {
    tasksStorage: TasksStorageModel;
};

export default function App({ tasksStorage }: AppProps) {
    const [taskCards, setTaskCards] = useState(tasksStorage.tasks);

    function onClickDeleteTaskCard(task: TaskModel) {
        tasksStorage.tasks = tasksStorage.tasks.filter((t) => t.id !== task.id);
        setTaskCards(tasksStorage.tasks);
    }

    function addNewTask(title: string) {
        tasksStorage.createTask(new TaskModel(title));
        setTaskCards([...tasksStorage.tasks]);
    }

    const tasksContainerProps: TasksContainerProps = {
        onClickDeleteTaskCard: onClickDeleteTaskCard,
        tasks: taskCards,
    };

    const taskCardInputProps: TaskInputProps = {
        className: 'task_card__input main',
        addNewItemFunction: addNewTask,
    };

    return (
        <div className='App'>
            <TaskCardInput {...taskCardInputProps} />
            <TaskCardsContainer {...tasksContainerProps} />
        </div>
    );
}

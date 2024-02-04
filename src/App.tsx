import { useState } from 'react';

import TaskCardsContainer from './components/TaskCardsContainer';
import TaskModel from './models/TaskModel';

import { tasksTodo } from './dataStorage';
import { TasksContainerProps } from './components/TaskCardsContainer';

export default function App() {
    const [taskCards, setTaskCards] = useState(tasksTodo.tasks);

    const tasksContainerProps: TasksContainerProps = {
        onClickDeleteTaskCard: onClickDeleteTaskCard,
        tasks: taskCards,
    };

    function onClickDeleteTaskCard(task: TaskModel) {
        tasksTodo.tasks = tasksTodo.tasks.filter((t) => t.id !== task.id);
        setTaskCards(tasksTodo.tasks);
    }

    return (
        <div className='App'>
            <TaskCardsContainer {...tasksContainerProps} />
        </div>
    );
}

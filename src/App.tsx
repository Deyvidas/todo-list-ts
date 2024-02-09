import { useCallback } from 'react';
import { useState } from 'react';

import InputWithAddBtn from './elements/InputWitAddBtn';

import { CardsContainer } from './elements/CardsContainer';
import { CardsContainerPropsType } from './elements/CardsContainer';
import { InputWithAddBtnPropsType } from './elements/InputWitAddBtn';
import { TaskModel } from './models/TaskModel';
import { TasksStorageModel } from './models/TasksListModel';

type AppPropsType = {
    tasksStorage: TasksStorageModel;
};

function App({ tasksStorage }: AppPropsType) {
    const [taskCards, setTaskCards] = useState(tasksStorage.tasks);

    function deleteTaskList(task: TaskModel) {
        tasksStorage.tasks = tasksStorage.tasks.filter((t) => t.id !== task.id);
        setTaskCards(tasksStorage.tasks);
    }

    function addNewTaskList(title: string) {
        tasksStorage.createTask(new TaskModel(title));
        setTaskCards([...tasksStorage.tasks]);
    }

    const InputWithAddBtnProps: InputWithAddBtnPropsType = {
        placeholder: 'Enter the name of new tasks list',
        addNewItem: useCallback(addNewTaskList, [tasksStorage]),
    };
    const CardsContainerProps: CardsContainerPropsType = {
        tasks: taskCards,
        onClickDeleteCard: useCallback(deleteTaskList, [tasksStorage]),
    };

    return (
        <div className='App'>
            <InputWithAddBtn {...InputWithAddBtnProps}></InputWithAddBtn>
            <CardsContainer {...CardsContainerProps}></CardsContainer>
        </div>
    );
}

export { type AppPropsType, App };

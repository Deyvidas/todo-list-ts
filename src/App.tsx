import { useState } from 'react';

import { CardsContainer } from './elements/CardsContainer';
import { CardsContainerPropsType } from './elements/CardsContainer';
import { InputWithAddBtn } from './elements/InputWitAddBtn';
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
        addNewItem: addNewTaskList,
    };
    const CardsContainerProps: CardsContainerPropsType = {
        tasks: taskCards,
        onClickDeleteCard: deleteTaskList,
    };

    return (
        <div className='App'>
            <InputWithAddBtn {...InputWithAddBtnProps}></InputWithAddBtn>
            <CardsContainer {...CardsContainerProps}></CardsContainer>
        </div>
    );
}

export { type AppPropsType, App };

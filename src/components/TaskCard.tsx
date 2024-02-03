import { ChangeEvent, KeyboardEvent, useState } from "react";
import SubTaskModel from "../models/SubTaskModel";
import SubTasksContainer, { ContainerProps } from "./SubTasksContainer";
import TaskCardButton from "./TaskCardButton";
import TaskCardInput, { TaskInputProps } from "./TaskCardInput";
import TaskModel from "../models/TaskModel";

type TaskCardProps = {
    task: TaskModel;
};

export default function TaskCard({ task }: TaskCardProps) {
    let [subTasks, setSubTasks] = useState<Array<SubTaskModel>>(task.subTasks);
    let [taskInputValue, setTaskInputValue] = useState<string>("");

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

    function onClickCheckbox(subTask: SubTaskModel) {
        // TODO ON CLICK CHECKBOX MAKE DOUBLE CHANGE...
        subTask.changeStatus();
        setSubTasks(task.subTasks);
    }

    function onClickDelete(subTask: SubTaskModel) {
        task.deleteSubTask(subTask.id);
        setSubTasks(task.subTasks);
    }

    function onClickFilter(isDone?: boolean) {
        if (isDone === undefined) {
            setSubTasks(task.subTasks);
        } else {
            let filteredSubTasks = task.filterSubTasks(isDone);
            setSubTasks(filteredSubTasks);
        }
    }

    function addNewTaskAfterEvent() {
        const newSubTask = new SubTaskModel(taskInputValue);
        task.createSubTask(newSubTask);
        setTaskInputValue("");
    }

    function onClickAddTaskButton() {
        addNewTaskAfterEvent();
    }

    function onPressEnter(event: KeyboardEvent<HTMLInputElement>) {
        if (event.key !== "Enter") return;
        addNewTaskAfterEvent();
    }

    function onChangeInputValue(event: ChangeEvent<HTMLInputElement>) {
        setTaskInputValue(event.target.value);
    }

    return (
        //prettier-ignore
        <td>
            <div className="task_card">
                <h5 className="task_card__title">{task.cardTitle}</h5>
                <TaskCardInput {...taskCardInputProps} />
                <SubTasksContainer {...subTasksContainerProps}/>
                <div className="task_card__buttons">
                    <TaskCardButton onClick={() => onClickFilter()} text={"All"} />
                    <TaskCardButton onClick={() => onClickFilter(false)} text={"Active"} />
                    <TaskCardButton onClick={() => onClickFilter(true)} text={"Completed"} />
                </div>
            </div>
        </td>
    );
}

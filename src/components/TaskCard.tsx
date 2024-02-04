import { ChangeEvent, KeyboardEvent, useState } from "react";
import SubTaskModel from "../models/SubTaskModel";
import SubTasksContainer, { ContainerProps } from "./SubTasksContainer";
import TaskCardButton from "./TaskCardButton";
import TaskCardInput, { TaskInputProps } from "./TaskCardInput";
import TaskModel from "../models/TaskModel";
import { ValidationError } from "../errors";

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
        subTask.switchStatus(); // Changing an object attribute in an array is not the same as changing the array. React does not see the change.
        setSubTasks([...task.subTasks]);
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
        try {
            const newSubTask = new SubTaskModel(taskInputValue);
            task.createSubTask(newSubTask);
        } catch (e: any) {
            if (e instanceof ValidationError) {
                window.alert(e.message);
            }
        } finally {
            setTaskInputValue("");
        }
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
                <h5 className="task_card__title">{task.title}</h5>
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

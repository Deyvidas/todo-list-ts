import SubTasksContainer from "./SubTasksContainer";
import TaskModel from "../models/TaskModel";
import TaskCardButton from "./TaskCardButton";
import TaskCardInput from "./TaskCardInput";
import { useState } from "react";
import SubTaskModel from "../models/SubTaskModel";

type TaskCardProps = {
    task: TaskModel;
};

export default function TaskCard({ task }: TaskCardProps) {
    let [subTasks, setSubTasks] = useState<Array<SubTaskModel>>(task.subTasks);

    function onClick(isDone?: boolean) {
        if (isDone === undefined) {
            setSubTasks(task.subTasks);
        } else {
            let filteredSubTasks = task.getSubTasksWithStatus(isDone);
            setSubTasks(filteredSubTasks);
        }
    }

    return (
        <td>
            <div className="task_card">
                <h5 className="task_card__title">{task.cardTitle}</h5>
                <TaskCardInput />
                <SubTasksContainer subTasks={subTasks} setSubTasks={setSubTasks} />
                <div className="task_card__buttons">
                    <TaskCardButton onClick={() => onClick()} text={"All"} />
                    <TaskCardButton onClick={() => onClick(false)} text={"Active"} />
                    <TaskCardButton onClick={() => onClick(true)} text={"Completed"} />
                </div>
            </div>
        </td>
    );
}

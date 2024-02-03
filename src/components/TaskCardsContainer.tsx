import { ReactElement } from "react";
import TaskModel from "../models/TaskModel";
import TaskCard from "./TaskCard";
import TasksListModel from "../models/TasksListModel";

type T = ReactElement<HTMLTableRowElement>;

export default function TaskCardsContainer({ tasks }: TasksListModel) {
    if (tasks.length === 0) return <></>;

    return (
        <table className="tasks_cards">
            <tbody>
                <>{[...renderRowsWithTasks(tasks)]}</>
            </tbody>
        </table>
    );
}

function* renderRowsWithTasks(tasks: Array<TaskModel>): Generator<T> {
    let row: Array<JSX.Element> = [<TaskCard key={tasks[0].id} task={tasks[0]} />];
    let trAttrs = { key: 1 };

    for (let i = 1; i < tasks.length; i++) {
        const element = <TaskCard key={tasks[i].id} task={tasks[i]} />;
        if (i % 3 === 0) {
            yield <tr {...trAttrs}>{row}</tr>;
            trAttrs.key++;
            row = [element];
        } else {
            row.push(element);
        }
    }
    yield <tr {...trAttrs}>{row}</tr>;
    trAttrs.key++;
}

import { ReactElement } from "react";
import { TodoCardType, TodoTaskType, TodoTasksType } from "./dataStorage";

type T = ReactElement<HTMLTableRowElement>;

function* renderTodoCards(cards: Array<TodoCardType>): Generator<T> {
    let row: Array<JSX.Element> = [<TodoCard key={cards[0].id} {...cards[0]} />];
    let trAttrs = { key: 1 };

    for (let i = 1; i < cards.length; i++) {
        const element = <TodoCard key={cards[i].id} {...cards[i]} />;
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

export function TodoCards({ tasks }: TodoTasksType) {
    if (tasks.length === 0) return <></>;

    return (
        <table className="todo_cards">
            <tbody>
                <>{[...renderTodoCards(tasks)]}</>
            </tbody>
        </table>
    );
}

function renderTodoTasks(tasks: Array<TodoTaskType>): ReactElement<HTMLUListElement> {
    if (tasks.length === 0) return <></>;

    return (
        <ul className="todo_card__tasks">
            {tasks.map((task) => {
                return <TodoCardTasks key={task.id} {...task} />;
            })}
        </ul>
    );
}

function TodoCard({ cardTitle, tasks }: TodoCardType) {
    return (
        <td>
            <div className="todo_card">
                <h5 className="todo_card__title">{cardTitle}</h5>
                <TodoCardInput />
                {renderTodoTasks(tasks)}
                <hr />
                <div className="todo_card__buttons">
                    <TodoCardButton text={"All"} />
                    <TodoCardButton text={"Active"} />
                    <TodoCardButton text={"Completed"} />
                </div>
            </div>
        </td>
    );
}

function TodoCardInput() {
    return (
        <div className="todo_card__input">
            <input type="text" style={{ paddingInline: "10px" }} />
            <button>+</button>
        </div>
    );
}

function TodoCardTasks({ title, isDone }: TodoTaskType) {
    return (
        <li className="todo_card__task">
            <input type="checkbox" checked={isDone} readOnly />
            <span className="todo_card__task_sep"></span>
            <span>{title}</span>
        </li>
    );
}

function TodoCardButton({ text }: any) {
    return <button className="todo_card__button">{text}</button>;
}

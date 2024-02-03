import SubTaskModel from "../models/SubTaskModel";

type SubTasksProps = {
    subTask: SubTaskModel;
    onClick: (subTask: SubTaskModel) => void;
};

export default function SubTaskElement({ subTask, onClick }: SubTasksProps) {
    return (
        <li className="task_card__subTask">
            <div className="task_card__subTask_main">
                <input type="checkbox" checked={subTask.isDone} readOnly />
                <span className="task_card__subTask_sep"></span>
                <span>{subTask.title}</span>
            </div>
            <div className="task_card__subTask_delete">
                <button onClick={() => onClick(subTask)}>X</button>
            </div>
        </li>
    );
}

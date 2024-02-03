import SubTaskModel from "../models/SubTaskModel";
import SubTaskElement from "./SubTaskElement";

type ContainerProps = {
    subTasks: Array<SubTaskModel>;
    setSubTasks: (subTasks: Array<SubTaskModel>) => void;
};

export default function SubTasksContainer({ subTasks, setSubTasks }: ContainerProps) {
    if (subTasks.length === 0) {
        return <></>;
    }

    function onClick(subTask: SubTaskModel) {
        subTask.deleteThis();
        setSubTasks(subTask.owner.subTasks);
    }

    function getSubTaskElement(subTask: SubTaskModel) {
        return <SubTaskElement key={subTask.id} subTask={subTask} onClick={onClick} />;
    }

    return <ul className="task_card__subTasks">{subTasks.map(getSubTaskElement)}</ul>;
}

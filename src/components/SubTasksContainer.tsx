import SubTaskModel from "../models/SubTaskModel";
import SubTaskElement from "./SubTaskElement";

export type ContainerProps = {
    subTasks: Array<SubTaskModel>;
    onClickCheckbox: (subTask: SubTaskModel) => void;
    onClickDelete: (subTask: SubTaskModel) => void;
};

export default function SubTasksContainer(props: ContainerProps) {
    if (props.subTasks.length === 0) {
        return <></>;
    }

    function getSubTaskElement(subTask: SubTaskModel) {
        return (
            <SubTaskElement
                key={subTask.id}
                subTask={subTask}
                onClickCheckbox={props.onClickCheckbox}
                onClickDelete={props.onClickDelete}
            />
        );
    }

    return <ul className="task_card__subTasks">{props.subTasks.map(getSubTaskElement)}</ul>; // prettier-ignore
}

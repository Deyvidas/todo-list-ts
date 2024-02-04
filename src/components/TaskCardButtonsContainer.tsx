import TaskCardButton from './TaskCardButton';

import { filterType } from './TaskCardButton';
import { TaskCardButtonProps } from './TaskCardButton';

export type TaskCardButtonsProps = {
    activeButton: filterType;
    onClick: (btnText: filterType) => void;
};

export default function TaskCardButtonsContainer(props: TaskCardButtonsProps) {
    const taskCardButtonProps: TaskCardButtonProps = {
        activeButton: props.activeButton,
        onClick: props.onClick,
    };

    return (
        <div className='task_card__buttons'>
            <TaskCardButton {...taskCardButtonProps} text={'All'} />
            <TaskCardButton {...taskCardButtonProps} text={'Active'} />
            <TaskCardButton {...taskCardButtonProps} text={'Completed'} />
        </div>
    );
}

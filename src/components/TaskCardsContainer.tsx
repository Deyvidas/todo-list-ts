import TaskCard from './TaskCard';
import TaskModel from '../models/TaskModel';

import { TaskCardProps } from './TaskCard';

export type TasksContainerProps = {
    onClickDeleteTaskCard: (task: TaskModel) => void;
    tasks: Array<TaskModel>;
};

export default function TaskCardsContainer(props: TasksContainerProps) {
    function buildTaskCard(task: TaskModel) {
        const taskCardProps: TaskCardProps = {
            onClickDeleteTaskCard: props.onClickDeleteTaskCard,
            task: task,
        };

        return (
            <div key={task.id} className='column-3'>
                <TaskCard {...taskCardProps} />
            </div>
        );
    }

    return <>{props.tasks.map(buildTaskCard)}</>;
}

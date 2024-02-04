import TaskCard from './TaskCard';
import TaskModel from '../models/TaskModel';

type TasksContainerProps = {
    tasks: Array<TaskModel>;
};

export default function TaskCardsContainer({ tasks }: TasksContainerProps) {
    function buildTaskCard(task: TaskModel) {
        return (
            <div key={task.id} className='column-3'>
                <TaskCard task={task} />
            </div>
        );
    }

    return <>{tasks.map(buildTaskCard)}</>;
}

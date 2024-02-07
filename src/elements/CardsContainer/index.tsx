import { Grid } from '../../components/Grid';
import { GridPropsType } from '../../components/Grid';
import { TaskCard } from '../TaskCard';
import { TaskCardPropsType } from '../TaskCard';
import { TaskModel } from '../../models/TaskModel';

type CardsContainerPropsType = {
    tasks: Array<TaskModel>;
    onClickDeleteCard: (task: TaskModel) => void;
};

function CardsContainer(props: CardsContainerPropsType) {
    if (props.tasks.length === 0) {
        return <></>;
    }

    function getTaskCard(task: TaskModel) {
        const TaskCardProps: TaskCardPropsType = {
            task: task,
            onClickDeleteCard: props.onClickDeleteCard,
        };
        return <TaskCard key={task.id} {...TaskCardProps}></TaskCard>;
    }

    const GridProps: GridPropsType = {
        classNames: ['col-2'],
    };

    return <Grid {...GridProps}>{props.tasks.map(getTaskCard)}</Grid>;
}

export { type CardsContainerPropsType, CardsContainer };

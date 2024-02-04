export type filterType = 'All' | 'Active' | 'Completed';

export type TaskCardButtonProps = {
    activeButton: filterType;
    onClick: (btnText: filterType) => void;
};

type TaskCardButtonPropsExtended = TaskCardButtonProps & {
    text: filterType;
};

export default function TaskCardButton(props: TaskCardButtonPropsExtended) {
    let className = 'task_card__button';
    if (props.text === props.activeButton) {
        className += ' active';
    }

    return (
        <button className={className} onClick={() => props.onClick(props.text)}>
            {props.text}
        </button>
    );
}

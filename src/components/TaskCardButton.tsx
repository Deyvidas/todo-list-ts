type TaskCardButtonProps = {
    text: string;
    onClick: () => void;
};

export default function TaskCardButton({ text, onClick }: TaskCardButtonProps) {
    return (
        <button className="task_card__button" onClick={onClick}>
            {text}
        </button>
    );
}

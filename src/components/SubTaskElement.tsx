import { InputHTMLAttributes } from 'react';

import SubTaskModel from '../models/SubTaskModel';

export type SubTasksProps = {
    subTask: SubTaskModel;
    onClickCheckbox: (subTask: SubTaskModel) => void;
    onClickDelete: (subTask: SubTaskModel) => void;
};

export default function SubTaskElement(props: SubTasksProps) {
    const inputProps: InputHTMLAttributes<HTMLInputElement> = {
        type: 'checkbox',
        checked: props.subTask.isDone,
        readOnly: true,
        onClick: () => props.onClickCheckbox(props.subTask),
    };

    return (
        <li className='task_card__subTask'>
            <div className='task_card__subTask_main'>
                <input {...inputProps} />
                <span className='task_card__subTask_sep'></span>
                <span>{props.subTask.title}</span>
            </div>
            <div className='task_card__subTask_delete'>
                <button onClick={() => props.onClickDelete(props.subTask)}>X</button>
            </div>
        </li>
    );
}

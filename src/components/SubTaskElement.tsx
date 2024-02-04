import { ButtonHTMLAttributes, HTMLAttributes } from 'react';
import { InputHTMLAttributes } from 'react';

import SubTaskModel from '../models/SubTaskModel';

export type SubTasksProps = {
    subTask: SubTaskModel;
    onClickCheckbox: (subTask: SubTaskModel) => void;
    onClickDelete: (subTask: SubTaskModel) => void;
};

export default function SubTaskElement(props: SubTasksProps) {
    let subTaskContainerClass = 'task_card__subTask_main';
    if (props.subTask.isDone === true) {
        subTaskContainerClass += ' is-done';
    }

    const subTaskDivProps: HTMLAttributes<HTMLDivElement> = {
        className: subTaskContainerClass,
        onClick: () => props.onClickCheckbox(props.subTask),
    };
    const subTaskCheckboxProps: InputHTMLAttributes<HTMLInputElement> = {
        type: 'checkbox',
        checked: props.subTask.isDone,
        readOnly: true,
    };
    const buttonDeleteProps: ButtonHTMLAttributes<HTMLButtonElement> = {
        className: 'delete_button',
        onClick: () => props.onClickDelete(props.subTask),
    };

    return (
        <li className='task_card__subTask'>
            <div {...subTaskDivProps}>
                <input {...subTaskCheckboxProps} />
                <span className='task_card__subTask_sep'></span>
                <span>{props.subTask.title}</span>
            </div>
            <div className='task_card__subTask_delete'>
                <button {...buttonDeleteProps}>X</button>
            </div>
        </li>
    );
}

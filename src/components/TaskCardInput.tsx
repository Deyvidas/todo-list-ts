import { ChangeEvent } from 'react';
import { InputHTMLAttributes } from 'react';
import { KeyboardEvent } from 'react';

export type TaskInputProps = {
    value: string;
    onClickBtn: () => void;
    onPressEnter: (event: KeyboardEvent<HTMLInputElement>) => void;
    onChange: (value: ChangeEvent<HTMLInputElement>) => void;
};

export default function TaskCardInput(props: TaskInputProps) {
    let inputProps: InputHTMLAttributes<HTMLInputElement> = {
        type: 'text',
        value: props.value,
        placeholder: 'Input the name of new task to do',
        onChange: (event) => props.onChange(event),
        onKeyDown: (event) => props.onPressEnter(event),
    };

    return (
        <div className='task_card__input'>
            <input {...inputProps} />
            <button onClick={() => props.onClickBtn()}>+</button>
        </div>
    );
}

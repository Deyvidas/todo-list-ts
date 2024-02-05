import { ButtonHTMLAttributes } from 'react';
import { ChangeEvent } from 'react';
import { InputHTMLAttributes } from 'react';
import { KeyboardEvent } from 'react';
import { useState } from 'react';

import { ValidationError } from '../errors';

export type TaskInputProps = {
    className: string;
    addNewItemFunction: (inputValue: string) => void;
};

export default function TaskCardInput(props: TaskInputProps) {
    const [inputValue, setInputValue] = useState<string>('');

    function onChangeInputHandler(event: ChangeEvent<HTMLInputElement>) {
        setInputValue(event.target.value);
    }

    function onClickButtonHandler() {
        addNewItem();
    }

    function onKeyDownHandler(event: KeyboardEvent<HTMLInputElement>) {
        if (event.key === 'Enter') return addNewItem();
    }

    function addNewItem() {
        try {
            props.addNewItemFunction(inputValue);
        } catch (e: any) {
            if (e instanceof ValidationError) {
                return window.alert(e.message);
            }
            throw e;
        } finally {
            setInputValue('');
        }
    }

    const inputProps: InputHTMLAttributes<HTMLInputElement> = {
        type: 'text',
        value: inputValue,
        placeholder: 'Input the name of new task to do',
        onChange: (event) => onChangeInputHandler(event),
        onKeyDown: (event) => onKeyDownHandler(event),
    };

    const buttonProps: ButtonHTMLAttributes<HTMLButtonElement> = {
        onClick: () => onClickButtonHandler(),
    };

    return (
        <div className={props.className}>
            <input {...inputProps} />
            <button {...buttonProps}>+</button>
        </div>
    );
}

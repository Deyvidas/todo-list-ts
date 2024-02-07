import React, { useState } from 'react';

import { Button } from '../../components/Button';
import { ButtonPropsType } from '../../components/Button';
import { Input } from '../../components/Input';
import { InputPropsType } from '../../components/Input';
import { ValidationError } from '../../errors';

import styles from './styles.module.css';

const defaultCssClass = 'block';
type InputWithAddBtnPropsType = {
    placeholder: string;
    addNewItem: (title: string) => void;
};

function InputWithAddBtn(props: InputWithAddBtnPropsType) {
    const [inputValue, setInputValue] = useState<string>('');

    function onChangeHandler(event: React.ChangeEvent<HTMLInputElement>) {
        setInputValue(event.target.value);
    }

    function onKeyDownHandler(event: React.KeyboardEvent<HTMLInputElement>) {
        if (event.key === 'Enter') {
            return validateAndCreate();
        }
    }

    function onClickHandler() {
        validateAndCreate();
    }

    function validateAndCreate() {
        try {
            props.addNewItem(inputValue);
        } catch (e: any) {
            if (e instanceof ValidationError) {
                return window.alert(e.message);
            }
            throw e;
        } finally {
            setInputValue('');
        }
    }

    const InputProps: InputPropsType = {
        classNames: ['blue'],
        placeholder: props.placeholder,
        value: inputValue,
        onChange: onChangeHandler,
        onKeyDown: onKeyDownHandler,
    };
    const ButtonProps: ButtonPropsType = {
        classNames: ['blue'],
        onClick: onClickHandler,
    };

    return (
        <div className={styles[defaultCssClass]}>
            <Input {...InputProps}></Input>
            <Button {...ButtonProps}>+</Button>
        </div>
    );
}

export { type InputWithAddBtnPropsType, InputWithAddBtn };

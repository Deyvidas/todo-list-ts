import React from 'react';

import { getCssClassName } from '../../getCssClass';

import styles from './styles.module.css';

const defaultCssClass = 'input';
type InputClassesAvailable = 'red' | 'orange' | 'green' | 'blue';

type InputPropsType = {
    classNames?: Array<InputClassesAvailable>;
    style?: React.CSSProperties;
    placeholder?: string;
    value?: string;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onKeyDown?: (event: React.KeyboardEvent<HTMLInputElement>) => void;
};

function Input(props: InputPropsType) {
    const InputProps: React.InputHTMLAttributes<HTMLInputElement> = {
        className: getCssClassName(styles, defaultCssClass, props.classNames),
        style: props.style,
        placeholder: props.placeholder,
        value: props.value,
        onChange: props.onChange,
        onKeyDown: props.onKeyDown,
    };

    return <input {...InputProps} type='text' />;
}

export default React.memo(Input);
export { type InputPropsType };

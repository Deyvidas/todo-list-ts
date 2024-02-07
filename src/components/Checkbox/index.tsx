import React from 'react';

import { getCssClassName } from '../../getCssClass';

import styles from './styles.module.css';

const defaultCssClass = 'checkbox';
type CheckboxClassesAvailable = 'red' | 'orange' | 'green' | 'blue';

type CheckboxPropsType = {
    classNames?: Array<CheckboxClassesAvailable>;
    style?: React.CSSProperties;
    checked?: boolean;
    onClick?: (event: React.MouseEvent<HTMLInputElement>) => void;
};

function Checkbox(props: CheckboxPropsType) {
    const InputProps: React.InputHTMLAttributes<HTMLInputElement> = {
        className: getCssClassName(styles, defaultCssClass, props.classNames),
        style: props.style,
        checked: props.checked,
        readOnly: true,
        onClick: props.onClick,
    };

    return <input {...InputProps} type='checkbox' />;
}

export { type CheckboxPropsType, Checkbox };

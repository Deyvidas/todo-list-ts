import React from 'react';

import { getCssClassName } from '../../getCssClass';

import styles from './styles.module.css';

const defaultCssClass = 'button';
type ButtonClassesAvailable = 'red' | 'orange' | 'green' | 'blue';

type ButtonPropsType = {
    classNames?: Array<ButtonClassesAvailable>;
    style?: React.CSSProperties;
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
};

function Button(props: React.PropsWithChildren<ButtonPropsType>) {
    const ButtonProps: React.ButtonHTMLAttributes<HTMLButtonElement> = {
        className: getCssClassName(styles, defaultCssClass, props.classNames),
        style: props.style,
        onClick: props.onClick,
    };

    return <button {...ButtonProps}>{props.children}</button>;
}

export default React.memo(Button);
export { type ButtonPropsType };

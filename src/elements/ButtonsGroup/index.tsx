import { useState } from 'react';

import { Button } from '../../components/Button';
import { ButtonPropsType } from '../../components/Button';

import styles from './styles.module.css';

const defaultCssClass = 'block';
type ButtonType = 'All' | 'Active' | 'Completed';
type ButtonsGroupPropsType = {
    onClick: (buttonText: ButtonType) => void;
};

function ButtonsGroup(props: ButtonsGroupPropsType) {
    const [activeButton, setActiveButton] = useState<ButtonType>('All');

    function onClickHandler(buttonType: ButtonType) {
        props.onClick(buttonType);
        setActiveButton(buttonType);
    }

    const ButtonElementProps: ButtonElementPropsType = {
        activeButton: activeButton,
        onClick: onClickHandler,
    };

    return (
        <div className={styles[defaultCssClass]}>
            <ButtonElement {...ButtonElementProps} text={'All'} />
            <ButtonElement {...ButtonElementProps} text={'Active'} />
            <ButtonElement {...ButtonElementProps} text={'Completed'} />
        </div>
    );
}

type ButtonElementPropsType = {
    activeButton: ButtonType;
    onClick: (buttonType: ButtonType) => void;
};

function ButtonElement(props: ButtonElementPropsType & { text: ButtonType }) {
    const isActive = props.activeButton === props.text;

    function onClick() {
        return props.onClick(props.text);
    }

    const ButtonProps: ButtonPropsType = {
        classNames: isActive ? ['blue'] : undefined,
        onClick: onClick,
    };

    return <Button {...ButtonProps}>{props.text}</Button>;
}

export { type ButtonType, type ButtonsGroupPropsType, ButtonsGroup };

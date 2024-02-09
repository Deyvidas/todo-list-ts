import React from 'react';

import { useCallback } from 'react';
import { useState } from 'react';

import Button from '../../components/Button';

import { ButtonPropsType } from '../../components/Button';

import styles from './styles.module.css';

const defaultCssClass = 'block';
type ButtonType = 'All' | 'Active' | 'Completed';
type ButtonsGroupPropsType = {
    onClick: (buttonText: ButtonType) => void;
};

const ButtonElement = React.memo(ButtonElementC);

function ButtonsGroup(props: ButtonsGroupPropsType) {
    const [activeButton, setActiveButton] = useState<ButtonType>('All');

    function onClickHandler(buttonType: ButtonType) {
        props.onClick(buttonType);
        setActiveButton(buttonType);
    }

    const ButtonElementProps: ButtonElementPropsType = {
        activeButton: activeButton,
        onClick: useCallback(onClickHandler, [props]),
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

function ButtonElementC(props: ButtonElementPropsType & { text: ButtonType }) {
    const isActive = props.activeButton === props.text;

    function onClick() {
        return props.onClick(props.text);
    }

    const ButtonProps: ButtonPropsType = {
        classNames: isActive ? ['blue'] : undefined,
        onClick: useCallback(onClick, [props]),
    };

    return <Button {...ButtonProps}>{props.text}</Button>;
}

export default React.memo(ButtonsGroup);
export { type ButtonType, type ButtonsGroupPropsType };

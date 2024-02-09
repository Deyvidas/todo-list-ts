import React from 'react';

import { useCallback } from 'react';
import { useState } from 'react';

import Button from '../../components/Button';
import Checkbox from '../../components/Checkbox';
import Text from '../../components/Text';

import { ButtonPropsType } from '../../components/Button';
import { CheckboxPropsType } from '../../components/Checkbox';
import { getCssClassName } from '../../getCssClass';
import { SubTaskModel } from '../../models/SubTaskModel';
import { TextPropsType } from '../../components/Text';

import styles from './styles.module.css';

const defaultCssClass = 'block';
type TaskItemTitlePropsType = {
    subTask: SubTaskModel;
    onClickCheckbox: (subTask: SubTaskModel) => void;
    onClickButton: (subTask: SubTaskModel) => void;
};

function TaskItemTitle(props: TaskItemTitlePropsType) {
    const [isDone, setIsDone] = useState(props.subTask.isDone);

    let blockClassName: string = styles[defaultCssClass];
    if (props.subTask.isDone) {
        blockClassName = getCssClassName(styles, defaultCssClass, ['done']);
    }

    function checkboxClicked() {
        props.onClickCheckbox(props.subTask);
        setIsDone(!isDone);
    }

    function buttonClicked() {
        props.onClickButton(props.subTask);
    }

    const CheckboxProps: CheckboxPropsType = {
        checked: isDone,
        classNames: isDone ? ['green'] : ['orange'],
        onClick: useCallback(checkboxClicked, [props, isDone]),
    };
    const TextProps: TextPropsType = {
        tagName: 'p',
        classNames: isDone ? ['green'] : ['orange'],
    };
    const ButtonProps: ButtonPropsType = {
        classNames: ['red'],
        onClick: useCallback(buttonClicked, [props]),
    };

    return (
        <div className={blockClassName}>
            <Checkbox {...CheckboxProps}></Checkbox>
            <Text {...TextProps}>{props.subTask.title}</Text>
            <Button {...ButtonProps}>X</Button>
        </div>
    );
}

export default React.memo(TaskItemTitle);
export { type TaskItemTitlePropsType };

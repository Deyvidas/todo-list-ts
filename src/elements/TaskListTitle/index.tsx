import { Button } from '../../components/Button';
import { ButtonPropsType } from '../../components/Button';
import { PropsWithChildren } from 'react';
import { TaskModel } from '../../models/TaskModel';
import { Text } from '../../components/Text';
import { TextPropsType } from '../../components/Text';

import styles from './styles.module.css';

const defaultCssClass = 'block';
type TaskListTitlePropsType = {
    task: TaskModel;
    onClickButton: (task: TaskModel) => void;
};

function TaskListTitle(props: PropsWithChildren<TaskListTitlePropsType>) {
    function buttonClicked() {
        props.onClickButton(props.task);
    }

    const TextProps: PropsWithChildren<TextPropsType> = {
        tagName: 'h5',
        style: { paddingLeft: '0%' },
    };
    const ButtonProps: ButtonPropsType = {
        classNames: ['red'],
        onClick: buttonClicked,
    };

    return (
        <div className={styles[defaultCssClass]}>
            <Text {...TextProps}>{props.task.title}</Text>
            <Button {...ButtonProps}>X</Button>
        </div>
    );
}

export { type TaskListTitlePropsType, TaskListTitle };

import { Button } from '../../components/Button';
import { ButtonPropsType } from '../../components/Button';
import { Checkbox } from '../../components/Checkbox';
import { CheckboxPropsType } from '../../components/Checkbox';
import { getCssClassName } from '../../getCssClass';
import { SubTaskModel } from '../../models/SubTaskModel';
import { Text } from '../../components/Text';
import { TextPropsType } from '../../components/Text';

import styles from './styles.module.css';

const defaultCssClass = 'block';
type TaskItemTitlePropsType = {
    subTask: SubTaskModel;
    onClickCheckbox: (subTask: SubTaskModel) => void;
    onClickButton: (subTask: SubTaskModel) => void;
};

function TaskItemTitle(props: TaskItemTitlePropsType) {
    const isDone = props.subTask.isDone;

    let blockClassName: string = styles[defaultCssClass];
    if (props.subTask.isDone) {
        blockClassName = getCssClassName(styles, defaultCssClass, ['done']);
    }

    function checkboxClicked() {
        props.onClickCheckbox(props.subTask);
    }

    function buttonClicked() {
        props.onClickButton(props.subTask);
    }

    const CheckboxProps: CheckboxPropsType = {
        checked: isDone,
        classNames: isDone ? ['green'] : ['orange'],
        onClick: checkboxClicked,
    };
    const TextProps: TextPropsType = {
        tagName: 'p',
        classNames: isDone ? ['green'] : ['orange'],
    };
    const ButtonProps: ButtonPropsType = {
        classNames: ['red'],
        onClick: buttonClicked,
    };

    return (
        <div className={blockClassName}>
            <Checkbox {...CheckboxProps}></Checkbox>
            <Text {...TextProps}>{props.subTask.title}</Text>
            <Button {...ButtonProps}>X</Button>
        </div>
    );
}

export { type TaskItemTitlePropsType, TaskItemTitle };

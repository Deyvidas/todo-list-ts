import React from 'react';

import { getCssClassName } from '../../getCssClass';

import styles from './styles.module.css';

const defaultCssClass = 'text';
type TextElementsType = HTMLHeadingElement | HTMLParagraphElement | HTMLSpanElement;
type TextTagAvailable = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span';
type TextClassesAvailable =
    | 'bold'
    | 'strikethrough'
    | 'red'
    | 'orange'
    | 'green'
    | 'blue';

type TextPropsType = {
    tagName: TextTagAvailable;
    classNames?: Array<TextClassesAvailable>;
    style?: React.CSSProperties;
};

function Text(props: React.PropsWithChildren<TextPropsType>) {
    const TextProps: React.HTMLAttributes<TextElementsType> = {
        className: getCssClassName(styles, defaultCssClass, props.classNames),
        style: props.style,
    };

    return React.createElement(props.tagName, { ...TextProps }, props.children);
}

export default React.memo(Text);
export { type TextPropsType, type TextTagAvailable };

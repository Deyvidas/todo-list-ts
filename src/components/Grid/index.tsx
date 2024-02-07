import React from 'react';

import { getCssClassName } from '../../getCssClass';

import styles from './styles.module.css';

const defaultCssClass = 'grid';
type GridClassesAvailable = 'col-1' | 'col-2' | 'col-3' | 'col-4';
type GridPropsType = {
    classNames?: Array<GridClassesAvailable>;
    style?: React.CSSProperties;
};

function Grid(props: React.PropsWithChildren<GridPropsType>) {
    const DivProps: React.HTMLAttributes<HTMLDivElement> = {
        className: getCssClassName(styles, defaultCssClass, props.classNames),
        style: props.style,
    };

    return <div {...DivProps}>{props.children}</div>;
}

export { type GridPropsType, Grid };

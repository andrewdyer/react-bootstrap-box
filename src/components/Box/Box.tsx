import React from 'react';
import classnames from 'classnames';
import type { TBoxAlign } from '../../types';

export interface BoxProps extends React.HTMLAttributes<HTMLElement> {
    as?: keyof React.ReactHTML;
    align?: TBoxAlign;
    bg?: string;
    text?: string;
}

const Box: React.FC<BoxProps> = ({
    as: Component = 'div',
    className,
    align,
    bg,
    text,
    ...props
}) => {
    const classNames = classnames(
        {
            [`align-${align}`]: align,
            [`bg-${bg}`]: bg,
            [`text-${text}`]: text
        },
        className
    );

    return <Component className={classNames} {...props} />;
};

export default Box;

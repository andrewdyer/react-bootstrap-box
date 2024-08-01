import React from 'react';
import classnames from 'classnames';
import type { TBoxAlign } from '../../types';

export interface BoxProps extends React.HTMLAttributes<HTMLElement> {
    as?: keyof React.ReactHTML;
    align?: TBoxAlign;
    bg?: string;
    invisible?: boolean;
    text?: string;
    visible?: boolean;
}

const Box: React.FC<BoxProps> = ({
    as: Component = 'div',
    className,
    align,
    bg,
    invisible,
    text,
    visible,
    ...props
}) => {
    const classNames = classnames(
        {
            [`align-${align}`]: align,
            [`bg-${bg}`]: bg,
            [`visible`]: visible,
            [`text-${text}`]: text,
            [`invisible`]: invisible
        },
        className
    );

    return <Component className={classNames} {...props} />;
};

export default Box;

import React from 'react';
import classnames from 'classnames';
import type { TBoxAlign, TBoxSizing } from '../../types';

export interface BoxProps extends React.HTMLAttributes<HTMLElement> {
    as?: keyof React.ReactHTML;
    align?: TBoxAlign;
    bg?: string;
    h?: TBoxSizing;
    invisible?: boolean;
    text?: string;
    visible?: boolean;
    w?: TBoxSizing;
}

const Box: React.FC<BoxProps> = ({
    as: Component = 'div',
    className,
    align,
    bg,
    h,
    invisible,
    text,
    visible,
    w,
    ...props
}) => {
    const classNames = classnames(
        {
            [`align-${align}`]: align,
            [`bg-${bg}`]: bg,
            [`invisible`]: invisible,
            [`h-${h}`]: h,
            [`text-${text}`]: text,
            [`visible`]: visible,
            [`w-${w}`]: w
        },
        className
    );

    return <Component className={classNames} {...props} />;
};

export default Box;

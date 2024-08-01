import React from 'react';
import classnames from 'classnames';

export interface BoxProps extends React.HTMLAttributes<HTMLElement> {
    as?: keyof React.ReactHTML;
    bg?: string;
    text?: string;
}

const Box: React.FC<BoxProps> = ({ as: Component = 'div', className, bg, text, ...props }) => {
    const classNames = classnames({ [`bg-${bg}`]: bg, [`text-${text}`]: text }, className);

    return <Component className={classNames} {...props} />;
};

export default Box;

import React from 'react';
import classnames from 'classnames';

export interface BoxProps extends React.HTMLAttributes<HTMLElement> {
    as?: keyof React.ReactHTML;
    bg?: string;
}

const Box: React.FC<BoxProps> = ({ as: Component = 'div', className, bg, ...props }) => {
    const classNames = classnames({ [`bg-${bg}`]: bg }, className);

    return <Component className={classNames} {...props} />;
};

export default Box;

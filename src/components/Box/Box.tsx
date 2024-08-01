import React from 'react';
import classnames from 'classnames';

export interface BoxProps extends React.HTMLAttributes<HTMLElement> {
    as?: keyof React.ReactHTML;
}

const Box: React.FC<BoxProps> = ({ as: Component = 'div', className, ...props }) => {
    const classNames = classnames(className);

    return <Component className={classNames} {...props} />;
};

export default Box;

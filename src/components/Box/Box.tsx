import React from 'react';

export interface BoxProps extends React.HTMLAttributes<HTMLElement> {
    as?: keyof React.ReactHTML;
}

const Box: React.FC<BoxProps> = ({ as: Component = 'div', ...props }) => {
    return <Component {...props} />;
};

export default Box;

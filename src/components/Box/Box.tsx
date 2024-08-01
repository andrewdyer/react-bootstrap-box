import React from 'react';

export interface BoxProps extends React.HTMLAttributes<HTMLElement> {}

const Box: React.FC<BoxProps> = ({ ...props }) => {
    return <div {...props} />;
};

export default Box;

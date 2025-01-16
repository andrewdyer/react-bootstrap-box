import classnames from 'classnames';

import type { TBoxBorderWidth } from '../../types';

export interface BorderProps {
    border?: boolean;
    borderTop?: boolean | 0;
    borderEnd?: boolean | 0;
    borderBottom?: boolean | 0;
    borderStart?: boolean | 0;
    borderColor?: string;
    borderWidth?: TBoxBorderWidth;
}

const generateBorderClassNames = ({
    border,
    borderTop,
    borderEnd,
    borderBottom,
    borderStart,
    borderColor,
    borderWidth
}: BorderProps): string => {
    return classnames({
        border: border,
        'border-top': borderTop === true,
        'border-top-0': borderTop === 0,
        'border-end': borderEnd === true,
        'border-end-0': borderEnd === 0,
        'border-bottom': borderBottom === true,
        'border-bottom-0': borderBottom === 0,
        'border-start': borderStart === true,
        'border-start-0': borderStart === 0,
        [`border-${borderColor}`]: borderColor,
        [`border-${borderWidth}`]: borderWidth
    });
};

export default generateBorderClassNames;

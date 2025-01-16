import classnames from 'classnames';

import type {
    TBoxAlign,
    TBoxOpacity,
    TBoxOverflow,
    TBoxPointerEvents,
    TBoxRadius,
    TBoxSizing,
    TBoxUserSelect
} from '../../types';

export interface VisualProps {
    align?: TBoxAlign;
    background?: string;
    color?: string;
    gradient?: boolean;
    height?: TBoxSizing;
    invisible?: boolean;
    opacity?: TBoxOpacity;
    overflow?: TBoxOverflow;
    pointerEvents?: TBoxPointerEvents;
    radius?: TBoxRadius;
    userSelect?: TBoxUserSelect;
    visible?: boolean;
    width?: TBoxSizing;
}

const generateVisualClassNames = ({
    align,
    background,
    color,
    gradient,
    height,
    invisible,
    opacity,
    overflow,
    pointerEvents,
    radius,
    userSelect,
    visible,
    width
}: VisualProps): string => {
    return classnames({
        [`align-${align}`]: align,
        [`bg-${background}`]: background,
        ['bg-gradient']: gradient,
        [`invisible`]: invisible,
        [`h-${height}`]: height,
        [`opacity-${opacity}`]: opacity,
        [`overflow-${overflow}`]: overflow,
        [`pe-${pointerEvents}`]: pointerEvents,
        [`${radius}`]: radius,
        [`text-${color}`]: color,
        [`user-select-${userSelect}`]: userSelect,
        [`visible`]: visible,
        [`w-${width}`]: width
    });
};

export default generateVisualClassNames;

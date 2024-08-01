import React from 'react';
import classnames from 'classnames';
import type {
    TBoxAlign,
    TBoxAlignItems,
    TBoxAlignSelf,
    TBoxDisplay,
    TBoxFlexDirection,
    TBoxJustifyContent,
    TBoxOpacity,
    TBoxOverflow,
    TBoxPointerEvents,
    TBoxSizing,
    TBoxUserSelect,
    TResponsiveValue
} from '../../types';
import { generateResponsiveClasses } from '../../utilities';

export interface BoxProps extends React.HTMLAttributes<HTMLElement> {
    as?: keyof React.ReactHTML;
    align?: TBoxAlign;
    alignItems?: TResponsiveValue<TBoxAlignItems>;
    alignSelf?: TResponsiveValue<TBoxAlignSelf>;
    bg?: string;
    d?: TResponsiveValue<TBoxDisplay>;
    flexDirection?: TResponsiveValue<TBoxFlexDirection>;
    h?: TBoxSizing;
    invisible?: boolean;
    justifyContent?: TResponsiveValue<TBoxJustifyContent>;
    opacity?: TBoxOpacity;
    overflow?: TBoxOverflow;
    pointerEvents?: TBoxPointerEvents;
    text?: string;
    userSelect?: TBoxUserSelect;
    visible?: boolean;
    w?: TBoxSizing;
}

const Box: React.FC<BoxProps> = ({
    as: Component = 'div',
    className,
    align,
    alignItems,
    alignSelf,
    bg,
    d,
    flexDirection,
    h,
    invisible,
    justifyContent,
    opacity,
    overflow,
    pointerEvents,
    text,
    userSelect,
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
            [`opacity-${opacity}`]: opacity,
            [`overflow-${overflow}`]: overflow,
            [`pe-${pointerEvents}`]: pointerEvents,
            [`text-${text}`]: text,
            [`user-select-${userSelect}`]: userSelect,
            [`visible`]: visible,
            [`w-${w}`]: w
        },
        generateResponsiveClasses('align-items', alignItems),
        generateResponsiveClasses('align-self', alignSelf),
        generateResponsiveClasses('d', d),
        generateResponsiveClasses('flex', flexDirection),
        generateResponsiveClasses('justify-content', justifyContent),
        className
    );

    return <Component className={classNames} {...props} />;
};

export default Box;

import React from 'react';
import classnames from 'classnames';
import type {
    TBoxAlign,
    TBoxAlignItems,
    TBoxAlignSelf,
    TBoxDisplay,
    TBoxFlexDirection,
    TBoxJustifyContent,
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

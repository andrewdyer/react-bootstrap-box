import React from 'react';
import classnames from 'classnames';
import type {
    TBoxAlign,
    TBoxAlignItems,
    TBoxAlignSelf,
    TBoxDisplay,
    TBoxFlexDirection,
    TBoxFontSize,
    TBoxJustifyContent,
    TBoxOpacity,
    TBoxOverflow,
    TBoxPointerEvents,
    TBoxSizing,
    TBoxSpacing,
    TBoxTextTransform,
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
    color?: string;
    d?: TResponsiveValue<TBoxDisplay>;
    flexDirection?: TResponsiveValue<TBoxFlexDirection>;
    fs?: TBoxFontSize;
    h?: TBoxSizing;
    invisible?: boolean;
    justifyContent?: TResponsiveValue<TBoxJustifyContent>;
    m?: TResponsiveValue<TBoxSpacing>;
    mt?: TResponsiveValue<TBoxSpacing>;
    mb?: TResponsiveValue<TBoxSpacing>;
    ms?: TResponsiveValue<TBoxSpacing>;
    me?: TResponsiveValue<TBoxSpacing>;
    mx?: TResponsiveValue<TBoxSpacing>;
    my?: TResponsiveValue<TBoxSpacing>;
    opacity?: TBoxOpacity;
    overflow?: TBoxOverflow;
    p?: TResponsiveValue<TBoxSpacing>;
    pt?: TResponsiveValue<TBoxSpacing>;
    pb?: TResponsiveValue<TBoxSpacing>;
    ps?: TResponsiveValue<TBoxSpacing>;
    pe?: TResponsiveValue<TBoxSpacing>;
    px?: TResponsiveValue<TBoxSpacing>;
    py?: TResponsiveValue<TBoxSpacing>;
    pointerEvents?: TBoxPointerEvents;
    textWrap?: boolean;
    textNoWrap?: boolean;
    textTransform?: TBoxTextTransform;
    userSelect?: TBoxUserSelect;
    visible?: boolean;
    w?: TBoxSizing;
    wordBreak?: boolean;
}

const Box: React.FC<BoxProps> = ({
    as: Component = 'div',
    className,
    align,
    alignItems,
    alignSelf,
    bg,
    color,
    d,
    flexDirection,
    fs,
    h,
    invisible,
    justifyContent,
    m,
    mt,
    mb,
    ms,
    me,
    mx,
    my,
    opacity,
    overflow,
    p,
    pt,
    pb,
    ps,
    pe,
    px,
    py,
    pointerEvents,
    textWrap,
    textNoWrap,
    textTransform,
    userSelect,
    visible,
    w,
    wordBreak,
    ...props
}) => {
    const classNames = classnames(
        {
            [`align-${align}`]: align,
            [`bg-${bg}`]: bg,
            [`invisible`]: invisible,
            [`h-${h}`]: h,
            [`fs-${fs}`]: fs,
            [`opacity-${opacity}`]: opacity,
            [`overflow-${overflow}`]: overflow,
            [`pe-${pointerEvents}`]: pointerEvents,
            [`text-${color}`]: color,
            'text-wrap': textWrap,
            'text-nowrap': textNoWrap,
            [`user-select-${userSelect}`]: userSelect,
            [`visible`]: visible,
            [`w-${w}`]: w,
            'text-break': wordBreak,
            [`text-${textTransform}`]: textTransform
        },
        generateResponsiveClasses('align-items', alignItems),
        generateResponsiveClasses('align-self', alignSelf),
        generateResponsiveClasses('d', d),
        generateResponsiveClasses('flex', flexDirection),
        generateResponsiveClasses('justify-content', justifyContent),
        generateResponsiveClasses('m', m),
        generateResponsiveClasses('mt', mt),
        generateResponsiveClasses('mb', mb),
        generateResponsiveClasses('ms', ms),
        generateResponsiveClasses('me', me),
        generateResponsiveClasses('mx', mx),
        generateResponsiveClasses('my', my),
        generateResponsiveClasses('p', p),
        generateResponsiveClasses('pt', pt),
        generateResponsiveClasses('pb', pb),
        generateResponsiveClasses('ps', ps),
        generateResponsiveClasses('pe', pe),
        generateResponsiveClasses('px', px),
        generateResponsiveClasses('py', py),
        className
    );

    return <Component className={classNames} {...props} />;
};

export default Box;

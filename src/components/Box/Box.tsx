import React from 'react';
import classnames from 'classnames';
import type {
    TBoxAlign,
    TBoxAlignItems,
    TBoxAlignSelf,
    TBoxBorderWidth,
    TBoxDisplay,
    TBoxFlexDirection,
    TBoxFontSize,
    TBoxJustifyContent,
    TBoxOpacity,
    TBoxOverflow,
    TBoxPointerEvents,
    TBoxRadius,
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
    border?: boolean;
    borderTop?: boolean | 0;
    borderEnd?: boolean | 0;
    borderBottom?: boolean | 0;
    borderStart?: boolean | 0;
    borderColor?: string;
    borderWidth?: TBoxBorderWidth;
    color?: string;
    display?: TResponsiveValue<TBoxDisplay>;
    flexDirection?: TResponsiveValue<TBoxFlexDirection>;
    fs?: TBoxFontSize;
    gradient?: boolean;
    height?: TBoxSizing;
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
    radius?: TBoxRadius;
    textWrap?: boolean;
    textNoWrap?: boolean;
    textTransform?: TBoxTextTransform;
    userSelect?: TBoxUserSelect;
    visible?: boolean;
    width?: TBoxSizing;
    wordBreak?: boolean;
}

const Box: React.FC<BoxProps> = ({
    as: Component = 'div',
    className,
    align,
    alignItems,
    alignSelf,
    bg,
    border,
    borderTop,
    borderEnd,
    borderBottom,
    borderStart,
    borderColor,
    borderWidth,
    color,
    display,
    flexDirection,
    fs,
    gradient,
    height,
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
    radius,
    textWrap,
    textNoWrap,
    textTransform,
    userSelect,
    visible,
    width,
    wordBreak,
    ...props
}) => {
    const classNames = classnames(
        {
            [`align-${align}`]: align,
            [`bg-${bg}`]: bg,
            ['bg-gradient']: gradient,
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
            [`border-${borderWidth}`]: borderWidth,
            [`invisible`]: invisible,
            [`h-${height}`]: height,
            [`fs-${fs}`]: fs,
            [`opacity-${opacity}`]: opacity,
            [`overflow-${overflow}`]: overflow,
            [`pe-${pointerEvents}`]: pointerEvents,
            [`${radius}`]: radius,
            [`text-${color}`]: color,
            'text-wrap': textWrap,
            'text-nowrap': textNoWrap,
            [`user-select-${userSelect}`]: userSelect,
            [`visible`]: visible,
            [`w-${width}`]: width,
            'text-break': wordBreak,
            [`text-${textTransform}`]: textTransform
        },
        generateResponsiveClasses('align-items', alignItems),
        generateResponsiveClasses('align-self', alignSelf),
        generateResponsiveClasses('d', display),
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

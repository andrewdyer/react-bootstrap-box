import React from 'react';
import classnames from 'classnames';
import type {
    TBoxAlign,
    TBoxAlignItems,
    TBoxAlignSelf,
    TBoxBorderWidth,
    TBoxDisplay,
    TBoxFlexDirection,
    TBoxFlexWrap,
    TBoxFontSize,
    TBoxFontWeight,
    TBoxJustifyContent,
    TBoxOpacity,
    TBoxOverflow,
    TBoxPointerEvents,
    TBoxRadius,
    TBoxSizing,
    TBoxSpacing,
    TBoxTextAlign,
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
    background?: string;
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
    flexFill?: TResponsiveValue<boolean>;
    flexWrap?: TResponsiveValue<TBoxFlexWrap>;
    fontSize?: TBoxFontSize;
    fontWeight?: TBoxFontWeight;
    gradient?: boolean;
    height?: TBoxSizing;
    invisible?: boolean;
    justifyContent?: TResponsiveValue<TBoxJustifyContent>;
    margin?: TResponsiveValue<TBoxSpacing>;
    marginTop?: TResponsiveValue<TBoxSpacing>;
    marginBottom?: TResponsiveValue<TBoxSpacing>;
    marginLeft?: TResponsiveValue<TBoxSpacing>;
    marginRight?: TResponsiveValue<TBoxSpacing>;
    marginX?: TResponsiveValue<TBoxSpacing>;
    marginY?: TResponsiveValue<TBoxSpacing>;
    opacity?: TBoxOpacity;
    overflow?: TBoxOverflow;
    padding?: TResponsiveValue<TBoxSpacing>;
    paddingTop?: TResponsiveValue<TBoxSpacing>;
    paddingBottom?: TResponsiveValue<TBoxSpacing>;
    paddingLeft?: TResponsiveValue<TBoxSpacing>;
    paddingRight?: TResponsiveValue<TBoxSpacing>;
    paddingX?: TResponsiveValue<TBoxSpacing>;
    paddingY?: TResponsiveValue<TBoxSpacing>;
    pointerEvents?: TBoxPointerEvents;
    radius?: TBoxRadius;
    textAlign?: TResponsiveValue<TBoxTextAlign>;
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
    background,
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
    flexFill,
    flexWrap,
    fontSize,
    fontWeight,
    gradient,
    height,
    invisible,
    justifyContent,
    margin,
    marginTop,
    marginBottom,
    marginLeft,
    marginRight,
    marginX,
    marginY,
    opacity,
    overflow,
    padding,
    paddingTop,
    paddingBottom,
    paddingLeft,
    paddingRight,
    paddingX,
    paddingY,
    pointerEvents,
    radius,
    textAlign,
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
            [`bg-${background}`]: background,
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
            [`fs-${fontSize}`]: fontSize,
            [`fw-${fontWeight}`]: fontWeight,
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
        generateResponsiveClasses('flex', flexFill, 'fill'),
        generateResponsiveClasses('flex', flexWrap),
        generateResponsiveClasses('justify-content', justifyContent),
        generateResponsiveClasses('m', margin),
        generateResponsiveClasses('mt', marginTop),
        generateResponsiveClasses('mb', marginBottom),
        generateResponsiveClasses('ms', marginLeft),
        generateResponsiveClasses('me', marginRight),
        generateResponsiveClasses('mx', marginX),
        generateResponsiveClasses('my', marginY),
        generateResponsiveClasses('p', padding),
        generateResponsiveClasses('pt', paddingTop),
        generateResponsiveClasses('pb', paddingBottom),
        generateResponsiveClasses('ps', paddingLeft),
        generateResponsiveClasses('pe', paddingRight),
        generateResponsiveClasses('px', paddingX),
        generateResponsiveClasses('py', paddingY),
        generateResponsiveClasses('text', textAlign),
        className
    );

    return <Component className={classNames} {...props} />;
};

export default Box;

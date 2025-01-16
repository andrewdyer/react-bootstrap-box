import React from 'react';

import classnames from 'classnames';

import {
    generateBorderClassNames,
    generateFlexboxClassNames,
    generateMarginClassNames,
    generatePaddingClassNames,
    generateTypographyClassNames,
    generateVisualClassNames,
    type BorderProps,
    type FlexboxProps,
    type MarginProps,
    type PaddingProps,
    type TypographyProps,
    type VisualProps
} from '../../utilities';

export interface BoxProps
    extends BorderProps,
        MarginProps,
        PaddingProps,
        FlexboxProps,
        TypographyProps,
        VisualProps,
        React.HTMLAttributes<HTMLElement> {
    as?: keyof React.ReactHTML;
}

const Box = ({
    as: Component = 'div',
    className,

    // Border properties
    border,
    borderTop,
    borderEnd,
    borderBottom,
    borderStart,
    borderColor,
    borderWidth,

    // Flexbox properties
    alignItems,
    alignSelf,
    display,
    flexDirection,
    flexFill,
    flexWrap,
    justifyContent,

    // Margin properties
    margin,
    marginTop,
    marginBottom,
    marginLeft,
    marginRight,
    marginX,
    marginY,

    // Padding properties
    padding,
    paddingTop,
    paddingBottom,
    paddingLeft,
    paddingRight,
    paddingX,
    paddingY,

    // Typography properties
    fontSize,
    fontWeight,
    textAlign,
    textWrap,
    textNoWrap,
    textTransform,
    wordBreak,

    // Visual properties
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
    width,

    ...props
}: BoxProps) => {
    const borderClassNames: string = generateBorderClassNames({
        border,
        borderTop,
        borderEnd,
        borderBottom,
        borderStart,
        borderColor,
        borderWidth
    });

    const flexboxClassNames: string = generateFlexboxClassNames({
        alignItems,
        alignSelf,
        display,
        flexDirection,
        flexFill,
        flexWrap,
        justifyContent
    });

    const marginClassNames: string = generateMarginClassNames({
        margin,
        marginTop,
        marginBottom,
        marginLeft,
        marginRight,
        marginX,
        marginY
    });

    const paddingClassNames: string = generatePaddingClassNames({
        padding,
        paddingTop,
        paddingBottom,
        paddingLeft,
        paddingRight,
        paddingX,
        paddingY
    });

    const typographyClassNames = generateTypographyClassNames({
        fontSize,
        fontWeight,
        textAlign,
        textWrap,
        textNoWrap,
        textTransform,
        wordBreak
    });

    const visualClassNames = generateVisualClassNames({
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
    });

    const classNames = classnames(
        borderClassNames,
        flexboxClassNames,
        marginClassNames,
        paddingClassNames,
        typographyClassNames,
        visualClassNames,
        className
    );

    return <Component className={classNames} {...props} />;
};

export default Box;

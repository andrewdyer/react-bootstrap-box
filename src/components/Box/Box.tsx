import React from 'react';

import classnames from 'classnames';

import {
  generateBorderClassNames,
  generateFlexboxClassNames,
  generateMarginClassNames,
  generatePaddingClassNames,
  generatePositionClassNames,
  generateTypographyClassNames,
  generateVisualClassNames,
  type BorderProps,
  type FlexboxProps,
  type MarginProps,
  type PaddingProps,
  type PositionProps,
  type TypographyProps,
  type VisualProps,
} from '../../utilities';

export type BoxProps = BorderProps &
  MarginProps &
  PaddingProps &
  PositionProps &
  FlexboxProps &
  TypographyProps &
  VisualProps;

export type TagProps<T extends React.ElementType = 'div'> = {
  tag?: T;
} & React.ComponentPropsWithoutRef<T>;

export type BoxWithTagProps<T extends React.ElementType = 'div'> = TagProps<T> &
  BoxProps;

const Box = <T extends React.ElementType = 'div'>({
  tag,
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
  flexGrow,
  flexShrink,
  flexWrap,
  justifyContent,
  order,

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

  // Position properties
  position,
  top,
  start,
  bottom,
  end,

  // Typography properties
  fontSize,
  fontWeight,
  lineHeight,
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
  minViewportHeight,
  minViewportWidth,
  opacity,
  overflow,
  pointerEvents,
  radius,
  small,
  userSelect,
  visible,
  viewportHeight,
  viewportWidth,
  width,

  ...props
}: BoxWithTagProps<T>) => {
  const Tag = tag || 'div';

  const borderClassNames: string = generateBorderClassNames({
    border,
    borderTop,
    borderEnd,
    borderBottom,
    borderStart,
    borderColor,
    borderWidth,
  });

  const flexboxClassNames: string = generateFlexboxClassNames({
    alignItems,
    alignSelf,
    display,
    flexDirection,
    flexFill,
    flexGrow,
    flexShrink,
    flexWrap,
    justifyContent,
    order,
  });

  const marginClassNames: string = generateMarginClassNames({
    margin,
    marginTop,
    marginBottom,
    marginLeft,
    marginRight,
    marginX,
    marginY,
  });

  const paddingClassNames: string = generatePaddingClassNames({
    padding,
    paddingTop,
    paddingBottom,
    paddingLeft,
    paddingRight,
    paddingX,
    paddingY,
  });

  const positionClassNames: string = generatePositionClassNames({
    position,
    top,
    start,
    bottom,
    end,
  });

  const typographyClassNames = generateTypographyClassNames({
    fontSize,
    fontWeight,
    lineHeight,
    textAlign,
    textWrap,
    textNoWrap,
    textTransform,
    wordBreak,
  });

  const visualClassNames = generateVisualClassNames({
    align,
    background,
    color,
    gradient,
    height,
    invisible,
    minViewportHeight,
    minViewportWidth,
    opacity,
    overflow,
    pointerEvents,
    radius,
    small,
    userSelect,
    visible,
    viewportHeight,
    viewportWidth,
    width,
  });

  const classNames = classnames(
    borderClassNames,
    flexboxClassNames,
    marginClassNames,
    paddingClassNames,
    positionClassNames,
    typographyClassNames,
    visualClassNames,
    className
  );

  return <Tag className={classNames} {...props} />;
};

export default Box;

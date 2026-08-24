import classnames from 'classnames';

import type {
  TBoxAlign,
  TBoxOpacity,
  TBoxOverflow,
  TBoxPointerEvents,
  TBoxRadius,
  TBoxSizing,
  TBoxUserSelect,
} from '../../types';

export interface VisualProps {
  align?: TBoxAlign;
  background?: string;
  color?: string;
  gradient?: boolean;
  height?: TBoxSizing;
  invisible?: boolean;
  minViewportHeight?: boolean;
  minViewportWidth?: boolean;
  opacity?: TBoxOpacity;
  overflow?: TBoxOverflow;
  pointerEvents?: TBoxPointerEvents;
  radius?: TBoxRadius;
  small?: boolean;
  userSelect?: TBoxUserSelect;
  visible?: boolean;
  viewportHeight?: boolean;
  viewportWidth?: boolean;
  width?: TBoxSizing;
}

const generateVisualClassNames = ({
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
}: VisualProps): string => {
  return classnames({
    [`align-${align}`]: align,
    [`bg-${background}`]: background,
    ['bg-gradient']: gradient,
    [`invisible`]: invisible,
    [`h-${height}`]: height,
    ['min-vh-100']: minViewportHeight,
    ['min-vw-100']: minViewportWidth,
    [`opacity-${opacity}`]: opacity,
    [`overflow-${overflow}`]: overflow,
    [`pe-${pointerEvents}`]: pointerEvents,
    [`${radius}`]: radius,
    small: small,
    [`text-${color}`]: color,
    [`user-select-${userSelect}`]: userSelect,
    [`visible`]: visible,
    ['vh-100']: viewportHeight,
    ['vw-100']: viewportWidth,
    [`w-${width}`]: width,
  });
};

export default generateVisualClassNames;

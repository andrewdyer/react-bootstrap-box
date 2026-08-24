import classnames from 'classnames';

import type {
  Opacity,
  Overflow,
  PointerEvents,
  Radius,
  Size,
  UserSelect,
  VerticalAlign,
} from '../../types';

export interface VisualProps {
  align?: VerticalAlign;
  background?: string;
  color?: string;
  gradient?: boolean;
  height?: Size;
  invisible?: boolean;
  minViewportHeight?: boolean;
  minViewportWidth?: boolean;
  opacity?: Opacity;
  overflow?: Overflow;
  pointerEvents?: PointerEvents;
  radius?: Radius;
  small?: boolean;
  userSelect?: UserSelect;
  visible?: boolean;
  viewportHeight?: boolean;
  viewportWidth?: boolean;
  width?: Size;
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

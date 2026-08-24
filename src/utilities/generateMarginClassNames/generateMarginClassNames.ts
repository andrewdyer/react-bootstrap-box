import classnames from 'classnames';

import { generateResponsiveClasses } from '..';
import type { ResponsiveValue, Spacing } from '../../types';

export type MarginProps = {
  margin?: ResponsiveValue<Spacing>;
  marginTop?: ResponsiveValue<Spacing>;
  marginBottom?: ResponsiveValue<Spacing>;
  marginLeft?: ResponsiveValue<Spacing>;
  marginRight?: ResponsiveValue<Spacing>;
  marginX?: ResponsiveValue<Spacing>;
  marginY?: ResponsiveValue<Spacing>;
};

const generateMarginClassNames = ({
  margin,
  marginTop,
  marginBottom,
  marginLeft,
  marginRight,
  marginX,
  marginY,
}: MarginProps): string => {
  return classnames(
    generateResponsiveClasses('m', margin),
    generateResponsiveClasses('mt', marginTop),
    generateResponsiveClasses('mb', marginBottom),
    generateResponsiveClasses('ms', marginLeft),
    generateResponsiveClasses('me', marginRight),
    generateResponsiveClasses('mx', marginX),
    generateResponsiveClasses('my', marginY)
  );
};

export default generateMarginClassNames;

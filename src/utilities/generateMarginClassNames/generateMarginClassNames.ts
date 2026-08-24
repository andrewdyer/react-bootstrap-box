import classnames from 'classnames';

import { generateResponsiveClasses } from '..';
import type { MarginSpacing, ResponsiveValue } from '../../types';

export type MarginProps = {
  margin?: ResponsiveValue<MarginSpacing>;
  marginTop?: ResponsiveValue<MarginSpacing>;
  marginBottom?: ResponsiveValue<MarginSpacing>;
  marginLeft?: ResponsiveValue<MarginSpacing>;
  marginRight?: ResponsiveValue<MarginSpacing>;
  marginX?: ResponsiveValue<MarginSpacing>;
  marginY?: ResponsiveValue<MarginSpacing>;
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

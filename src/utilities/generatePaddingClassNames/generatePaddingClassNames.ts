import classnames from 'classnames';

import { generateResponsiveClasses } from '..';
import type { ResponsiveValue, Spacing } from '../../types';

export type PaddingProps = {
  padding?: ResponsiveValue<Spacing>;
  paddingTop?: ResponsiveValue<Spacing>;
  paddingBottom?: ResponsiveValue<Spacing>;
  paddingLeft?: ResponsiveValue<Spacing>;
  paddingRight?: ResponsiveValue<Spacing>;
  paddingX?: ResponsiveValue<Spacing>;
  paddingY?: ResponsiveValue<Spacing>;
};

const generatePaddingClassNames = ({
  padding,
  paddingTop,
  paddingBottom,
  paddingLeft,
  paddingRight,
  paddingX,
  paddingY,
}: PaddingProps): string => {
  return classnames(
    generateResponsiveClasses('p', padding),
    generateResponsiveClasses('pt', paddingTop),
    generateResponsiveClasses('pb', paddingBottom),
    generateResponsiveClasses('ps', paddingLeft),
    generateResponsiveClasses('pe', paddingRight),
    generateResponsiveClasses('px', paddingX),
    generateResponsiveClasses('py', paddingY)
  );
};

export default generatePaddingClassNames;

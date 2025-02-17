import classnames from 'classnames';

import { generateResponsiveClasses } from '..';
import type { TBoxSpacing, TResponsiveValue } from '../../types';

export interface PaddingProps {
  padding?: TResponsiveValue<TBoxSpacing>;
  paddingTop?: TResponsiveValue<TBoxSpacing>;
  paddingBottom?: TResponsiveValue<TBoxSpacing>;
  paddingLeft?: TResponsiveValue<TBoxSpacing>;
  paddingRight?: TResponsiveValue<TBoxSpacing>;
  paddingX?: TResponsiveValue<TBoxSpacing>;
  paddingY?: TResponsiveValue<TBoxSpacing>;
}

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

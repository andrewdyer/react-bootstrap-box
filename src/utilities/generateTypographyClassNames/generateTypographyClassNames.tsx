import classnames from 'classnames';

import { generateResponsiveClasses } from '..';
import type {
  FontSize,
  FontWeight,
  LineHeight,
  ResponsiveValue,
  TextAlign,
  TextTransform,
} from '../../types';

export type TypographyProps = {
  fontSize?: FontSize;
  fontWeight?: FontWeight;
  lineHeight?: LineHeight;
  textAlign?: ResponsiveValue<TextAlign>;
  textWrap?: boolean;
  textNoWrap?: boolean;
  textTransform?: TextTransform;
  wordBreak?: boolean;
};

const generateTypographyClassNames = ({
  fontSize,
  fontWeight,
  lineHeight,
  textAlign,
  textWrap,
  textNoWrap,
  textTransform,
  wordBreak,
}: TypographyProps): string => {
  return classnames(
    {
      [`fs-${fontSize}`]: fontSize,
      [`fw-${fontWeight}`]: fontWeight,
      [`lh-${lineHeight}`]: lineHeight,
      'text-wrap': textWrap,
      'text-nowrap': textNoWrap,
      [`text-${textTransform}`]: textTransform,
      'text-break': wordBreak,
    },
    generateResponsiveClasses('text', textAlign)
  );
};

export default generateTypographyClassNames;

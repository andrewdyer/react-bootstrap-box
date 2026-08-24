import classnames from 'classnames';

import { generateResponsiveClasses } from '..';
import type {
  AlignItems,
  AlignSelf,
  Display,
  FlexDirection,
  FlexGrow,
  FlexShrink,
  FlexWrap,
  JustifyContent,
  Order,
  ResponsiveValue,
} from '../../types';

export interface FlexboxProps {
  alignItems?: ResponsiveValue<AlignItems>;
  alignSelf?: ResponsiveValue<AlignSelf>;
  display?: ResponsiveValue<Display>;
  flexDirection?: ResponsiveValue<FlexDirection>;
  flexFill?: ResponsiveValue<boolean>;
  flexGrow?: ResponsiveValue<FlexGrow>;
  flexShrink?: ResponsiveValue<FlexShrink>;
  flexWrap?: ResponsiveValue<FlexWrap>;
  justifyContent?: ResponsiveValue<JustifyContent>;
  order?: ResponsiveValue<Order>;
}

const generateFlexboxClassNames = ({
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
}: FlexboxProps): string => {
  return classnames(
    generateResponsiveClasses('align-items', alignItems),
    generateResponsiveClasses('align-self', alignSelf),
    generateResponsiveClasses('d', display),
    generateResponsiveClasses('flex', flexDirection),
    generateResponsiveClasses('flex', flexFill, 'fill'),
    generateResponsiveClasses('flex', flexGrow, 'grow'),
    generateResponsiveClasses('flex', flexShrink, 'shrink'),
    generateResponsiveClasses('flex', flexWrap),
    generateResponsiveClasses('justify-content', justifyContent),
    generateResponsiveClasses('order', order)
  );
};

export default generateFlexboxClassNames;

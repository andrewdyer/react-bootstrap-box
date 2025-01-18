import classnames from 'classnames';

import { generateResponsiveClasses } from '..';
import type {
    TBoxAlignItems,
    TBoxAlignSelf,
    TBoxDisplay,
    TBoxFlexDirection,
    TBoxFlexWrap,
    TBoxJustifyContent,
    TBoxOrder,
    TResponsiveValue
} from '../../types';

export interface FlexboxProps {
    alignItems?: TResponsiveValue<TBoxAlignItems>;
    alignSelf?: TResponsiveValue<TBoxAlignSelf>;
    display?: TResponsiveValue<TBoxDisplay>;
    flexDirection?: TResponsiveValue<TBoxFlexDirection>;
    flexFill?: TResponsiveValue<boolean>;
    flexWrap?: TResponsiveValue<TBoxFlexWrap>;
    justifyContent?: TResponsiveValue<TBoxJustifyContent>;
    order?: TResponsiveValue<TBoxOrder>;
}

const generateFlexboxClassNames = ({
    alignItems,
    alignSelf,
    display,
    flexDirection,
    flexFill,
    flexWrap,
    justifyContent,
    order
}: FlexboxProps): string => {
    return classnames(
        generateResponsiveClasses('align-items', alignItems),
        generateResponsiveClasses('align-self', alignSelf),
        generateResponsiveClasses('d', display),
        generateResponsiveClasses('flex', flexDirection),
        generateResponsiveClasses('flex', flexFill, 'fill'),
        generateResponsiveClasses('flex', flexWrap),
        generateResponsiveClasses('justify-content', justifyContent),
        generateResponsiveClasses('order', order)
    );
};

export default generateFlexboxClassNames;

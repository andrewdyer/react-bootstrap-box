import classnames from 'classnames';

import { generateResponsiveClasses } from '..';
import type {
    TBoxAlignItems,
    TBoxAlignSelf,
    TBoxDisplay,
    TBoxFlexDirection,
    TBoxFlexWrap,
    TBoxJustifyContent,
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
}

const generateFlexboxClassNames = ({
    alignItems,
    alignSelf,
    display,
    flexDirection,
    flexFill,
    flexWrap,
    justifyContent
}: FlexboxProps): string => {
    return classnames(
        generateResponsiveClasses('align-items', alignItems),
        generateResponsiveClasses('align-self', alignSelf),
        generateResponsiveClasses('d', display),
        generateResponsiveClasses('flex', flexDirection),
        generateResponsiveClasses('flex', flexFill, 'fill'),
        generateResponsiveClasses('flex', flexWrap),
        generateResponsiveClasses('justify-content', justifyContent)
    );
};

export default generateFlexboxClassNames;

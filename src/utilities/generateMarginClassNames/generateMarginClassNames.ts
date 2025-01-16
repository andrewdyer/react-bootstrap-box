import classnames from 'classnames';

import { generateResponsiveClasses } from '..';
import type { TBoxSpacing, TResponsiveValue } from '../../types';

export interface MarginProps {
    margin?: TResponsiveValue<TBoxSpacing>;
    marginTop?: TResponsiveValue<TBoxSpacing>;
    marginBottom?: TResponsiveValue<TBoxSpacing>;
    marginLeft?: TResponsiveValue<TBoxSpacing>;
    marginRight?: TResponsiveValue<TBoxSpacing>;
    marginX?: TResponsiveValue<TBoxSpacing>;
    marginY?: TResponsiveValue<TBoxSpacing>;
}

const generateMarginClassNames = ({
    margin,
    marginTop,
    marginBottom,
    marginLeft,
    marginRight,
    marginX,
    marginY
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

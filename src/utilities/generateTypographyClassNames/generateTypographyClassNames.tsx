import classnames from 'classnames';

import { generateResponsiveClasses } from '..';
import type {
    TBoxFontSize,
    TBoxFontWeight,
    TBoxTextAlign,
    TBoxTextTransform,
    TResponsiveValue
} from '../../types';

export interface TypographyProps {
    fontSize?: TBoxFontSize;
    fontWeight?: TBoxFontWeight;
    textAlign?: TResponsiveValue<TBoxTextAlign>;
    textWrap?: boolean;
    textNoWrap?: boolean;
    textTransform?: TBoxTextTransform;
    wordBreak?: boolean;
}

const generateTypographyClassNames = ({
    fontSize,
    fontWeight,
    textAlign,
    textWrap,
    textNoWrap,
    textTransform,
    wordBreak
}: TypographyProps): string => {
    return classnames(
        {
            [`fs-${fontSize}`]: fontSize,
            [`fw-${fontWeight}`]: fontWeight,
            'text-wrap': textWrap,
            'text-nowrap': textNoWrap,
            [`text-${textTransform}`]: textTransform,
            'text-break': wordBreak
        },
        generateResponsiveClasses('text', textAlign)
    );
};

export default generateTypographyClassNames;

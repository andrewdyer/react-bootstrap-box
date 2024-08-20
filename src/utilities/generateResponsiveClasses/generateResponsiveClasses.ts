import type { TResponsiveBreakpoints, TResponsiveValue } from '../../types';

const generateResponsiveClasses = <T extends string>(
    prefix: string,
    value: TResponsiveValue<T | boolean> | boolean,
    suffix?: string
): { [key: string]: boolean } => {
    const result: { [key: string]: boolean } = {};

    if (typeof value === 'string') {
        // Handle a single string value without breakpoints
        result[`${prefix}-${value}`] = true;
    } else if (typeof value === 'boolean' && value === true && suffix) {
        // Handle a single boolean value with the provided suffix
        result[`${prefix}-${suffix}`] = true;
    } else if (typeof value === 'object' && value !== null) {
        // Define an array of valid breakpoints
        const breakpoints: TResponsiveBreakpoints[] = ['xs', 'sm', 'md', 'lg', 'xl', 'xxl'];

        for (const breakpoint of breakpoints) {
            const val = value[breakpoint];

            if (val) {
                if (typeof val === 'boolean' && val === true && suffix) {
                    // Handle boolean values for breakpoints with the provided suffix
                    if (breakpoint === 'xs') {
                        result[`${prefix}-${suffix}`] = true;
                    } else {
                        result[`${prefix}-${breakpoint}-${suffix}`] = true;
                    }
                } else {
                    // Handle string values for breakpoints
                    if (breakpoint === 'xs') {
                        result[`${prefix}-${val}`] = true;
                    } else {
                        result[`${prefix}-${breakpoint}-${val}`] = true;
                    }
                }
            }
        }
    }

    return result;
};

export default generateResponsiveClasses;

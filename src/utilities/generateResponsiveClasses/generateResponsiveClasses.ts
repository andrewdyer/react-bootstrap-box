import type { TResponsiveBreakpoints, TResponsiveValue } from '../../types';

const generateResponsiveClasses = <T extends string>(
    prefix: string,
    value: TResponsiveValue<T>
): { [key: string]: boolean } => {
    const result: { [key: string]: boolean } = {};

    if (typeof value === 'string') {
        // Handle a single string value without breakpoints
        result[`${prefix}-${value}`] = true;
    } else if (typeof value === 'object' && value !== null) {
        // Define an array of valid breakpoints
        const breakpoints: TResponsiveBreakpoints[] = ['xs', 'sm', 'md', 'lg', 'xl', 'xxl'];

        for (const breakpoint of breakpoints) {
            const val = value[breakpoint];

            if (val) {
                // Exclude 'xs' from the breakpoint class
                if (breakpoint === 'xs') {
                    result[`${prefix}-${val}`] = true;
                } else {
                    result[`${prefix}-${breakpoint}-${val}`] = true;
                }
            }
        }
    }

    return result;
};

export default generateResponsiveClasses;

export type TBoxAlign = 'baseline' | 'top' | 'middle' | 'bottom' | 'text-top' | 'text-bottom';

export type TBoxSizing = '25' | '50' | '75' | '100' | 'auto';

export type TResponsiveBreakpoints = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';

export type TResponsiveValue<T> = T | { [key in TResponsiveBreakpoints]?: T } | undefined;

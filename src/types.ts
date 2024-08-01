export type TBoxAlign = 'baseline' | 'top' | 'middle' | 'bottom' | 'text-top' | 'text-bottom';

export type TBoxAlignItems = 'start' | 'end' | 'center' | 'baseline' | 'stretch';

export type TBoxAlignSelf = 'start' | 'end' | 'center' | 'baseline' | 'stretch';

export type TBoxDisplay =
    | 'none'
    | 'inline'
    | 'inline-block'
    | 'block'
    | 'grid'
    | 'table'
    | 'table-cell'
    | 'table-row'
    | 'flex'
    | 'inline-flex';

export type TBoxFlex = 'row' | 'column' | 'row-reverse' | 'column-reverse';

export type TBoxJustifyContent = 'start' | 'end' | 'center' | 'between' | 'around' | 'evenly';

export type TBoxSizing = '25' | '50' | '75' | '100' | 'auto';

export type TResponsiveBreakpoints = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';

export type TResponsiveValue<T> = T | { [key in TResponsiveBreakpoints]?: T } | undefined;

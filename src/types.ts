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

export type TBoxFlexDirection = 'row' | 'column' | 'row-reverse' | 'column-reverse';

export type TBoxJustifyContent = 'start' | 'end' | 'center' | 'between' | 'around' | 'evenly';

export type TBoxOpacity = '25' | '50' | '75' | '100';

export type TBoxOverflow = 'visible' | 'hidden' | 'scroll' | 'auto';

export type TBoxPointerEvents = 'none' | 'auto';

export type TBoxSizing = '25' | '50' | '75' | '100' | 'auto';

export type TBoxSpacing = '0' | '1' | '2' | '3' | '4' | '5' | 'auto';

export type TBoxUserSelect = 'none' | 'all' | 'auto';

export type TResponsiveBreakpoints = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';

export type TResponsiveValue<T> = T | { [key in TResponsiveBreakpoints]?: T } | undefined;

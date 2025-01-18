export type TBoxAlign = 'baseline' | 'top' | 'middle' | 'bottom' | 'text-top' | 'text-bottom';

export type TBoxAlignItems = 'start' | 'end' | 'center' | 'baseline' | 'stretch';

export type TBoxAlignSelf = 'start' | 'end' | 'center' | 'baseline' | 'stretch';

export type TBoxBorderWidth = '1' | '2' | '3' | '4' | '5';

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

export type TBoxFlexWrap = 'wrap' | 'nowrap' | 'wrap-reverse';

export type TBoxFontSize = '1' | '2' | '3' | '4' | '5' | '6';

export type TBoxFontWeight =
    | 'bold'
    | 'bolder'
    | 'semibold'
    | 'medium'
    | 'normal'
    | 'light'
    | 'lighter';

export type TBoxJustifyContent = 'start' | 'end' | 'center' | 'between' | 'around' | 'evenly';

export type TBoxLineHeight = '1' | 'sm' | 'base' | 'lg';

export type TBoxOpacity = '25' | '50' | '75' | '100';

export type TBoxOverflow = 'visible' | 'hidden' | 'scroll' | 'auto';

export type TBoxPointerEvents = 'none' | 'auto';

export type TBoxRadius =
    | 'rounded'
    | 'rounded-top'
    | 'rounded-end'
    | 'rounded-bottom'
    | 'rounded-start'
    | 'rounded-circle'
    | 'rounded-pill';

export type TBoxSizing = '25' | '50' | '75' | '100' | 'auto';

export type TBoxSpacing = '0' | '1' | '2' | '3' | '4' | '5' | 'auto';

export type TBoxTextAlign = 'start' | 'center' | 'end';

export type TBoxTextTransform = 'lowercase' | 'uppercase' | 'capitalize';

export type TBoxUserSelect = 'none' | 'all' | 'auto';

export type TResponsiveBreakpoints = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';

export type TResponsiveValue<T> = T | { [key in TResponsiveBreakpoints]?: T } | undefined;

export type TBoxOrder = '0' | '1' | '2' | '3' | '4' | '5' | 'first' | 'last';

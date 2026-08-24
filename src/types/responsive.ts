export type ResponsiveBreakpoint = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';

export type ResponsiveValue<T> =
  | T
  | { [key in ResponsiveBreakpoint]?: T }
  | undefined;

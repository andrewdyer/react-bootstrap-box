export type TResponsiveBreakpoints = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';

export type TResponsiveValue<T> =
  | T
  | { [key in TResponsiveBreakpoints]?: T }
  | undefined;

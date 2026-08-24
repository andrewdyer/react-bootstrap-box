import type * as React from 'react';

export type PolymorphicRef<T extends React.ElementType> =
  React.ComponentPropsWithRef<T>['ref'];

type MergeProps<BaseProps, OverrideProps> = Omit<
  BaseProps,
  keyof OverrideProps
> &
  OverrideProps;

export type PolymorphicComponentProps<
  T extends React.ElementType,
  Props extends object = object,
> = MergeProps<React.ComponentPropsWithoutRef<T>, Props & { as?: T }>;

export type PolymorphicComponent<
  DefaultElement extends React.ElementType,
  Props extends object = object,
> = <T extends React.ElementType = DefaultElement>(
  props: PolymorphicComponentProps<T, Props> & {
    ref?: PolymorphicRef<T>;
  }
) => React.ReactElement | null;

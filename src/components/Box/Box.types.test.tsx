import { createRef, type ReactElement, type ReactNode } from 'react';
import { expectTypeOf } from 'vitest';

import Box, { type BoxProps } from './Box';

describe('Box types', () => {
  test('supports props and refs for the default element', () => {
    const ref = createRef<HTMLDivElement>();
    const props = {
      padding: '3',
      title: 'Content',
    } satisfies BoxProps;
    const element = <Box ref={ref} {...props} />;

    expectTypeOf(element).toMatchTypeOf<ReactElement>();
  });

  test('supports props and refs for an intrinsic as element', () => {
    const ref = createRef<HTMLButtonElement>();
    const props = {
      disabled: true,
      padding: '2',
      type: 'submit',
    } satisfies BoxProps<'button'>;
    const element = <Box as="button" ref={ref} {...props} />;

    expectTypeOf(element).toMatchTypeOf<ReactElement>();
  });

  test('supports required props and refs for a custom as component', () => {
    type CustomLinkProps = {
      children?: ReactNode;
      to: string;
    };

    const CustomLink = ({ to, ...props }: CustomLinkProps) => (
      <a href={to} {...props} />
    );
    const props = {
      margin: 'auto',
      to: '/dashboard',
    } satisfies BoxProps<typeof CustomLink>;
    const element = <Box as={CustomLink} {...props} />;

    expectTypeOf(element).toMatchTypeOf<ReactElement>();
  });

  test('rejects props unsupported by the rendered element', () => {
    // @ts-expect-error href is not a div prop
    const defaultElement = <Box href="/dashboard" />;
    // @ts-expect-error href is not a button prop
    const buttonElement = <Box as="button" href="/dashboard" />;

    expectTypeOf(defaultElement).toMatchTypeOf<ReactElement>();
    expectTypeOf(buttonElement).toMatchTypeOf<ReactElement>();
  });

  test('requires custom component props', () => {
    const CustomLink = ({ to }: { to: string }) => <a href={to} />;

    // @ts-expect-error to is required by CustomLink
    const element = <Box as={CustomLink} />;

    expectTypeOf(element).toMatchTypeOf<ReactElement>();
  });

  test('rejects refs for a different intrinsic element', () => {
    const anchorRef = createRef<HTMLAnchorElement>();

    // @ts-expect-error an anchor ref cannot target a button
    const element = <Box as="button" ref={anchorRef} />;

    expectTypeOf(element).toMatchTypeOf<ReactElement>();
  });

  test('rejects unsupported utility values', () => {
    // @ts-expect-error Bootstrap does not provide padding-auto utilities
    const element = <Box padding="auto" />;

    expectTypeOf(element).toMatchTypeOf<ReactElement>();
  });
});

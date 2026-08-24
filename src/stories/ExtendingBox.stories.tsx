import classnames from 'classnames';
import * as React from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';

import Box, { type BoxOwnProps } from '../components/Box';
import type {
  PolymorphicComponent,
  PolymorphicComponentProps,
  PolymorphicRef,
} from '../types';

const DEFAULT_ELEMENT = 'div' as const;

type DefaultElement = typeof DEFAULT_ELEMENT;
type CardOwnProps = BoxOwnProps & {
  elevated?: boolean;
};

const Card = React.forwardRef(
  (
    {
      as,
      className,
      elevated = false,
      ...props
    }: PolymorphicComponentProps<DefaultElement, CardOwnProps>,
    ref: PolymorphicRef<DefaultElement>
  ) => (
    <Box
      as={as || DEFAULT_ELEMENT}
      ref={ref}
      className={classnames('card', { shadow: elevated }, className)}
      padding="4"
      background="light"
      border
      radius="rounded"
      {...props}
    />
  )
) as PolymorphicComponent<DefaultElement, CardOwnProps>;

const meta = {
  title: 'Guides/Extending Box',
  parameters: {
    layout: 'centered',
  },
} satisfies Meta;

export default meta;

type Story = StoryObj<typeof meta>;

export const CompleteExample: Story = {
  name: 'Complete example',
  tags: ['!dev'],
  render: () => (
    <Card as="article" aria-labelledby="card-title" elevated>
      <Box as="h2" id="card-title" fontSize="4">
        Build with Box
      </Box>
      <Box as="p" marginBottom="0">
        Compose design-system components without giving up native element props.
      </Box>
    </Card>
  ),
};

import type { Meta, StoryObj } from '@storybook/react-vite';
import Box from '../components/Box/Box';
import ExampleDocsPage from './ExampleDocsPage';

const meta = {
  title: 'Examples/Flexbox',
  component: Box,
  parameters: {
    layout: 'centered',
    controls: { disable: true },
    docs: { page: ExampleDocsPage },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Box>;

export default meta;

type Story = StoryObj<typeof meta>;

export const DirectionAndAlignment: Story = {
  parameters: {
    docs: {
      description: {
        story:
          'Combine `display="flex"` with `flexDirection`, `justifyContent`, and `alignItems` to control the direction and alignment of child boxes.',
      },
      source: {
        code: `<Box
  display="flex"
  flexDirection="row"
  justifyContent="between"
  alignItems="center"
>
  <Box>One</Box>
  <Box>Two</Box>
  <Box>Three</Box>
</Box>`,
      },
    },
  },
  render: () => (
    <Box
      display="flex"
      flexDirection="row"
      justifyContent="between"
      alignItems="center"
      background="light"
      border
      padding="2"
      style={{ width: 520, height: 180 }}
    >
      <Item>One</Item>
      <Item paddingY="4">Two</Item>
      <Item>Three</Item>
    </Box>
  ),
};

export const WrapAndFill: Story = {
  parameters: {
    docs: {
      description: {
        story:
          '`flexWrap` allows items to move onto additional rows, while `flexFill` makes each item share the available width.',
      },
      source: {
        code: `<Box display="flex" flexWrap="wrap">
  <Box flexFill>One</Box>
  <Box flexFill>Two</Box>
  <Box flexFill>Three</Box>
</Box>`,
      },
    },
  },
  render: () => (
    <Box display="flex" flexWrap="wrap" style={{ width: 420 }}>
      <Item flexFill>One</Item>
      <Item flexFill>Two with more content</Item>
      <Item flexFill>Three</Item>
    </Box>
  ),
};

export const SelfAlignmentAndOrder: Story = {
  parameters: {
    docs: {
      description: {
        story:
          'Individual flex items can override cross-axis alignment with `alignSelf` and visual order with `order`.',
      },
      source: {
        code: `<Box display="flex">
  <Box order="last" alignSelf="start">First in markup</Box>
  <Box order="1" alignSelf="center">Second in markup</Box>
  <Box order="first" alignSelf="end">Third in markup</Box>
</Box>`,
      },
    },
  },
  render: () => (
    <Box
      display="flex"
      background="light"
      border
      padding="2"
      style={{ width: 520, height: 200 }}
    >
      <Item order="last" alignSelf="start">
        order=&quot;last&quot;
      </Item>
      <Item order="1" alignSelf="center">
        order=&quot;1&quot;
      </Item>
      <Item order="first" alignSelf="end">
        order=&quot;first&quot;
      </Item>
    </Box>
  ),
};

export const ResponsiveFlexbox: Story = {
  parameters: {
    docs: {
      description: {
        story:
          'Flexbox props accept breakpoint objects. Resize the canvas to switch this example from a vertical layout to a horizontal one at `md`.',
      },
      source: {
        code: `<Box
  display="flex"
  flexDirection={{ xs: "column", md: "row" }}
  justifyContent={{ xs: "start", md: "between" }}
>
  ...
</Box>`,
      },
    },
  },
  render: () => (
    <Box
      display="flex"
      flexDirection={{ xs: 'column', md: 'row' }}
      justifyContent={{ xs: 'start', md: 'between' }}
      background="light"
      border
      padding="2"
      style={{ width: '80vw' }}
    >
      <Item>One</Item>
      <Item>Two</Item>
      <Item>Three</Item>
    </Box>
  ),
};

export const FlexGrow: Story = {
  parameters: {
    docs: {
      description: {
        story:
          'The `flexGrow` prop controls whether a flex item grows to fill the available space in its flex container. Below, the middle item uses `flexGrow="1"` while its siblings use `flexGrow="0"`.',
      },
      source: {
        code: `<Box display="flex">
  <Box flexGrow="0">flexGrow="0"</Box>
  <Box flexGrow="1">flexGrow="1"</Box>
  <Box flexGrow="0">flexGrow="0"</Box>
</Box>`,
      },
    },
  },
  render: () => (
    <Box display="flex" width="100">
      <Box
        background="primary"
        color="white"
        padding="3"
        margin="1"
        flexGrow="0"
      >
        flexGrow=&quot;0&quot;
      </Box>
      <Box
        background="secondary"
        color="white"
        padding="3"
        margin="1"
        flexGrow="1"
      >
        flexGrow=&quot;1&quot;
      </Box>
      <Box
        background="primary"
        color="white"
        padding="3"
        margin="1"
        flexGrow="0"
      >
        flexGrow=&quot;0&quot;
      </Box>
    </Box>
  ),
};

export const FlexShrink: Story = {
  parameters: {
    docs: {
      description: {
        story:
          'The `flexShrink` prop controls whether a flex item is allowed to shrink below its content size when the flex container is too narrow. Below, the first item uses `flexShrink="0"` so it never shrinks, while the second uses `flexShrink="1"` and shrinks to make room.',
      },
      source: {
        code: `<Box display="flex">
  <Box flexShrink="0">flexShrink="0"</Box>
  <Box flexShrink="1">flexShrink="1"</Box>
</Box>`,
      },
    },
  },
  render: () => (
    <div style={{ display: 'flex', width: 320, border: '1px dashed #adb5bd' }}>
      <Box background="primary" color="white" padding="3" flexShrink="0">
        flexShrink=&quot;0&quot;
      </Box>
      <Box background="secondary" color="white" padding="3" flexShrink="1">
        flexShrink=&quot;1&quot; — this item has enough text content to overflow
        and shrink to fit.
      </Box>
    </div>
  ),
};

export const DirectionAndWrappingValues: Story = {
  parameters: {
    docs: {
      description: {
        story:
          '`flexDirection` supports row and column layouts in either direction. `flexWrap` supports no wrapping, normal wrapping, and reverse wrapping.',
      },
      source: {
        code: `<Box display="flex" flexDirection="row">...</Box>
<Box display="flex" flexDirection="column">...</Box>
<Box display="flex" flexDirection="row-reverse">...</Box>
<Box display="flex" flexDirection="column-reverse">...</Box>

<Box display="flex" flexWrap="nowrap">...</Box>
<Box display="flex" flexWrap="wrap">...</Box>
<Box display="flex" flexWrap="wrap-reverse">...</Box>`,
      },
    },
  },
  render: () => (
    <Box display="flex" flexWrap="wrap" style={{ width: 620 }}>
      {(['row', 'column', 'row-reverse', 'column-reverse'] as const).map(
        (flexDirection) => (
          <Box key={flexDirection} margin="2">
            <Box as="code">{flexDirection}</Box>
            <Box
              display="flex"
              flexDirection={flexDirection}
              background="light"
              border
              style={{ width: 260, minHeight: 90 }}
            >
              <Item>One</Item>
              <Item>Two</Item>
            </Box>
          </Box>
        )
      )}
      {(['nowrap', 'wrap', 'wrap-reverse'] as const).map((flexWrap) => (
        <Box key={flexWrap} margin="2">
          <Box as="code">{flexWrap}</Box>
          <Box
            display="flex"
            flexWrap={flexWrap}
            background="light"
            border
            style={{ width: 260 }}
          >
            <Item style={{ width: 120 }}>One</Item>
            <Item style={{ width: 120 }}>Two</Item>
            <Item style={{ width: 120 }}>Three</Item>
          </Box>
        </Box>
      ))}
    </Box>
  ),
};

export const JustifyContentValues: Story = {
  parameters: {
    docs: {
      description: {
        story:
          'The `justifyContent` prop supports every Bootstrap main-axis alignment value.',
      },
      source: {
        code: `<Box display="flex" justifyContent="start">...</Box>
<Box display="flex" justifyContent="end">...</Box>
<Box display="flex" justifyContent="center">...</Box>
<Box display="flex" justifyContent="between">...</Box>
<Box display="flex" justifyContent="around">...</Box>
<Box display="flex" justifyContent="evenly">...</Box>`,
      },
    },
  },
  render: () => (
    <Box style={{ width: 520 }}>
      {(['start', 'end', 'center', 'between', 'around', 'evenly'] as const).map(
        (justifyContent) => (
          <Box key={justifyContent} marginBottom="2">
            <Box as="code">{justifyContent}</Box>
            <Box
              display="flex"
              justifyContent={justifyContent}
              background="light"
              border
            >
              <Item>One</Item>
              <Item>Two</Item>
            </Box>
          </Box>
        )
      )}
    </Box>
  ),
};

export const AlignmentValues: Story = {
  parameters: {
    docs: {
      description: {
        story:
          '`alignItems` and `alignSelf` share the values `start`, `end`, `center`, `baseline`, and `stretch`.',
      },
      source: {
        code: `<Box display="flex" alignItems="start">...</Box>
<Box display="flex" alignItems="end">...</Box>
<Box display="flex" alignItems="center">...</Box>
<Box display="flex" alignItems="baseline">...</Box>
<Box display="flex" alignItems="stretch">...</Box>`,
      },
    },
  },
  render: () => (
    <Box display="flex" flexWrap="wrap" style={{ width: 620 }}>
      {(['start', 'end', 'center', 'baseline', 'stretch'] as const).map(
        (alignItems) => (
          <Box key={alignItems} margin="2">
            <Box as="code">{alignItems}</Box>
            <Box
              display="flex"
              alignItems={alignItems}
              background="light"
              border
              style={{ width: 170, height: 110 }}
            >
              <Item>One</Item>
              <Item paddingY="4">Two</Item>
            </Box>
          </Box>
        )
      )}
    </Box>
  ),
};

export const OrderValues: Story = {
  parameters: {
    docs: {
      description: {
        story:
          'The `order` prop supports `first`, numeric values from `0` through `5`, and `last`.',
      },
      source: {
        code: `<Box order="first">first</Box>
<Box order="0">0</Box>
<Box order="1">1</Box>
<Box order="2">2</Box>
<Box order="3">3</Box>
<Box order="4">4</Box>
<Box order="5">5</Box>
<Box order="last">last</Box>`,
      },
    },
  },
  render: () => (
    <Box display="flex" flexWrap="wrap">
      {(['first', '0', '1', '2', '3', '4', '5', 'last'] as const).map(
        (order) => (
          <Item key={order} order={order}>
            {order}
          </Item>
        )
      )}
    </Box>
  ),
};

const Item = (props: React.ComponentProps<typeof Box>) => (
  <Box background="primary" color="white" padding="3" margin="1" {...props} />
);

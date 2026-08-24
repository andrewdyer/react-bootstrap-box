import type { Meta, StoryObj } from '@storybook/react-vite';
import Box from '../components/Box/Box';
import ExampleDocsPage from './ExampleDocsPage';

const meta = {
  title: 'Examples/Visual',
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

export const ParentRelativeSizing: Story = {
  parameters: {
    docs: {
      description: {
        story:
          'The `width` and `height` props size a box relative to its parent using Bootstrap’s percentage and auto utilities.',
      },
      source: {
        code: `<Box width="25" height="25">25%</Box>
<Box width="50" height="50">50%</Box>
<Box width="100" height="100">100%</Box>`,
      },
    },
  },
  render: () => (
    <Box
      display="flex"
      alignItems="end"
      background="light"
      border
      style={{ width: 480, height: 240 }}
    >
      <Box width="25" height="25" background="primary" color="white">
        25%
      </Box>
      <Box width="25" height="50" background="secondary" color="white">
        50%
      </Box>
      <Box width="50" height="100" background="success" color="white">
        100%
      </Box>
    </Box>
  ),
};

export const Radius: Story = {
  parameters: {
    docs: {
      description: {
        story:
          'The `radius` prop applies Bootstrap’s rounded corner, directional, circle, and pill utilities.',
      },
      source: {
        code: `<Box radius="rounded">Rounded</Box>
<Box radius="rounded-circle">Circle</Box>
<Box radius="rounded-pill">Pill</Box>`,
      },
    },
  },
  render: () => (
    <Box display="flex" alignItems="center">
      <Tile background="primary" color="white" radius="rounded">
        Rounded
      </Tile>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        background="secondary"
        color="white"
        radius="rounded-circle"
        margin="2"
        style={{ width: 100, height: 100 }}
      >
        Circle
      </Box>
      <Tile background="success" color="white" radius="rounded-pill">
        Pill
      </Tile>
    </Box>
  ),
};

export const VisibilityAndOpacity: Story = {
  parameters: {
    docs: {
      description: {
        story:
          'Control transparency with `opacity` and reserve layout space for hidden content with `invisible`. Use `visible` to reverse inherited visibility.',
      },
      source: {
        code: `<Box opacity="25">25% opacity</Box>
<Box opacity="50">50% opacity</Box>
<Box invisible>Invisible but still occupies space</Box>
<Box invisible>
  <Box visible>Visible child</Box>
</Box>`,
      },
    },
  },
  render: () => (
    <Box display="flex">
      <Tile background="primary" color="white" opacity="25">
        25%
      </Tile>
      <Tile background="primary" color="white" opacity="50">
        50%
      </Tile>
      <Tile background="primary" color="white" opacity="100">
        100%
      </Tile>
      <Tile background="danger" color="white" invisible>
        Invisible
      </Tile>
      <Box invisible margin="2" padding="3">
        <Box visible background="success" color="white">
          Visible child
        </Box>
      </Box>
    </Box>
  ),
};

export const OverflowAndInteraction: Story = {
  parameters: {
    docs: {
      description: {
        story:
          'Use `overflow` to control clipped or scrolling content. `userSelect` and `pointerEvents` control text selection and pointer interaction.',
      },
      source: {
        code: `<Box overflow="auto">Scrollable content</Box>
<Box userSelect="none">This text cannot be selected</Box>
<Box pointerEvents="none">Pointer events disabled</Box>`,
      },
    },
  },
  render: () => (
    <Box display="flex" alignItems="start">
      <Box
        overflow="auto"
        border
        padding="2"
        margin="2"
        style={{ width: 180, height: 100 }}
      >
        This box has enough content to overflow its fixed height. Scroll to read
        the remainder of the example content.
      </Box>
      <Box userSelect="none" border padding="2" margin="2">
        Try selecting this text
      </Box>
      <Box pointerEvents="none" border padding="2" margin="2">
        <a href="https://example.com">This link ignores pointer events</a>
      </Box>
    </Box>
  ),
};

export const InlineTextUtilities: Story = {
  parameters: {
    docs: {
      description: {
        story:
          'Use `align` for vertical alignment of inline elements and `small` for Bootstrap’s smaller secondary text.',
      },
      source: {
        code: `<Box tag="span" align="top">Top aligned</Box>
<Box tag="span" align="middle">Middle aligned</Box>
<Box tag="span" small>Small text</Box>`,
      },
    },
  },
  render: () => (
    <Box fontSize="3">
      Baseline
      <Box tag="span" align="top" fontSize="6" marginX="2">
        top
      </Box>
      <Box tag="span" align="middle" fontSize="6" marginX="2">
        middle
      </Box>
      <Box tag="span" small marginLeft="2">
        small text
      </Box>
    </Box>
  ),
};

const Tile = (props: React.ComponentProps<typeof Box>) => (
  <Box padding="3" margin="2" {...props} />
);

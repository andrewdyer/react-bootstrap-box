import type { Meta, StoryObj } from '@storybook/react-vite';
import Box from '../components/Box/Box';
import ExampleDocsPage from './ExampleDocsPage';

const meta = {
  title: 'Examples/Padding',
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

export const Scale: Story = {
  parameters: {
    docs: {
      description: {
        story:
          'Padding utilities support Bootstrap’s complete `0` through `5` spacing scale.',
      },
      source: {
        code: `<Box padding="0">0</Box>
<Box padding="1">1</Box>
<Box padding="2">2</Box>
<Box padding="3">3</Box>
<Box padding="4">4</Box>
<Box padding="5">5</Box>`,
      },
    },
  },
  render: () => (
    <Box display="flex" alignItems="end">
      {(['0', '1', '2', '3', '4', '5'] as const).map((padding) => (
        <Box
          key={padding}
          padding={padding}
          background="primary"
          color="white"
          margin="1"
        >
          {padding}
        </Box>
      ))}
    </Box>
  ),
};

export const AllSidesAndAxes: Story = {
  parameters: {
    docs: {
      description: {
        story:
          'Use `padding` for every side or `paddingX` and `paddingY` to control the horizontal and vertical axes.',
      },
      source: {
        code: `<Box padding="3">padding="3"</Box>
<Box paddingX="5" paddingY="2">paddingX="5" paddingY="2"</Box>`,
      },
    },
  },
  render: () => (
    <Box display="flex" alignItems="start">
      <Box background="primary" color="white" padding="3" margin="2">
        padding=&quot;3&quot;
      </Box>
      <Box
        background="secondary"
        color="white"
        paddingX="5"
        paddingY="2"
        margin="2"
      >
        paddingX / paddingY
      </Box>
    </Box>
  ),
};

export const DirectionalPadding: Story = {
  parameters: {
    docs: {
      description: {
        story:
          'Use the directional props to apply different padding to each side. Left and right generate Bootstrap’s start and end utilities.',
      },
      source: {
        code: `<Box
  paddingTop="1"
  paddingRight="2"
  paddingBottom="3"
  paddingLeft="4"
>
  Directional padding
</Box>`,
      },
    },
  },
  render: () => (
    <Box
      background="success"
      color="white"
      paddingTop="1"
      paddingRight="2"
      paddingBottom="3"
      paddingLeft="4"
    >
      Directional padding
    </Box>
  ),
};

export const ResponsivePadding: Story = {
  parameters: {
    docs: {
      description: {
        story:
          'Padding props accept breakpoint objects. Resize the canvas to see the padding increase at the `md` breakpoint.',
      },
      source: {
        code: `<Box padding={{ xs: "2", md: "5" }}>Responsive padding</Box>`,
      },
    },
  },
  render: () => (
    <Box background="primary" color="white" padding={{ xs: '2', md: '5' }}>
      Resize the canvas
    </Box>
  ),
};

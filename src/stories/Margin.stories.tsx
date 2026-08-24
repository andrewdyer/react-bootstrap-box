import type { Meta, StoryObj } from '@storybook/react-vite';
import Box from '../components/Box/Box';
import ExampleDocsPage from './ExampleDocsPage';

const meta = {
  title: 'Examples/Margin',
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
          'Margin utilities support Bootstrap’s complete `0` through `5` spacing scale.',
      },
      source: {
        code: `<Box margin="0">0</Box>
<Box margin="1">1</Box>
<Box margin="2">2</Box>
<Box margin="3">3</Box>
<Box margin="4">4</Box>
<Box margin="5">5</Box>`,
      },
    },
  },
  render: () => (
    <Box display="flex" alignItems="end" background="light" border>
      {(['0', '1', '2', '3', '4', '5'] as const).map((margin) => (
        <Box
          key={margin}
          margin={margin}
          background="primary"
          color="white"
          padding="1"
        >
          {margin}
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
          'Use `margin` for every side or `marginX` and `marginY` to control the horizontal and vertical axes.',
      },
      source: {
        code: `<Box margin="3">margin="3"</Box>
<Box marginX="4" marginY="2">marginX="4" marginY="2"</Box>`,
      },
    },
  },
  render: () => (
    <Box background="light" border>
      <Box background="primary" color="white" margin="3" padding="2">
        margin=&quot;3&quot;
      </Box>
      <Box
        background="secondary"
        color="white"
        marginX="4"
        marginY="2"
        padding="2"
      >
        marginX=&quot;4&quot; marginY=&quot;2&quot;
      </Box>
    </Box>
  ),
};

export const DirectionalMargins: Story = {
  parameters: {
    docs: {
      description: {
        story:
          'Use the directional props to apply a different margin to each side. Left and right generate Bootstrap’s start and end utilities.',
      },
      source: {
        code: `<Box
  marginTop="1"
  marginRight="2"
  marginBottom="3"
  marginLeft="4"
>
  Directional margins
</Box>`,
      },
    },
  },
  render: () => (
    <Box background="light" border>
      <Box
        background="success"
        color="white"
        marginTop="1"
        marginRight="2"
        marginBottom="3"
        marginLeft="4"
        padding="2"
      >
        Directional margins
      </Box>
    </Box>
  ),
};

export const AutoMargins: Story = {
  parameters: {
    docs: {
      description: {
        story:
          'Use the `auto` value to absorb available space. Here, `marginLeft="auto"` pushes the final item to the end of the flex container.',
      },
      source: {
        code: `<Box display="flex">
  <Box>First</Box>
  <Box>Second</Box>
  <Box marginLeft="auto">Pushed to the end</Box>
</Box>`,
      },
    },
  },
  render: () => (
    <Box display="flex" background="light" border padding="2" width="100">
      <Box background="primary" color="white" padding="2" marginRight="2">
        First
      </Box>
      <Box background="primary" color="white" padding="2">
        Second
      </Box>
      <Box background="success" color="white" padding="2" marginLeft="auto">
        Pushed to the end
      </Box>
    </Box>
  ),
};

export const ResponsiveMargins: Story = {
  parameters: {
    docs: {
      description: {
        story:
          'Margin props accept breakpoint objects. Resize the canvas to see the margin increase at the `md` breakpoint.',
      },
      source: {
        code: `<Box margin={{ xs: "1", md: "5" }}>Responsive margin</Box>`,
      },
    },
  },
  render: () => (
    <Box background="light" border>
      <Box
        background="primary"
        color="white"
        margin={{ xs: '1', md: '5' }}
        padding="2"
      >
        Resize the canvas
      </Box>
    </Box>
  ),
};

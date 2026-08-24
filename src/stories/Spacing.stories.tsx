import type { Meta, StoryObj } from '@storybook/react-vite';
import Box from '../components/Box/Box';
import ExampleDocsPage from './ExampleDocsPage';

const meta = {
  title: 'Examples/Spacing',
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

export const Margin: Story = {
  parameters: {
    docs: {
      description: {
        story:
          'Margin props add space outside the box. Use `margin` for every side, axis props for a pair of sides, or directional props for one side.',
      },
      source: {
        code: `<Box margin="3">margin="3"</Box>
<Box marginX="4" marginY="2">marginX="4" marginY="2"</Box>
<Box marginTop="1" marginRight="2" marginBottom="3" marginLeft="4">
  Directional margins
</Box>`,
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

export const Padding: Story = {
  parameters: {
    docs: {
      description: {
        story:
          'Padding props add space inside the box. They support all sides, horizontal and vertical axes, and individual directions.',
      },
      source: {
        code: `<Box padding="3">padding="3"</Box>
<Box paddingX="5" paddingY="2">paddingX="5" paddingY="2"</Box>
<Box paddingTop="1" paddingRight="2" paddingBottom="3" paddingLeft="4">
  Directional padding
</Box>`,
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
      <Box
        background="success"
        color="white"
        paddingTop="1"
        paddingRight="2"
        paddingBottom="3"
        paddingLeft="4"
        margin="2"
      >
        Directional padding
      </Box>
    </Box>
  ),
};

export const ResponsiveSpacing: Story = {
  parameters: {
    docs: {
      description: {
        story:
          'Margin and padding props accept breakpoint objects. Resize the canvas to see the spacing increase at the `md` breakpoint.',
      },
      source: {
        code: `<Box
  margin={{ xs: "1", md: "5" }}
  padding={{ xs: "2", md: "5" }}
>
  Responsive spacing
</Box>`,
      },
    },
  },
  render: () => (
    <Box background="light" border>
      <Box
        background="primary"
        color="white"
        margin={{ xs: '1', md: '5' }}
        padding={{ xs: '2', md: '5' }}
      >
        Resize the canvas
      </Box>
    </Box>
  ),
};

import type { Meta, StoryObj } from '@storybook/react-vite';
import Box from '../components/Box/Box';
import ExampleDocsPage from './ExampleDocsPage';

const meta = {
  title: 'Examples/Display',
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

export const DisplayModes: Story = {
  parameters: {
    docs: {
      description: {
        story:
          'Use `display` to change how a Box participates in layout. These examples compare block, inline, and inline-block elements.',
      },
      source: {
        code: `<Box display="block">Block</Box>
<Box as="span" display="inline">Inline</Box>
<Box as="span" display="inline-block">Inline block</Box>`,
      },
    },
  },
  render: () => (
    <Box style={{ width: 520 }}>
      <Sample display="block">display=&quot;block&quot;</Sample>
      <Box>
        Before
        <Sample as="span" display="inline">
          display=&quot;inline&quot;
        </Sample>
        after
      </Box>
      <Box>
        Before
        <Sample as="span" display="inline-block">
          display=&quot;inline-block&quot;
        </Sample>
        after
      </Box>
    </Box>
  ),
};

export const Grid: Story = {
  parameters: {
    docs: {
      description: {
        story:
          'The `grid` display value creates a Bootstrap grid container. Bootstrap gap and column classes can still be supplied through `className`.',
      },
      source: {
        code: `<Box display="grid" className="gap-2">
  <Box>One</Box>
  <Box>Two</Box>
</Box>`,
      },
    },
  },
  render: () => (
    <Box display="grid" className="gap-2" style={{ width: 520 }}>
      <Sample>One</Sample>
      <Sample>Two</Sample>
      <Sample>Three</Sample>
    </Box>
  ),
};

export const FlexAndTableDisplay: Story = {
  parameters: {
    docs: {
      description: {
        story:
          'The remaining display values support flex and table layouts. Use table-row and table-cell together to create the corresponding CSS table structure.',
      },
      source: {
        code: `<Box display="flex">Flex</Box>
<Box display="inline-flex">Inline flex</Box>
<Box display="table">
  <Box display="table-row">
    <Box display="table-cell">Cell</Box>
  </Box>
</Box>`,
      },
    },
  },
  render: () => (
    <Box style={{ width: 520 }}>
      <Sample display="flex">display=&quot;flex&quot;</Sample>
      <Sample display="inline-flex">display=&quot;inline-flex&quot;</Sample>
      <Box display="table" border marginTop="2" width="100">
        <Box display="table-row">
          <Box display="table-cell" border padding="2">
            table-cell
          </Box>
          <Box display="table-cell" border padding="2">
            table-cell
          </Box>
        </Box>
      </Box>
    </Box>
  ),
};

export const ResponsiveDisplay: Story = {
  parameters: {
    docs: {
      description: {
        story:
          'Display values can change by breakpoint. Resize the canvas: this Box is hidden below `md` and displayed as a block from `md` upwards.',
      },
      source: {
        code: `<Box display={{ xs: "none", md: "block" }}>
  Visible from the md breakpoint
</Box>`,
      },
    },
  },
  render: () => (
    <Box style={{ width: '80vw' }}>
      <Box display={{ xs: 'block', md: 'none' }} color="secondary">
        Resize wider to reveal the other Box.
      </Box>
      <Sample display={{ xs: 'none', md: 'block' }}>
        Visible from the md breakpoint
      </Sample>
    </Box>
  ),
};

const Sample = (props: React.ComponentProps<typeof Box>) => (
  <Box background="primary" color="white" padding="2" margin="1" {...props} />
);

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

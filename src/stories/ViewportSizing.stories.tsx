import type { Meta, StoryObj } from '@storybook/react-vite';
import Box from '../components/Box/Box';
import ExampleDocsPage from './ExampleDocsPage';

const meta = {
  title: 'Examples/Viewport sizing',
  component: Box,
  parameters: {
    layout: 'fullscreen',
    controls: { disable: true },
    docs: { page: ExampleDocsPage },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Box>;

export default meta;

type Story = StoryObj<typeof meta>;

export const MinimumViewportWidth: Story = {
  parameters: {
    docs: {
      description: {
        story:
          'The `minViewportWidth` prop sets the minimum width of the box to 100% of the viewport width using Bootstrap’s `min-vw-100` utility.',
      },
      source: {
        code: `<Box minViewportWidth>minViewportWidth</Box>`,
      },
    },
  },
  render: () => (
    <Box minViewportWidth background="primary" color="white" padding="3">
      minViewportWidth
    </Box>
  ),
};

export const MinimumViewportHeight: Story = {
  parameters: {
    docs: {
      description: {
        story:
          'The `minViewportHeight` prop sets the minimum height of the box to 100% of the viewport height using Bootstrap’s `min-vh-100` utility.',
      },
      source: {
        code: `<Box minViewportHeight>minViewportHeight</Box>`,
      },
    },
  },
  render: () => (
    <Box minViewportHeight background="secondary" color="white" padding="3">
      minViewportHeight
    </Box>
  ),
};

export const ViewportWidth: Story = {
  parameters: {
    docs: {
      description: {
        story:
          'The `viewportWidth` prop sets the width of the box to 100% of the viewport width using Bootstrap’s `vw-100` utility.',
      },
      source: {
        code: `<Box viewportWidth>viewportWidth</Box>`,
      },
    },
  },
  render: () => (
    <Box viewportWidth background="primary" color="white" padding="3">
      viewportWidth
    </Box>
  ),
};

export const ViewportHeight: Story = {
  parameters: {
    docs: {
      description: {
        story:
          'The `viewportHeight` prop sets the height of the box to 100% of the viewport height using Bootstrap’s `vh-100` utility.',
      },
      source: {
        code: `<Box viewportHeight>viewportHeight</Box>`,
      },
    },
  },
  render: () => (
    <Box viewportHeight background="secondary" color="white" padding="3">
      viewportHeight
    </Box>
  ),
};

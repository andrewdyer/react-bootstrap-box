import type { Meta, StoryObj } from '@storybook/react-vite';
import Box from '../components/Box/Box';
import ExampleDocsPage from './ExampleDocsPage';

const meta = {
  title: 'Examples/Sizing',
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
          'The `width` and `height` props size a Box relative to its parent using Bootstrap’s percentage utilities.',
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

export const AutomaticSizing: Story = {
  parameters: {
    docs: {
      description: {
        story:
          'Use `width="auto"` or `height="auto"` to restore the browser’s automatic sizing after another rule assigned a size.',
      },
      source: {
        code: `<Box width="auto">Automatic width</Box>
<Box width="75">75% width</Box>`,
      },
    },
  },
  render: () => (
    <Box background="light" border padding="2" style={{ width: 480 }}>
      <Box
        width="auto"
        background="primary"
        color="white"
        padding="2"
        marginBottom="2"
      >
        width=&quot;auto&quot;
      </Box>
      <Box width="75" background="success" color="white" padding="2">
        width=&quot;75&quot;
      </Box>
    </Box>
  ),
};

export const SizingValues: Story = {
  parameters: {
    docs: {
      description: {
        story:
          'Both `width` and `height` accept `25`, `50`, `75`, `100`, and `auto`.',
      },
      source: {
        code: `<Box width="25">25%</Box>
<Box width="50">50%</Box>
<Box width="75">75%</Box>
<Box width="100">100%</Box>
<Box width="auto">auto</Box>`,
      },
    },
  },
  render: () => (
    <Box style={{ width: 520 }}>
      <Box marginBottom="3">
        {(['25', '50', '75', '100', 'auto'] as const).map((width) => (
          <Box
            key={width}
            width={width}
            background="primary"
            color="white"
            padding="1"
            marginBottom="1"
          >
            width=&quot;{width}&quot;
          </Box>
        ))}
      </Box>
      <Box
        display="flex"
        alignItems="end"
        background="light"
        border
        style={{ height: 180 }}
      >
        {(['25', '50', '75', '100', 'auto'] as const).map((height) => (
          <Box
            key={height}
            height={height}
            background="success"
            color="white"
            padding="1"
            marginRight="1"
          >
            {height}
          </Box>
        ))}
      </Box>
    </Box>
  ),
};

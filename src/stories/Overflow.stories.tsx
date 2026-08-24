import type { Meta, StoryObj } from '@storybook/react-vite';
import Box from '../components/Box/Box';
import ExampleDocsPage from './ExampleDocsPage';

const meta = {
  title: 'Examples/Overflow',
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

export const OverflowValues: Story = {
  parameters: {
    docs: {
      description: {
        story:
          'Use `overflow` to keep overflowing content visible, hide it, or provide automatic or permanent scrollbars.',
      },
      source: {
        code: `<Box overflow="visible">Visible overflow</Box>
<Box overflow="hidden">Hidden overflow</Box>
<Box overflow="auto">Automatic scrollbars</Box>
<Box overflow="scroll">Permanent scrollbars</Box>`,
      },
    },
  },
  render: () => (
    <Box display="flex" flexWrap="wrap" style={{ maxWidth: 520 }}>
      {(['visible', 'hidden', 'auto', 'scroll'] as const).map((overflow) => (
        <Box
          key={overflow}
          overflow={overflow}
          border
          padding="2"
          margin="2"
          style={{ width: 220, height: 90 }}
        >
          overflow=&quot;{overflow}&quot; — this content is intentionally long
          enough to exceed the fixed height of its Box.
        </Box>
      ))}
    </Box>
  ),
};

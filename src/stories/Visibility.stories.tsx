import type { Meta, StoryObj } from '@storybook/react-vite';
import Box from '../components/Box/Box';
import ExampleDocsPage from './ExampleDocsPage';

const meta = {
  title: 'Examples/Visibility',
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

export const Opacity: Story = {
  parameters: {
    docs: {
      description: {
        story:
          'The `opacity` prop applies Bootstrap’s 25, 50, 75, and 100 percent opacity utilities.',
      },
      source: {
        code: `<Box opacity="25">25%</Box>
<Box opacity="50">50%</Box>
<Box opacity="75">75%</Box>
<Box opacity="100">100%</Box>`,
      },
    },
  },
  render: () => (
    <Box display="flex">
      {(['25', '50', '75', '100'] as const).map((opacity) => (
        <Tile key={opacity} opacity={opacity}>
          {opacity}%
        </Tile>
      ))}
    </Box>
  ),
};

export const Visibility: Story = {
  parameters: {
    docs: {
      description: {
        story:
          'Use `invisible` to hide content while preserving its layout space and `visible` to reverse inherited visibility.',
      },
      source: {
        code: `<Box invisible>Invisible but still occupies space</Box>
<Box invisible>
  <Box visible>Visible child</Box>
</Box>`,
      },
    },
  },
  render: () => (
    <Box display="flex" background="light" border>
      <Tile>Visible</Tile>
      <Tile invisible>Invisible</Tile>
      <Box invisible margin="2" padding="3">
        <Box visible background="success" color="white">
          Visible child
        </Box>
      </Box>
    </Box>
  ),
};

const Tile = (props: React.ComponentProps<typeof Box>) => (
  <Box background="primary" color="white" padding="3" margin="2" {...props} />
);

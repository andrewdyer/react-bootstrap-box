import type { Meta, StoryObj } from '@storybook/react-vite';
import Box from '../components/Box/Box';
import ExampleDocsPage from './ExampleDocsPage';

const meta = {
  title: 'Examples/Position',
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

export const PositionValues: Story = {
  parameters: {
    docs: {
      description: {
        story:
          'The `position` prop applies Bootstrap’s static, relative, absolute, fixed, and sticky position utilities. This example uses `position="relative"` to establish a containing block for its child.',
      },
      source: {
        code: `<Box position="relative">
  <Box position="absolute" top="0" start="0">
    position="absolute"
  </Box>
</Box>`,
      },
    },
  },
  render: () => (
    <Box
      position="relative"
      background="light"
      border
      radius="rounded"
      width="100"
      padding="5"
    >
      <Box
        position="absolute"
        top="0"
        start="0"
        background="primary"
        color="white"
        padding="2"
      >
        position=&quot;absolute&quot;
      </Box>
    </Box>
  ),
};

export const EdgePositions: Story = {
  parameters: {
    docs: {
      description: {
        story:
          'The `top`, `start`, `bottom`, and `end` props position an element at `0`, `50`, or `100` percent from the corresponding edge.',
      },
      source: {
        code: `<Box position="relative">
  <Box position="absolute" top="0" start="0" />
  <Box position="absolute" top="0" end="0" />
  <Box position="absolute" top="50" start="50" />
  <Box position="absolute" bottom="0" start="0" />
  <Box position="absolute" bottom="0" end="0" />
</Box>`,
      },
    },
  },
  render: () => (
    <Box
      position="relative"
      background="light"
      border
      radius="rounded"
      style={{ width: 360, height: 240 }}
    >
      <Marker top="0" start="0" label="top-0 start-0" />
      <Marker top="0" end="0" label="top-0 end-0" />
      <Marker top="50" start="50" label="top-50 start-50" />
      <Marker bottom="0" start="0" label="bottom-0 start-0" />
      <Marker bottom="0" end="0" label="bottom-0 end-0" />
    </Box>
  ),
};

type MarkerProps = Pick<
  React.ComponentProps<typeof Box>,
  'top' | 'start' | 'bottom' | 'end'
> & {
  label: string;
};

const Marker = ({ label, ...position }: MarkerProps) => (
  <Box
    position="absolute"
    background="primary"
    color="white"
    padding="1"
    small
    {...position}
  >
    {label}
  </Box>
);

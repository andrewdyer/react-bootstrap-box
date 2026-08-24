import type { Meta, StoryObj } from '@storybook/react-vite';
import Box from '../components/Box/Box';
import ExampleDocsPage from './ExampleDocsPage';

const meta = {
  title: 'Examples/Interaction',
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

export const UserSelection: Story = {
  parameters: {
    docs: {
      description: {
        story:
          'The `userSelect` prop can disable selection, select all content at once, or restore the browser’s automatic behaviour.',
      },
      source: {
        code: `<Box userSelect="none">Cannot be selected</Box>
<Box userSelect="all">Selects all at once</Box>
<Box userSelect="auto">Automatic selection</Box>`,
      },
    },
  },
  render: () => (
    <Box>
      <Sample userSelect="none">Try selecting this text</Sample>
      <Sample userSelect="all">Click to select all of this text</Sample>
      <Sample userSelect="auto">Select any part of this text</Sample>
    </Box>
  ),
};

export const PointerEvents: Story = {
  parameters: {
    docs: {
      description: {
        story:
          'Use `pointerEvents="none"` to prevent an element from becoming the target of pointer input and `auto` to restore the default.',
      },
      source: {
        code: `<Box pointerEvents="none">Pointer events disabled</Box>
<Box pointerEvents="auto">Pointer events enabled</Box>`,
      },
    },
  },
  render: () => (
    <Box display="flex">
      <Sample pointerEvents="none">
        <a href="#disabled">This link ignores pointer events</a>
      </Sample>
      <Sample pointerEvents="auto">
        <a href="#enabled">This link accepts pointer events</a>
      </Sample>
    </Box>
  ),
};

const Sample = (props: React.ComponentProps<typeof Box>) => (
  <Box border padding="2" margin="2" {...props} />
);

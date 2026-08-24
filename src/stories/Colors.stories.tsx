import type { Meta, StoryObj } from '@storybook/react-vite';
import Box from '../components/Box/Box';
import ExampleDocsPage from './ExampleDocsPage';

const meta = {
  title: 'Examples/Colors',
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

export const Background: Story = {
  parameters: {
    docs: {
      description: {
        story:
          'The `background` prop applies a Bootstrap background color. Add `gradient` to overlay Bootstrap’s standard background gradient.',
      },
      source: {
        code: `<Box background="light">Light</Box>
<Box background="warning">Warning</Box>
<Box background="info" gradient>Info with gradient</Box>`,
      },
    },
  },
  render: () => (
    <Box display="flex" flexWrap="wrap">
      <Tile background="light">Light</Tile>
      <Tile background="warning">Warning</Tile>
      <Tile background="info" gradient>
        Info with gradient
      </Tile>
    </Box>
  ),
};

export const TextColor: Story = {
  parameters: {
    docs: {
      description: {
        story:
          'The `color` prop applies a Bootstrap text color without changing the element’s background.',
      },
      source: {
        code: `<Box color="primary">Primary text</Box>
<Box color="success">Success text</Box>
<Box color="danger">Danger text</Box>`,
      },
    },
  },
  render: () => (
    <Box>
      <Tile color="primary">Primary text</Tile>
      <Tile color="success">Success text</Tile>
      <Tile color="danger">Danger text</Tile>
    </Box>
  ),
};

export const BackgroundAndText: Story = {
  parameters: {
    docs: {
      description: {
        story:
          'Combine `background` and `color` to create accessible theme-color treatments with appropriate contrast.',
      },
      source: {
        code: `<Box background="primary" color="white">Primary</Box>
<Box background="success" color="white">Success</Box>
<Box background="warning" color="dark">Warning</Box>`,
      },
    },
  },
  render: () => (
    <Box display="flex" flexWrap="wrap">
      <Tile background="primary" color="white">
        Primary
      </Tile>
      <Tile background="success" color="white">
        Success
      </Tile>
      <Tile background="warning" color="dark">
        Warning
      </Tile>
    </Box>
  ),
};

const Tile = (props: React.ComponentProps<typeof Box>) => (
  <Box padding="3" margin="2" {...props} />
);

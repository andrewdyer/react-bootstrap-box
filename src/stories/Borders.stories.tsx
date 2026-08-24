import type { Meta, StoryObj } from '@storybook/react-vite';
import Box from '../components/Box/Box';
import ExampleDocsPage from './ExampleDocsPage';

const meta = {
  title: 'Examples/Borders',
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

export const AdditiveBorders: Story = {
  parameters: {
    docs: {
      description: {
        story:
          'Use `border` to add a border on every side, or a directional border prop to target a single side.',
      },
      source: {
        code: `<Box border>border</Box>
<Box borderTop>borderTop</Box>
<Box borderEnd>borderEnd</Box>
<Box borderBottom>borderBottom</Box>
<Box borderStart>borderStart</Box>`,
      },
    },
  },
  render: () => (
    <Box display="flex" flexWrap="wrap">
      <Sample border>border</Sample>
      <Sample borderTop>borderTop</Sample>
      <Sample borderEnd>borderEnd</Sample>
      <Sample borderBottom>borderBottom</Sample>
      <Sample borderStart>borderStart</Sample>
    </Box>
  ),
};

export const SubtractiveBorders: Story = {
  parameters: {
    docs: {
      description: {
        story:
          'Set a directional border prop to `0` to remove that side from an element that already has a border.',
      },
      source: {
        code: `<Box border borderTop={0}>borderTop={0}</Box>
<Box border borderEnd={0}>borderEnd={0}</Box>
<Box border borderBottom={0}>borderBottom={0}</Box>
<Box border borderStart={0}>borderStart={0}</Box>`,
      },
    },
  },
  render: () => (
    <Box display="flex" flexWrap="wrap">
      <Sample border borderTop={0}>
        borderTop=&#123;0&#125;
      </Sample>
      <Sample border borderEnd={0}>
        borderEnd=&#123;0&#125;
      </Sample>
      <Sample border borderBottom={0}>
        borderBottom=&#123;0&#125;
      </Sample>
      <Sample border borderStart={0}>
        borderStart=&#123;0&#125;
      </Sample>
    </Box>
  ),
};

export const ColorAndWidth: Story = {
  parameters: {
    docs: {
      description: {
        story:
          'Combine `borderColor` and `borderWidth` with `border` to control a border’s theme color and thickness.',
      },
      source: {
        code: `<Box border borderColor="primary" borderWidth="1">...</Box>
<Box border borderColor="success" borderWidth="3">...</Box>
<Box border borderColor="danger" borderWidth="5">...</Box>`,
      },
    },
  },
  render: () => (
    <Box display="flex" flexWrap="wrap">
      <Sample border borderColor="primary" borderWidth="1">
        primary / 1
      </Sample>
      <Sample border borderColor="success" borderWidth="3">
        success / 3
      </Sample>
      <Sample border borderColor="danger" borderWidth="5">
        danger / 5
      </Sample>
    </Box>
  ),
};

const Sample = (props: React.ComponentProps<typeof Box>) => (
  <Box padding="3" margin="2" background="light" {...props} />
);

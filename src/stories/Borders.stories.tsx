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
        code: `<Box border borderWidth="1">1</Box>
<Box border borderWidth="2">2</Box>
<Box border borderWidth="3">3</Box>
<Box border borderWidth="4">4</Box>
<Box border borderWidth="5">5</Box>`,
      },
    },
  },
  render: () => (
    <Box display="flex" flexWrap="wrap">
      {(['1', '2', '3', '4', '5'] as const).map((borderWidth) => (
        <Sample
          key={borderWidth}
          border
          borderColor="primary"
          borderWidth={borderWidth}
        >
          borderWidth=&quot;{borderWidth}&quot;
        </Sample>
      ))}
    </Box>
  ),
};

export const Radius: Story = {
  parameters: {
    docs: {
      description: {
        story:
          'The `radius` prop applies Bootstrap’s rounded corner, directional, circle, and pill utilities.',
      },
      source: {
        code: `<Box radius="rounded">Rounded</Box>
<Box radius="rounded-top">Rounded top</Box>
<Box radius="rounded-end">Rounded end</Box>
<Box radius="rounded-bottom">Rounded bottom</Box>
<Box radius="rounded-start">Rounded start</Box>
<Box radius="rounded-circle">Circle</Box>
<Box radius="rounded-pill">Pill</Box>`,
      },
    },
  },
  render: () => (
    <Box display="flex" alignItems="center" flexWrap="wrap">
      <Sample background="primary" color="white" radius="rounded">
        Rounded
      </Sample>
      <Sample background="primary" color="white" radius="rounded-top">
        Rounded top
      </Sample>
      <Sample background="primary" color="white" radius="rounded-end">
        Rounded end
      </Sample>
      <Sample background="primary" color="white" radius="rounded-bottom">
        Rounded bottom
      </Sample>
      <Sample background="primary" color="white" radius="rounded-start">
        Rounded start
      </Sample>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        background="secondary"
        color="white"
        radius="rounded-circle"
        margin="2"
        style={{ width: 100, height: 100 }}
      >
        Circle
      </Box>
      <Sample background="success" color="white" radius="rounded-pill">
        Pill
      </Sample>
    </Box>
  ),
};

const Sample = (props: React.ComponentProps<typeof Box>) => (
  <Box padding="3" margin="2" background="light" {...props} />
);

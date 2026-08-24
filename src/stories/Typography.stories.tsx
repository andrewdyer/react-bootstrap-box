import type { Meta, StoryObj } from '@storybook/react-vite';
import Box from '../components/Box/Box';
import ExampleDocsPage from './ExampleDocsPage';

const meta = {
  title: 'Examples/Typography',
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

export const FontSizeAndWeight: Story = {
  parameters: {
    docs: {
      description: {
        story:
          'Use `fontSize` to apply Bootstrap’s heading-scale font sizes and `fontWeight` to change the weight.',
      },
      source: {
        code: `<Box fontSize="1" fontWeight="bold">Size 1 / bold</Box>
<Box fontSize="3" fontWeight="semibold">Size 3 / semibold</Box>
<Box fontSize="6" fontWeight="light">Size 6 / light</Box>`,
      },
    },
  },
  render: () => (
    <Box>
      <Box fontSize="1" fontWeight="bold">
        Size 1 / bold
      </Box>
      <Box fontSize="3" fontWeight="semibold">
        Size 3 / semibold
      </Box>
      <Box fontSize="6" fontWeight="light">
        Size 6 / light
      </Box>
    </Box>
  ),
};

export const LineHeight: Story = {
  parameters: {
    docs: {
      description: {
        story:
          'The `lineHeight` prop controls the spacing between lines with Bootstrap’s `1`, `sm`, `base`, and `lg` values.',
      },
      source: {
        code: `<Box lineHeight="1">...</Box>
<Box lineHeight="base">...</Box>
<Box lineHeight="lg">...</Box>`,
      },
    },
  },
  render: () => (
    <Box style={{ maxWidth: 520 }}>
      <Paragraph lineHeight="1">lineHeight=&quot;1&quot;</Paragraph>
      <Paragraph lineHeight="base">lineHeight=&quot;base&quot;</Paragraph>
      <Paragraph lineHeight="lg">lineHeight=&quot;lg&quot;</Paragraph>
    </Box>
  ),
};

export const TextAlignment: Story = {
  parameters: {
    docs: {
      description: {
        story:
          'The responsive `textAlign` prop aligns text at the start, center, or end. Resize the canvas to see this example change at `md`.',
      },
      source: {
        code: `<Box textAlign={{ xs: "start", md: "center", lg: "end" }}>
  Responsive text alignment
</Box>`,
      },
    },
  },
  render: () => (
    <Box
      textAlign={{ xs: 'start', md: 'center', lg: 'end' }}
      background="light"
      border
      padding="3"
      style={{ width: '80vw' }}
    >
      Responsive text alignment
    </Box>
  ),
};

export const TransformAndWrapping: Story = {
  parameters: {
    docs: {
      description: {
        story:
          'Transform text casing with `textTransform`, control wrapping with `textWrap` or `textNoWrap`, and break long words with `wordBreak`.',
      },
      source: {
        code: `<Box textTransform="uppercase">Uppercase text</Box>
<Box textWrap>Text that wraps</Box>
<Box textNoWrap>Text that does not wrap</Box>
<Box wordBreak>AReallyLongWordThatCanBreak</Box>`,
      },
    },
  },
  render: () => (
    <Box style={{ width: 280 }}>
      <Box textTransform="uppercase" marginBottom="2">
        Uppercase text
      </Box>
      <Box textWrap background="light" marginBottom="2">
        This deliberately long line wraps inside its constrained container.
      </Box>
      <Box textNoWrap overflow="hidden" marginBottom="2">
        This deliberately long line does not wrap inside its container.
      </Box>
      <Box wordBreak>
        AReallyLongWordWithoutNaturalBreakPointsThatCanNowBreak
      </Box>
    </Box>
  ),
};

const Paragraph = ({
  children,
  ...props
}: React.ComponentProps<typeof Box>) => (
  <Box background="light" padding="2" marginBottom="2" {...props}>
    {children}: The quick brown fox jumps over the lazy dog. The quick brown fox
    jumps over the lazy dog.
  </Box>
);

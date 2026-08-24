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

export const FontSizes: Story = {
  parameters: {
    docs: {
      description: {
        story:
          'The `fontSize` prop supports every value in Bootstrap’s heading-based size scale.',
      },
      source: {
        code: `<Box fontSize="1">fontSize="1"</Box>
<Box fontSize="2">fontSize="2"</Box>
<Box fontSize="3">fontSize="3"</Box>
<Box fontSize="4">fontSize="4"</Box>
<Box fontSize="5">fontSize="5"</Box>
<Box fontSize="6">fontSize="6"</Box>`,
      },
    },
  },
  render: () => (
    <Box>
      {(['1', '2', '3', '4', '5', '6'] as const).map((fontSize) => (
        <Box key={fontSize} fontSize={fontSize}>
          fontSize=&quot;{fontSize}&quot;
        </Box>
      ))}
    </Box>
  ),
};

export const FontWeights: Story = {
  parameters: {
    docs: {
      description: {
        story:
          'The `fontWeight` prop exposes every Bootstrap font-weight utility.',
      },
      source: {
        code: `<Box fontWeight="bold">bold</Box>
<Box fontWeight="bolder">bolder</Box>
<Box fontWeight="semibold">semibold</Box>
<Box fontWeight="medium">medium</Box>
<Box fontWeight="normal">normal</Box>
<Box fontWeight="light">light</Box>
<Box fontWeight="lighter">lighter</Box>`,
      },
    },
  },
  render: () => (
    <Box fontSize="4">
      {(
        [
          'bold',
          'bolder',
          'semibold',
          'medium',
          'normal',
          'light',
          'lighter',
        ] as const
      ).map((fontWeight) => (
        <Box key={fontWeight} fontWeight={fontWeight}>
          fontWeight=&quot;{fontWeight}&quot;
        </Box>
      ))}
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
<Box lineHeight="sm">...</Box>
<Box lineHeight="base">...</Box>
<Box lineHeight="lg">...</Box>`,
      },
    },
  },
  render: () => (
    <Box style={{ maxWidth: 520 }}>
      <Paragraph lineHeight="1">lineHeight=&quot;1&quot;</Paragraph>
      <Paragraph lineHeight="sm">lineHeight=&quot;sm&quot;</Paragraph>
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
        code: `<Box textTransform="lowercase">LOWERCASE TEXT</Box>
<Box textTransform="uppercase">Uppercase text</Box>
<Box textTransform="capitalize">capitalized text</Box>
<Box textWrap>Text that wraps</Box>
<Box textNoWrap>Text that does not wrap</Box>
<Box wordBreak>AReallyLongWordThatCanBreak</Box>`,
      },
    },
  },
  render: () => (
    <Box style={{ width: 280 }}>
      <Box textTransform="lowercase" marginBottom="2">
        LOWERCASE TEXT
      </Box>
      <Box textTransform="uppercase" marginBottom="2">
        Uppercase text
      </Box>
      <Box textTransform="capitalize" marginBottom="2">
        capitalized text
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

export const InlineTextUtilities: Story = {
  parameters: {
    docs: {
      description: {
        story:
          'Use `align` for vertical alignment of inline elements and `small` for Bootstrap’s smaller secondary text.',
      },
      source: {
        code: `<Box as="span" align="baseline">baseline</Box>
<Box as="span" align="top">top</Box>
<Box as="span" align="middle">middle</Box>
<Box as="span" align="bottom">bottom</Box>
<Box as="span" align="text-top">text-top</Box>
<Box as="span" align="text-bottom">text-bottom</Box>
<Box as="span" small>Small text</Box>`,
      },
    },
  },
  render: () => (
    <Box fontSize="3">
      Reference
      {(
        [
          'baseline',
          'top',
          'middle',
          'bottom',
          'text-top',
          'text-bottom',
        ] as const
      ).map((align) => (
        <Box key={align} as="span" align={align} fontSize="6" marginX="2">
          {align}
        </Box>
      ))}
      <Box as="span" small marginLeft="2">
        small text
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

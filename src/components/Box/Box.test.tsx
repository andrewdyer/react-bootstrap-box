import { render, screen } from '@testing-library/react';
import React from 'react';
import Box from './Box';

describe('Box', () => {
    test('renders box component', () => {
        render(<Box>Hello, World!</Box>);

        const boxElement = screen.getByText(/Hello, World!/i);
        expect(boxElement).toBeInTheDocument();
    });

    test('renders box component as custom element', () => {
        render(<Box tag="section">Hello, World!</Box>);

        const boxElement = screen.getByText(/Hello, World!/i);
        expect(boxElement).toBeInTheDocument();
        expect(boxElement.tagName).toBe('SECTION');
    });

    test('renders box component with custom class', () => {
        render(<Box className="custom-class">Hello, World!</Box>);

        const boxElement = screen.getByText(/Hello, World!/i);
        expect(boxElement).toHaveClass('custom-class');
    });

    test('renders box component with background color', () => {
        render(<Box background="primary">Hello, World!</Box>);

        const boxElement = screen.getByText(/Hello, World!/i);
        expect(boxElement).toHaveClass('bg-primary');
    });

    test('renders box component with gradient background', () => {
        render(<Box gradient={true}>Hello, World!</Box>);

        const boxElement = screen.getByText(/Hello, World!/i);
        expect(boxElement).toHaveClass('bg-gradient');
    });

    test('renders box component with text color', () => {
        render(<Box color="primary">Hello, World!</Box>);

        const boxElement = screen.getByText(/Hello, World!/i);
        expect(boxElement).toHaveClass('text-primary');
    });

    test('renders box component with alignment', () => {
        render(<Box align="middle">Hello, World!</Box>);

        const boxElement = screen.getByText(/Hello, World!/i);
        expect(boxElement).toHaveClass('align-middle');
    });

    test('renders box component as invisible', () => {
        render(<Box invisible={true}>Hello, World!</Box>);

        const boxElement = screen.getByText(/Hello, World!/i);
        expect(boxElement).toHaveClass('invisible');
    });

    test('renders box component as visible', () => {
        render(<Box visible={true}>Hello, World!</Box>);

        const boxElement = screen.getByText(/Hello, World!/i);
        expect(boxElement).toHaveClass('visible');
    });

    test('renders box component with height', () => {
        render(<Box height="50">Hello, World!</Box>);

        const boxElement = screen.getByText(/Hello, World!/i);
        expect(boxElement).toHaveClass('h-50');
    });

    test('renders box component with width', () => {
        render(<Box width="50">Hello, World!</Box>);

        const boxElement = screen.getByText(/Hello, World!/i);
        expect(boxElement).toHaveClass('w-50');
    });

    test('renders box component with display property', () => {
        render(<Box display="block">Hello, World!</Box>);

        const boxElement = screen.getByText(/Hello, World!/i);
        expect(boxElement).toHaveClass('d-block');
    });

    test('renders box component with responsive display property', () => {
        render(<Box display={{ xs: 'none', sm: 'block' }}>Hello, World!</Box>);

        const boxElement = screen.getByText(/Hello, World!/i);
        expect(boxElement).toHaveClass('d-none');
        expect(boxElement).toHaveClass('d-sm-block');
    });

    test('renders box component with flex direction property', () => {
        render(<Box flexDirection="row">Hello, World!</Box>);

        const boxElement = screen.getByText(/Hello, World!/i);
        expect(boxElement).toHaveClass('flex-row');
    });

    test('renders box component with responsive flex direction property', () => {
        render(<Box flexDirection={{ xs: 'row', sm: 'column' }}>Hello, World!</Box>);

        const boxElement = screen.getByText(/Hello, World!/i);
        expect(boxElement).toHaveClass('flex-row');
        expect(boxElement).toHaveClass('flex-sm-column');
    });

    test('renders box component with flex fill property', () => {
        render(<Box flexFill={true}>Hello, World!</Box>);

        const boxElement = screen.getByText(/Hello, World!/i);
        expect(boxElement).toHaveClass('flex-fill');
    });

    test('renders box component with responsive flex fill  property', () => {
        render(<Box flexFill={{ xs: true, sm: true }}>Hello, World!</Box>);

        const boxElement = screen.getByText(/Hello, World!/i);
        expect(boxElement).toHaveClass('flex-fill');
        expect(boxElement).toHaveClass('flex-sm-fill');
    });

    test('renders box component with flex wrap property', () => {
        render(<Box flexWrap="wrap">Hello, World!</Box>);

        const boxElement = screen.getByText(/Hello, World!/i);
        expect(boxElement).toHaveClass('flex-wrap');
    });

    test('renders box component with responsive flex wrap property', () => {
        render(<Box flexWrap={{ xs: 'wrap', sm: 'nowrap' }}>Hello, World!</Box>);

        const boxElement = screen.getByText(/Hello, World!/i);
        expect(boxElement).toHaveClass('flex-wrap');
        expect(boxElement).toHaveClass('flex-sm-nowrap');
    });

    test('renders box component with justify content property', () => {
        render(<Box justifyContent="center">Hello, World!</Box>);

        const boxElement = screen.getByText(/Hello, World!/i);
        expect(boxElement).toHaveClass('justify-content-center');
    });

    test('renders box component with responsive justify content property', () => {
        render(<Box justifyContent={{ xs: 'start', sm: 'end' }}>Hello, World!</Box>);

        const boxElement = screen.getByText(/Hello, World!/i);
        expect(boxElement).toHaveClass('justify-content-start');
        expect(boxElement).toHaveClass('justify-content-sm-end');
    });

    test('renders box component with align items property', () => {
        render(<Box alignItems="center">Hello, World!</Box>);

        const boxElement = screen.getByText(/Hello, World!/i);
        expect(boxElement).toHaveClass('align-items-center');
    });

    test('renders box component with responsive align items property', () => {
        render(<Box alignItems={{ xs: 'start', sm: 'end' }}>Hello, World!</Box>);

        const boxElement = screen.getByText(/Hello, World!/i);
        expect(boxElement).toHaveClass('align-items-start');
        expect(boxElement).toHaveClass('align-items-sm-end');
    });

    test('renders box component with align self property', () => {
        render(<Box alignSelf="center">Hello, World!</Box>);

        const boxElement = screen.getByText(/Hello, World!/i);
        expect(boxElement).toHaveClass('align-self-center');
    });

    test('renders box component with responsive align self property', () => {
        render(<Box alignSelf={{ xs: 'start', sm: 'end' }}>Hello, World!</Box>);

        const boxElement = screen.getByText(/Hello, World!/i);
        expect(boxElement).toHaveClass('align-self-start');
        expect(boxElement).toHaveClass('align-self-sm-end');
    });

    test('renders box component with user select property', () => {
        render(<Box userSelect="none">Hello, World!</Box>);

        const boxElement = screen.getByText(/Hello, World!/i);
        expect(boxElement).toHaveClass('user-select-none');
    });

    test('renders box component with pointer events property', () => {
        render(<Box pointerEvents="none">Hello, World!</Box>);

        const boxElement = screen.getByText(/Hello, World!/i);
        expect(boxElement).toHaveClass('pe-none');
    });

    test('renders box component with opacity property', () => {
        render(<Box opacity="50">Hello, World!</Box>);

        const boxElement = screen.getByText(/Hello, World!/i);
        expect(boxElement).toHaveClass('opacity-50');
    });

    test('renders box component with overflow property', () => {
        render(<Box overflow="hidden">Hello, World!</Box>);

        const boxElement = screen.getByText(/Hello, World!/i);
        expect(boxElement).toHaveClass('overflow-hidden');
    });

    test('renders box component with margin property', () => {
        render(<Box margin="auto">Hello, World!</Box>);

        const boxElement = screen.getByText(/Hello, World!/i);
        expect(boxElement).toHaveClass('m-auto');
    });

    test('renders box component with responsive margin property', () => {
        render(<Box margin={{ xs: 'auto', sm: '0' }}>Hello, World!</Box>);

        const boxElement = screen.getByText(/Hello, World!/i);
        expect(boxElement).toHaveClass('m-auto');
        expect(boxElement).toHaveClass('m-sm-0');
    });

    test('renders box component with margin top property', () => {
        render(<Box marginTop="auto">Hello, World!</Box>);

        const boxElement = screen.getByText(/Hello, World!/i);
        expect(boxElement).toHaveClass('mt-auto');
    });

    test('renders box component with responsive margin top property', () => {
        render(<Box marginTop={{ xs: 'auto', sm: '0' }}>Hello, World!</Box>);

        const boxElement = screen.getByText(/Hello, World!/i);
        expect(boxElement).toHaveClass('mt-auto');
        expect(boxElement).toHaveClass('mt-sm-0');
    });

    test('renders box component with margin bottom property', () => {
        render(<Box marginBottom="auto">Hello, World!</Box>);

        const boxElement = screen.getByText(/Hello, World!/i);
        expect(boxElement).toHaveClass('mb-auto');
    });

    test('renders box component with responsive margin bottom property', () => {
        render(<Box marginBottom={{ xs: 'auto', sm: '0' }}>Hello, World!</Box>);

        const boxElement = screen.getByText(/Hello, World!/i);
        expect(boxElement).toHaveClass('mb-auto');
        expect(boxElement).toHaveClass('mb-sm-0');
    });

    test('renders box component with margin start property', () => {
        render(<Box marginLeft="auto">Hello, World!</Box>);

        const boxElement = screen.getByText(/Hello, World!/i);
        expect(boxElement).toHaveClass('ms-auto');
    });

    test('renders box component with responsive margin start property', () => {
        render(<Box marginLeft={{ xs: 'auto', sm: '0' }}>Hello, World!</Box>);

        const boxElement = screen.getByText(/Hello, World!/i);
        expect(boxElement).toHaveClass('ms-auto');
        expect(boxElement).toHaveClass('ms-sm-0');
    });

    test('renders box component with margin end property', () => {
        render(<Box marginRight="auto">Hello, World!</Box>);

        const boxElement = screen.getByText(/Hello, World!/i);
        expect(boxElement).toHaveClass('me-auto');
    });

    test('renders box component with responsive margin end property', () => {
        render(<Box marginRight={{ xs: 'auto', sm: '0' }}>Hello, World!</Box>);

        const boxElement = screen.getByText(/Hello, World!/i);
        expect(boxElement).toHaveClass('me-auto');
        expect(boxElement).toHaveClass('me-sm-0');
    });

    test('renders box component with margin x property', () => {
        render(<Box marginX="auto">Hello, World!</Box>);

        const boxElement = screen.getByText(/Hello, World!/i);
        expect(boxElement).toHaveClass('mx-auto');
    });

    test('renders box component with responsive margin x property', () => {
        render(<Box marginX={{ xs: 'auto', sm: '0' }}>Hello, World!</Box>);

        const boxElement = screen.getByText(/Hello, World!/i);
        expect(boxElement).toHaveClass('mx-auto');
        expect(boxElement).toHaveClass('mx-sm-0');
    });

    test('renders box component with margin y property', () => {
        render(<Box marginY="auto">Hello, World!</Box>);

        const boxElement = screen.getByText(/Hello, World!/i);
        expect(boxElement).toHaveClass('my-auto');
    });

    test('renders box component with responsive margin y property', () => {
        render(<Box marginY={{ xs: 'auto', sm: '0' }}>Hello, World!</Box>);

        const boxElement = screen.getByText(/Hello, World!/i);
        expect(boxElement).toHaveClass('my-auto');
        expect(boxElement).toHaveClass('my-sm-0');
    });

    test('renders box component with padding property', () => {
        render(<Box padding="auto">Hello, World!</Box>);

        const boxElement = screen.getByText(/Hello, World!/i);
        expect(boxElement).toHaveClass('p-auto');
    });

    test('renders box component with responsive padding property', () => {
        render(<Box padding={{ xs: 'auto', sm: '0' }}>Hello, World!</Box>);

        const boxElement = screen.getByText(/Hello, World!/i);
        expect(boxElement).toHaveClass('p-auto');
        expect(boxElement).toHaveClass('p-sm-0');
    });

    test('renders box component with padding top property', () => {
        render(<Box paddingTop="auto">Hello, World!</Box>);

        const boxElement = screen.getByText(/Hello, World!/i);
        expect(boxElement).toHaveClass('pt-auto');
    });

    test('renders box component with responsive padding top property', () => {
        render(<Box paddingTop={{ xs: 'auto', sm: '0' }}>Hello, World!</Box>);

        const boxElement = screen.getByText(/Hello, World!/i);
        expect(boxElement).toHaveClass('pt-auto');
        expect(boxElement).toHaveClass('pt-sm-0');
    });

    test('renders box component with padding bottom property', () => {
        render(<Box paddingBottom="auto">Hello, World!</Box>);

        const boxElement = screen.getByText(/Hello, World!/i);
        expect(boxElement).toHaveClass('pb-auto');
    });

    test('renders box component with responsive padding bottom property', () => {
        render(<Box paddingBottom={{ xs: 'auto', sm: '0' }}>Hello, World!</Box>);

        const boxElement = screen.getByText(/Hello, World!/i);
        expect(boxElement).toHaveClass('pb-auto');
        expect(boxElement).toHaveClass('pb-sm-0');
    });

    test('renders box component with padding start property', () => {
        render(<Box paddingLeft="auto">Hello, World!</Box>);

        const boxElement = screen.getByText(/Hello, World!/i);
        expect(boxElement).toHaveClass('ps-auto');
    });

    test('renders box component with responsive padding start property', () => {
        render(<Box paddingLeft={{ xs: 'auto', sm: '0' }}>Hello, World!</Box>);

        const boxElement = screen.getByText(/Hello, World!/i);
        expect(boxElement).toHaveClass('ps-auto');
        expect(boxElement).toHaveClass('ps-sm-0');
    });

    test('renders box component with padding end property', () => {
        render(<Box paddingRight="auto">Hello, World!</Box>);

        const boxElement = screen.getByText(/Hello, World!/i);
        expect(boxElement).toHaveClass('pe-auto');
    });

    test('renders box component with responsive padding end property', () => {
        render(<Box paddingRight={{ xs: 'auto', sm: '0' }}>Hello, World!</Box>);

        const boxElement = screen.getByText(/Hello, World!/i);
        expect(boxElement).toHaveClass('pe-auto');
        expect(boxElement).toHaveClass('pe-sm-0');
    });

    test('renders box component with padding x property', () => {
        render(<Box paddingX="auto">Hello, World!</Box>);

        const boxElement = screen.getByText(/Hello, World!/i);
        expect(boxElement).toHaveClass('px-auto');
    });

    test('renders box component with responsive padding x property', () => {
        render(<Box paddingX={{ xs: 'auto', sm: '0' }}>Hello, World!</Box>);

        const boxElement = screen.getByText(/Hello, World!/i);
        expect(boxElement).toHaveClass('px-auto');
        expect(boxElement).toHaveClass('px-sm-0');
    });

    test('renders box component with padding y property', () => {
        render(<Box paddingY="auto">Hello, World!</Box>);

        const boxElement = screen.getByText(/Hello, World!/i);
        expect(boxElement).toHaveClass('py-auto');
    });

    test('renders box component with responsive padding y property', () => {
        render(<Box paddingY={{ xs: 'auto', sm: '0' }}>Hello, World!</Box>);

        const boxElement = screen.getByText(/Hello, World!/i);
        expect(boxElement).toHaveClass('py-auto');
        expect(boxElement).toHaveClass('py-sm-0');
    });

    test('renders box component with text wrap property', () => {
        render(<Box textWrap={true}>Hello, World!</Box>);

        const boxElement = screen.getByText(/Hello, World!/i);
        expect(boxElement).toHaveClass('text-wrap');
    });

    test('renders box component with text no wrap property', () => {
        render(<Box textNoWrap={true}>Hello, World!</Box>);

        const boxElement = screen.getByText(/Hello, World!/i);
        expect(boxElement).toHaveClass('text-nowrap');
    });

    test('renders box component with word break property', () => {
        render(<Box wordBreak={true}>Hello, World!</Box>);

        const boxElement = screen.getByText(/Hello, World!/i);
        expect(boxElement).toHaveClass('text-break');
    });

    test('renders box component with text transform property', () => {
        render(<Box textTransform="capitalize">Hello, World!</Box>);

        const boxElement = screen.getByText(/Hello, World!/i);
        expect(boxElement).toHaveClass('text-capitalize');
    });

    test('renders box component with font size property', () => {
        render(<Box fontSize="3">Hello, World!</Box>);

        const boxElement = screen.getByText(/Hello, World!/i);
        expect(boxElement).toHaveClass('fs-3');
    });

    test('renders box component with font weight property', () => {
        render(<Box fontWeight="bold">Hello, World!</Box>);

        const boxElement = screen.getByText(/Hello, World!/i);
        expect(boxElement).toHaveClass('fw-bold');
    });

    test('renders box component with border property', () => {
        render(<Box border={true}>Hello, World!</Box>);

        const boxElement = screen.getByText(/Hello, World!/i);
        expect(boxElement).toHaveClass('border');
    });

    test('renders box component with border top property', () => {
        render(<Box borderTop={true}>Hello, World!</Box>);

        const boxElement = screen.getByText(/Hello, World!/i);
        expect(boxElement).toHaveClass('border-top');
    });

    test('renders box component with border top 0 property', () => {
        render(<Box borderTop={0}>Hello, World!</Box>);

        const boxElement = screen.getByText(/Hello, World!/i);
        expect(boxElement).toHaveClass('border-top-0');
    });

    test('renders box component with border end property', () => {
        render(<Box borderEnd={true}>Hello, World!</Box>);

        const boxElement = screen.getByText(/Hello, World!/i);
        expect(boxElement).toHaveClass('border-end');
    });

    test('renders box component with border end 0 property', () => {
        render(<Box borderEnd={0}>Hello, World!</Box>);

        const boxElement = screen.getByText(/Hello, World!/i);
        expect(boxElement).toHaveClass('border-end-0');
    });

    test('renders box component with border bottom property', () => {
        render(<Box borderBottom={true}>Hello, World!</Box>);

        const boxElement = screen.getByText(/Hello, World!/i);
        expect(boxElement).toHaveClass('border-bottom');
    });

    test('renders box component with border bottom 0 property', () => {
        render(<Box borderBottom={0}>Hello, World!</Box>);

        const boxElement = screen.getByText(/Hello, World!/i);
        expect(boxElement).toHaveClass('border-bottom-0');
    });

    test('renders box component with border start property', () => {
        render(<Box borderStart={true}>Hello, World!</Box>);

        const boxElement = screen.getByText(/Hello, World!/i);
        expect(boxElement).toHaveClass('border-start');
    });

    test('renders box component with border start 0 property', () => {
        render(<Box borderStart={0}>Hello, World!</Box>);

        const boxElement = screen.getByText(/Hello, World!/i);
        expect(boxElement).toHaveClass('border-start-0');
    });

    test('renders box component with border color property', () => {
        render(<Box borderColor="primary">Hello, World!</Box>);

        const boxElement = screen.getByText(/Hello, World!/i);
        expect(boxElement).toHaveClass('border-primary');
    });

    test('renders box component with border width property', () => {
        render(<Box borderWidth="1">Hello, World!</Box>);

        const boxElement = screen.getByText(/Hello, World!/i);
        expect(boxElement).toHaveClass('border-1');
    });

    test('renders box component with radius property', () => {
        render(<Box radius="rounded">Hello, World!</Box>);

        const boxElement = screen.getByText(/Hello, World!/i);
        expect(boxElement).toHaveClass('rounded');
    });

    test('renders box component with text align property', () => {
        render(<Box textAlign="center">Hello, World!</Box>);

        const boxElement = screen.getByText(/Hello, World!/i);
        expect(boxElement).toHaveClass('text-center');
    });

    test('renders box component with responsive text align property', () => {
        render(<Box textAlign={{ xs: 'end', sm: 'start' }}>Hello, World!</Box>);

        const boxElement = screen.getByText(/Hello, World!/i);
        expect(boxElement).toHaveClass('text-end');
        expect(boxElement).toHaveClass('text-sm-start');
    });

    test('renders box component with small property', () => {
        render(<Box small>Hello, World!</Box>);

        const boxElement = screen.getByText(/Hello, World!/i);
        expect(boxElement).toHaveClass('small');
    });

    test('should render with the "lh-1" class when lineHeight is provided as "1"', () => {
        render(<Box lineHeight="1">Hello, World!</Box>);

        const boxElement = screen.getByText(/Hello, World!/i);
        expect(boxElement).toHaveClass('lh-1');
    });

    test('should render with the "lh-sm" class when lineHeight is provided as "sm"', () => {
        render(<Box lineHeight="sm">Hello, World!</Box>);

        const boxElement = screen.getByText(/Hello, World!/i);
        expect(boxElement).toHaveClass('lh-sm');
    });

    test('should render with the "lh-base" class when lineHeight is provided as "base"', () => {
        render(<Box lineHeight="base">Hello, World!</Box>);

        const boxElement = screen.getByText(/Hello, World!/i);
        expect(boxElement).toHaveClass('lh-base');
    });

    test('should render with the "lh-lg" class when lineHeight is provided as "lg"', () => {
        render(<Box lineHeight="lg">Hello, World!</Box>);

        const boxElement = screen.getByText(/Hello, World!/i);
        expect(boxElement).toHaveClass('lh-lg');
    });

    test('renders box component with order-0 class', () => {
        render(<Box order="0">Hello, World!</Box>);

        const boxElement = screen.getByText(/Hello, World!/i);
        expect(boxElement).toHaveClass('order-0');
    });

    test('renders box component with order-1 class', () => {
        render(<Box order="1">Hello, World!</Box>);

        const boxElement = screen.getByText(/Hello, World!/i);
        expect(boxElement).toHaveClass('order-1');
    });

    test('renders box component with order-2 class', () => {
        render(<Box order="2">Hello, World!</Box>);

        const boxElement = screen.getByText(/Hello, World!/i);
        expect(boxElement).toHaveClass('order-2');
    });

    test('renders box component with order-3 class', () => {
        render(<Box order="3">Hello, World!</Box>);

        const boxElement = screen.getByText(/Hello, World!/i);
        expect(boxElement).toHaveClass('order-3');
    });

    test('renders box component with order-4 class', () => {
        render(<Box order="4">Hello, World!</Box>);

        const boxElement = screen.getByText(/Hello, World!/i);
        expect(boxElement).toHaveClass('order-4');
    });

    test('renders box component with order-5 class', () => {
        render(<Box order="5">Hello, World!</Box>);

        const boxElement = screen.getByText(/Hello, World!/i);
        expect(boxElement).toHaveClass('order-5');
    });

    test('renders box component with responsive order classes', () => {
        render(
            <Box order={{ xs: '0', sm: '1', md: '2', lg: '3', xl: '4', xxl: '5' }}>
                Hello, World!
            </Box>
        );

        const boxElement = screen.getByText(/Hello, World!/i);
        expect(boxElement).toHaveClass('order-0');
        expect(boxElement).toHaveClass('order-sm-1');
        expect(boxElement).toHaveClass('order-md-2');
        expect(boxElement).toHaveClass('order-lg-3');
        expect(boxElement).toHaveClass('order-xl-4');
        expect(boxElement).toHaveClass('order-xxl-5');
    });

    test('renders box component with order-first class', () => {
        render(<Box order="first">Hello, World!</Box>);

        const boxElement = screen.getByText(/Hello, World!/i);
        expect(boxElement).toHaveClass('order-first');
    });

    test('renders box component with order-last class', () => {
        render(<Box order="last">Hello, World!</Box>);

        const boxElement = screen.getByText(/Hello, World!/i);
        expect(boxElement).toHaveClass('order-last');
    });

    test('renders box component with responsive order-first class', () => {
        render(<Box order={{ sm: 'first' }}>Hello, World!</Box>);

        const boxElement = screen.getByText(/Hello, World!/i);
        expect(boxElement).toHaveClass('order-sm-first');
    });

    test('renders box component with responsive order-last class', () => {
        render(<Box order={{ sm: 'last' }}>Hello, World!</Box>);

        const boxElement = screen.getByText(/Hello, World!/i);
        expect(boxElement).toHaveClass('order-sm-last');
    });

    test('renders box component with responsive order-first class', () => {
        render(<Box order={{ md: 'first' }}>Hello, World!</Box>);

        const boxElement = screen.getByText(/Hello, World!/i);
        expect(boxElement).toHaveClass('order-md-first');
    });

    test('renders box component with responsive order-last class', () => {
        render(<Box order={{ md: 'last' }}>Hello, World!</Box>);

        const boxElement = screen.getByText(/Hello, World!/i);
        expect(boxElement).toHaveClass('order-md-last');
    });

    test('renders box component with responsive order-first class', () => {
        render(<Box order={{ lg: 'first' }}>Hello, World!</Box>);

        const boxElement = screen.getByText(/Hello, World!/i);
        expect(boxElement).toHaveClass('order-lg-first');
    });

    test('renders box component with responsive order-last class', () => {
        render(<Box order={{ lg: 'last' }}>Hello, World!</Box>);

        const boxElement = screen.getByText(/Hello, World!/i);
        expect(boxElement).toHaveClass('order-lg-last');
    });

    test('renders box component with responsive order-first class', () => {
        render(<Box order={{ xl: 'first' }}>Hello, World!</Box>);

        const boxElement = screen.getByText(/Hello, World!/i);
        expect(boxElement).toHaveClass('order-xl-first');
    });

    test('renders box component with responsive order-last class', () => {
        render(<Box order={{ xl: 'last' }}>Hello, World!</Box>);

        const boxElement = screen.getByText(/Hello, World!/i);
        expect(boxElement).toHaveClass('order-xl-last');
    });

    test('renders box component with responsive order-first class', () => {
        render(<Box order={{ xxl: 'first' }}>Hello, World!</Box>);

        const boxElement = screen.getByText(/Hello, World!/i);
        expect(boxElement).toHaveClass('order-xxl-first');
    });

    test('renders box component with responsive order-last class', () => {
        render(<Box order={{ xxl: 'last' }}>Hello, World!</Box>);

        const boxElement = screen.getByText(/Hello, World!/i);
        expect(boxElement).toHaveClass('order-xxl-last');
    });
});

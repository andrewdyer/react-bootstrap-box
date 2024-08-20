import React from 'react';
import { render } from '@testing-library/react';
import { getBoxElement } from '../../utilities';
import Box, { type BoxProps } from './Box';

const renderBox = (props?: Partial<BoxProps>) => render(<Box {...props}>Hello, World!</Box>);

describe('Box', () => {
    test('renders box component', () => {
        renderBox();

        const BoxElement = getBoxElement();

        expect(BoxElement).toBeInTheDocument();
    });

    test('renders box component as custom element', () => {
        renderBox({ as: 'section' });

        const BoxElement = getBoxElement();

        expect(BoxElement).toBeInTheDocument();
        expect(BoxElement.tagName).toBe('SECTION');
    });

    test('renders box component with custom class', () => {
        renderBox({ className: 'custom-class' });

        expect(getBoxElement()).toHaveClass('custom-class');
    });

    test('renders box component with background color', () => {
        renderBox({ background: 'primary' });

        expect(getBoxElement()).toHaveClass('bg-primary');
    });

    test('renders box component with gradient background', () => {
        renderBox({ gradient: true });

        expect(getBoxElement()).toHaveClass('bg-gradient');
    });

    test('renders box component with text color', () => {
        renderBox({ color: 'primary' });

        expect(getBoxElement()).toHaveClass('text-primary');
    });

    test('renders box component with alignment', () => {
        renderBox({ align: 'middle' });

        expect(getBoxElement()).toHaveClass('align-middle');
    });

    test('renders box component as invisible', () => {
        renderBox({ invisible: true });

        expect(getBoxElement()).toHaveClass('invisible');
    });

    test('renders box component as visible', () => {
        renderBox({ visible: true });

        expect(getBoxElement()).toHaveClass('visible');
    });

    test('renders box component with height', () => {
        renderBox({ height: '50' });

        expect(getBoxElement()).toHaveClass('h-50');
    });

    test('renders box component with width', () => {
        renderBox({ width: '50' });

        expect(getBoxElement()).toHaveClass('w-50');
    });

    test('renders box component with display property', () => {
        renderBox({ display: 'block' });

        expect(getBoxElement()).toHaveClass('d-block');
    });

    test('renders box component with responsive display property', () => {
        renderBox({ display: { xs: 'none', sm: 'block' } });

        expect(getBoxElement()).toHaveClass('d-none');
        expect(getBoxElement()).toHaveClass('d-sm-block');
    });

    test('renders box component with flex direction property', () => {
        renderBox({ flexDirection: 'row' });

        expect(getBoxElement()).toHaveClass('flex-row');
    });

    test('renders box component with responsive flex direction property', () => {
        renderBox({ flexDirection: { xs: 'row', sm: 'column' } });

        expect(getBoxElement()).toHaveClass('flex-row');
        expect(getBoxElement()).toHaveClass('flex-sm-column');
    });

    test('renders box component with flex wrap property', () => {
        renderBox({ flexWrap: 'wrap' });

        expect(getBoxElement()).toHaveClass('flex-wrap');
    });

    test('renders box component with responsive flex wrap property', () => {
        renderBox({ flexWrap: { xs: 'wrap', sm: 'nowrap' } });

        expect(getBoxElement()).toHaveClass('flex-wrap');
        expect(getBoxElement()).toHaveClass('flex-sm-nowrap');
    });

    test('renders box component with justify content property', () => {
        renderBox({ justifyContent: 'center' });

        expect(getBoxElement()).toHaveClass('justify-content-center');
    });

    test('renders box component with responsive justify content property', () => {
        renderBox({ justifyContent: { xs: 'start', sm: 'end' } });

        expect(getBoxElement()).toHaveClass('justify-content-start');
        expect(getBoxElement()).toHaveClass('justify-content-sm-end');
    });

    test('renders box component with align items property', () => {
        renderBox({ alignItems: 'center' });

        expect(getBoxElement()).toHaveClass('align-items-center');
    });

    test('renders box component with responsive align items property', () => {
        renderBox({ alignItems: { xs: 'start', sm: 'end' } });

        expect(getBoxElement()).toHaveClass('align-items-start');
        expect(getBoxElement()).toHaveClass('align-items-sm-end');
    });

    test('renders box component with align self property', () => {
        renderBox({ alignSelf: 'center' });

        expect(getBoxElement()).toHaveClass('align-self-center');
    });

    test('renders box component with responsive align self property', () => {
        renderBox({ alignSelf: { xs: 'start', sm: 'end' } });

        expect(getBoxElement()).toHaveClass('align-self-start');
        expect(getBoxElement()).toHaveClass('align-self-sm-end');
    });

    test('renders box component with user select property', () => {
        renderBox({ userSelect: 'none' });

        expect(getBoxElement()).toHaveClass('user-select-none');
    });

    test('renders box component with pointer events property', () => {
        renderBox({ pointerEvents: 'none' });

        expect(getBoxElement()).toHaveClass('pe-none');
    });

    test('renders box component with opacity property', () => {
        renderBox({ opacity: '50' });

        expect(getBoxElement()).toHaveClass('opacity-50');
    });

    test('renders box component with overflow property', () => {
        renderBox({ overflow: 'hidden' });

        expect(getBoxElement()).toHaveClass('overflow-hidden');
    });

    test('renders box component with margin property', () => {
        renderBox({ margin: 'auto' });

        expect(getBoxElement()).toHaveClass('m-auto');
    });

    test('renders box component with responsive margin property', () => {
        renderBox({ margin: { xs: 'auto', sm: '0' } });

        expect(getBoxElement()).toHaveClass('m-auto');
        expect(getBoxElement()).toHaveClass('m-sm-0');
    });

    test('renders box component with margin top property', () => {
        renderBox({ marginTop: 'auto' });

        expect(getBoxElement()).toHaveClass('mt-auto');
    });

    test('renders box component with responsive margin top property', () => {
        renderBox({ marginTop: { xs: 'auto', sm: '0' } });

        expect(getBoxElement()).toHaveClass('mt-auto');
        expect(getBoxElement()).toHaveClass('mt-sm-0');
    });

    test('renders box component with margin bottom property', () => {
        renderBox({ marginBottom: 'auto' });

        expect(getBoxElement()).toHaveClass('mb-auto');
    });

    test('renders box component with responsive margin bottom property', () => {
        renderBox({ marginBottom: { xs: 'auto', sm: '0' } });

        expect(getBoxElement()).toHaveClass('mb-auto');
        expect(getBoxElement()).toHaveClass('mb-sm-0');
    });

    test('renders box component with margin start property', () => {
        renderBox({ marginLeft: 'auto' });

        expect(getBoxElement()).toHaveClass('ms-auto');
    });

    test('renders box component with responsive margin start property', () => {
        renderBox({ marginLeft: { xs: 'auto', sm: '0' } });

        expect(getBoxElement()).toHaveClass('ms-auto');
        expect(getBoxElement()).toHaveClass('ms-sm-0');
    });

    test('renders box component with margin end property', () => {
        renderBox({ marginRight: 'auto' });

        expect(getBoxElement()).toHaveClass('me-auto');
    });

    test('renders box component with responsive margin end property', () => {
        renderBox({ marginRight: { xs: 'auto', sm: '0' } });

        expect(getBoxElement()).toHaveClass('me-auto');
        expect(getBoxElement()).toHaveClass('me-sm-0');
    });

    test('renders box component with margin x property', () => {
        renderBox({ marginX: 'auto' });

        expect(getBoxElement()).toHaveClass('mx-auto');
    });

    test('renders box component with responsive margin x property', () => {
        renderBox({ marginX: { xs: 'auto', sm: '0' } });

        expect(getBoxElement()).toHaveClass('mx-auto');
        expect(getBoxElement()).toHaveClass('mx-sm-0');
    });

    test('renders box component with margin y property', () => {
        renderBox({ marginY: 'auto' });

        expect(getBoxElement()).toHaveClass('my-auto');
    });

    test('renders box component with responsive margin y property', () => {
        renderBox({ marginY: { xs: 'auto', sm: '0' } });

        expect(getBoxElement()).toHaveClass('my-auto');
        expect(getBoxElement()).toHaveClass('my-sm-0');
    });

    test('renders box component with padding property', () => {
        renderBox({ padding: 'auto' });

        expect(getBoxElement()).toHaveClass('p-auto');
    });

    test('renders box component with responsive padding property', () => {
        renderBox({ padding: { xs: 'auto', sm: '0' } });

        expect(getBoxElement()).toHaveClass('p-auto');
        expect(getBoxElement()).toHaveClass('p-sm-0');
    });

    test('renders box component with padding top property', () => {
        renderBox({ paddingTop: 'auto' });

        expect(getBoxElement()).toHaveClass('pt-auto');
    });

    test('renders box component with responsive padding top property', () => {
        renderBox({ paddingTop: { xs: 'auto', sm: '0' } });

        expect(getBoxElement()).toHaveClass('pt-auto');
        expect(getBoxElement()).toHaveClass('pt-sm-0');
    });

    test('renders box component with padding bottom property', () => {
        renderBox({ paddingBottom: 'auto' });

        expect(getBoxElement()).toHaveClass('pb-auto');
    });

    test('renders box component with responsive padding bottom property', () => {
        renderBox({ paddingBottom: { xs: 'auto', sm: '0' } });

        expect(getBoxElement()).toHaveClass('pb-auto');
        expect(getBoxElement()).toHaveClass('pb-sm-0');
    });

    test('renders box component with padding start property', () => {
        renderBox({ paddingLeft: 'auto' });

        expect(getBoxElement()).toHaveClass('ps-auto');
    });

    test('renders box component with responsive padding start property', () => {
        renderBox({ paddingLeft: { xs: 'auto', sm: '0' } });

        expect(getBoxElement()).toHaveClass('ps-auto');
        expect(getBoxElement()).toHaveClass('ps-sm-0');
    });

    test('renders box component with padding end property', () => {
        renderBox({ paddingRight: 'auto' });

        expect(getBoxElement()).toHaveClass('pe-auto');
    });

    test('renders box component with responsive padding end property', () => {
        renderBox({ paddingRight: { xs: 'auto', sm: '0' } });

        expect(getBoxElement()).toHaveClass('pe-auto');
        expect(getBoxElement()).toHaveClass('pe-sm-0');
    });

    test('renders box component with padding x property', () => {
        renderBox({ paddingX: 'auto' });

        expect(getBoxElement()).toHaveClass('px-auto');
    });

    test('renders box component with responsive padding x property', () => {
        renderBox({ paddingX: { xs: 'auto', sm: '0' } });

        expect(getBoxElement()).toHaveClass('px-auto');
        expect(getBoxElement()).toHaveClass('px-sm-0');
    });

    test('renders box component with padding y property', () => {
        renderBox({ paddingY: 'auto' });

        expect(getBoxElement()).toHaveClass('py-auto');
    });

    test('renders box component with responsive padding y property', () => {
        renderBox({ paddingY: { xs: 'auto', sm: '0' } });

        expect(getBoxElement()).toHaveClass('py-auto');
        expect(getBoxElement()).toHaveClass('py-sm-0');
    });

    test('renders box component with text wrap property', () => {
        renderBox({ textWrap: true });

        expect(getBoxElement()).toHaveClass('text-wrap');
    });

    test('renders box component with text no wrap property', () => {
        renderBox({ textNoWrap: true });

        expect(getBoxElement()).toHaveClass('text-nowrap');
    });

    test('renders box component with word break property', () => {
        renderBox({ wordBreak: true });

        expect(getBoxElement()).toHaveClass('text-break');
    });

    test('renders box component with text transform property', () => {
        renderBox({ textTransform: 'capitalize' });

        expect(getBoxElement()).toHaveClass('text-capitalize');
    });

    test('renders box component with font size property', () => {
        renderBox({ fontSize: '3' });

        expect(getBoxElement()).toHaveClass('fs-3');
    });

    test('renders box component with font weight property', () => {
        renderBox({ fontWeight: 'bold' });

        expect(getBoxElement()).toHaveClass('fw-bold');
    });

    test('renders box component with border property', () => {
        renderBox({ border: true });

        expect(getBoxElement()).toHaveClass('border');
    });

    test('renders box component with border top property', () => {
        renderBox({ borderTop: true });

        expect(getBoxElement()).toHaveClass('border-top');
    });

    test('renders box component with border top 0 property', () => {
        renderBox({ borderTop: 0 });

        expect(getBoxElement()).toHaveClass('border-top-0');
    });

    test('renders box component with border end property', () => {
        renderBox({ borderEnd: true });

        expect(getBoxElement()).toHaveClass('border-end');
    });

    test('renders box component with border end 0 property', () => {
        renderBox({ borderEnd: 0 });

        expect(getBoxElement()).toHaveClass('border-end-0');
    });

    test('renders box component with border bottom property', () => {
        renderBox({ borderBottom: true });

        expect(getBoxElement()).toHaveClass('border-bottom');
    });

    test('renders box component with border bottom 0 property', () => {
        renderBox({ borderBottom: 0 });

        expect(getBoxElement()).toHaveClass('border-bottom-0');
    });

    test('renders box component with border start property', () => {
        renderBox({ borderStart: true });

        expect(getBoxElement()).toHaveClass('border-start');
    });

    test('renders box component with border start 0 property', () => {
        renderBox({ borderStart: 0 });

        expect(getBoxElement()).toHaveClass('border-start-0');
    });

    test('renders box component with border color property', () => {
        renderBox({ borderColor: 'primary' });

        expect(getBoxElement()).toHaveClass('border-primary');
    });

    test('renders box component with border width property', () => {
        renderBox({ borderWidth: '1' });

        expect(getBoxElement()).toHaveClass('border-1');
    });

    test('renders box component with radius property', () => {
        renderBox({ radius: 'rounded' });

        expect(getBoxElement()).toHaveClass('rounded');
    });

    test('renders box component with text align property', () => {
        renderBox({ textAlign: 'center' });

        expect(getBoxElement()).toHaveClass('text-center');
    });

    test('renders box component with responsive text align property', () => {
        renderBox({ textAlign: { xs: 'end', sm: 'start' } });

        expect(getBoxElement()).toHaveClass('text-end');
        expect(getBoxElement()).toHaveClass('text-sm-start');
    });
});

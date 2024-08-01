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
        renderBox({ bg: 'primary' });

        expect(getBoxElement()).toHaveClass('bg-primary');
    });

    test('renders box component with text color', () => {
        renderBox({ text: 'primary' });

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
        renderBox({ h: '50' });

        expect(getBoxElement()).toHaveClass('h-50');
    });

    test('renders box component with width', () => {
        renderBox({ w: '50' });

        expect(getBoxElement()).toHaveClass('w-50');
    });

    test('renders box component with display property', () => {
        renderBox({ d: 'block' });

        expect(getBoxElement()).toHaveClass('d-block');
    });

    test('renders box component with responsive display property', () => {
        renderBox({ d: { xs: 'none', sm: 'block' } });

        expect(getBoxElement()).toHaveClass('d-none');
        expect(getBoxElement()).toHaveClass('d-sm-block');
    });

    test('renders box component with flex property', () => {
        renderBox({ flex: 'row' });

        expect(getBoxElement()).toHaveClass('flex-row');
    });

    test('renders box component with responsive flex property', () => {
        renderBox({ flex: { xs: 'row', sm: 'column' } });

        expect(getBoxElement()).toHaveClass('flex-row');
        expect(getBoxElement()).toHaveClass('flex-sm-column');
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
});

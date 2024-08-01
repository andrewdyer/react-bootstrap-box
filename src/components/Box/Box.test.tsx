import React from 'react';
import { render, screen } from '@testing-library/react';
import Box, { type BoxProps } from './Box';

const renderBox = (props?: Partial<BoxProps>) => render(<Box {...props}>Hello, World!</Box>);

describe('Box', () => {
    test('renders box component', () => {
        renderBox();

        const BoxElement = screen.getByText(/Hello, World!/i);

        expect(BoxElement).toBeInTheDocument();
    });

    test('renders box component as custom element', () => {
        renderBox({ as: 'section' });

        const BoxElement = screen.getByText(/Hello, World!/i);

        expect(BoxElement).toBeInTheDocument();
        expect(BoxElement.tagName).toBe('SECTION');
    });

    test('renders box component with custom class', () => {
        renderBox({ className: 'custom-class' });

        expect(screen.getByText(/Hello, World!/i)).toHaveClass('custom-class');
    });

    test('renders box component with background color', () => {
        renderBox({ bg: 'primary' });

        expect(screen.getByText(/Hello, World!/i)).toHaveClass('bg-primary');
    });
});

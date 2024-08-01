import React from 'react';
import { render, screen } from '@testing-library/react';
import Box from './Box';

describe('Box', () => {
    test('renders box component', () => {
        render(<Box>Hello, World!</Box>);

        const BoxElement = screen.getByText(/Hello, World!/i);

        expect(BoxElement).toBeInTheDocument();
    });
});

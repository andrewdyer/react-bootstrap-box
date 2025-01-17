import type { Meta, StoryObj } from '@storybook/react';
import Box from './Box';

const meta = {
    title: 'Components/Box',
    component: Box,
    parameters: {
        layout: 'centered'
    },
    tags: ['autodocs'],
    args: {
        children: 'Hello, world!'
    }
} satisfies Meta<typeof Box>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

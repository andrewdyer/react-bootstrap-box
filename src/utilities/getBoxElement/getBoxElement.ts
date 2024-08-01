import { screen } from '@testing-library/react';

const getBoxElement = () => screen.getByText(/Hello, World!/i);

export default getBoxElement;

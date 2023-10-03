import { render, screen } from '@testing-library/react';
import React from 'react';

import HomePage from '../index';

describe('Home Page tests', () => {
  it('renders main component', () => {
    render(<HomePage />);
    expect(screen.getByTestId('home-page-main-container')).toBeTruthy();
  });
});

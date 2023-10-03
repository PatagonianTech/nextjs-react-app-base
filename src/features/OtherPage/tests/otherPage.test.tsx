import { render, screen } from '@testing-library/react';
import React from 'react';

import LoanSimulator from '../index';

describe('Other Page tests', () => {
  it('renders main component', () => {
    render(<LoanSimulator />);
    expect(screen.getByTestId('other-page-main-container')).toBeTruthy();
  });
});

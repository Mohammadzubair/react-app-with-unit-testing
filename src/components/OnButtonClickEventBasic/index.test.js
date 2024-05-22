// OnButtonClickEventBasic.test.jsx
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; // for the "toBeInTheDocument" matcher and other matchers
import OnButtonClickEventBasic from './index';

test('renders the initial content correctly', () => {
  render(<OnButtonClickEventBasic />);

  // Check if the initial heading text is "Old content"
  const headingElement = screen.getByText('Old content');
  expect(headingElement).toBeInTheDocument();
  expect(headingElement).toHaveStyle({ backgroundColor: 'green', color: 'white' });

  // Check if the button is in the document
  const buttonElement = screen.getByRole('button', { name: /click on me/i });
  expect(buttonElement).toBeInTheDocument();
});

test('changes content and background color on button click', () => {
  render(<OnButtonClickEventBasic />);

  // Get the button and the heading elements
  const buttonElement = screen.getByRole('button', { name: /click on me/i });
  const headingElement = screen.getByText('Old content');

  // Simulate a click event on the button
  fireEvent.click(buttonElement);

  // Check if the heading text is changed to "New content"
  expect(screen.getByText('New content')).toBeInTheDocument();
  expect(screen.getByText('New content')).toHaveStyle({ backgroundColor: 'blue', color: 'white' });

  // Simulate another click event on the button
  fireEvent.click(buttonElement);

  // Check if the heading text is changed back to "Old content"
  expect(screen.getByText('Old content')).toBeInTheDocument();
  expect(screen.getByText('Old content')).toHaveStyle({ backgroundColor: 'green', color: 'white' });
});

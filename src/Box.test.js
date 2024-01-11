import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Box from './Box';



const mockRemoveBox = jest.fn();

it('renders without crashing', () => {
  render(<Box removeBox={mockRemoveBox} backgroundColor={"#000000"} width={100} height={100} id="1" />);
});


it('matches snapshot', () => {
  const { asFragment } = render(<Box />);
  expect(asFragment()).toMatchSnapshot();
});

it('renders with custom width and height', () => {
  render(<Box id={2} removeBox={mockRemoveBox} backgroundColor="blue" width={150} height={150} />);
  
  const boxElement = screen.getByText('X');
  console.log(boxElement);
  expect(boxElement).toBeInTheDocument();
});

it('calls removeBox when the remove button is clicked', () => {
  render(<Box removeBox={mockRemoveBox} backgroundColor={"#000000"} width={100} height={100} id="1" />);

  const removeBtn = screen.getByText('X');

  fireEvent.click(removeBtn);

  expect(mockRemoveBox).toBeCalledWith('1');
});
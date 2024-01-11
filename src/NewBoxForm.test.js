import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import NewBoxForm from './NewBoxForm';


it('renders without crashing', () => {
  render(<NewBoxForm createBox={() => {}} />);
});


it('matches snapshot', () => {
  const { asFragment } = render(<NewBoxForm createBox={() => {}} />);
  expect(asFragment()).toMatchSnapshot();
});

it('calls createBox on form submission', () => {
  const createBoxMock = jest.fn();
  render(<NewBoxForm createBox={createBoxMock} />);

  const colorInput = screen.getByLabelText(/background color:/i);
  const widthInput = screen.getByLabelText(/width:/i);
  const heightInput = screen.getByLabelText(/height:/i);
  const submitButton = screen.getByRole('button', { name: /create box/i });

  fireEvent.change(colorInput, { target: { value: '#ff0000' } });
  fireEvent.change(widthInput, { target: { value: '150' } });
  fireEvent.change(heightInput, { target: { value: '150' } });
  fireEvent.click(submitButton);

  expect(createBoxMock).toHaveBeenCalledWith({
    backgroundColor: '#ff0000',
    width: '150',
    height: '150'
  });
});

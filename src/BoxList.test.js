import { render, screen, fireEvent } from '@testing-library/react';
import BoxList from './BoxList';

it('renders BoxList', () => {
  render(<BoxList />);
});

it('snapshot matches', () => {
  const { asFragment } = render(
    <BoxList />
  );
  expect(asFragment).toMatchSnapshot();
});

it('adds a new default box when the form is submitted', () => {
  jest.mock('uuid', () => ({
    v4: () => 'box-1',
  }));

  render(<BoxList />);

  const button = screen.getByText('Create Box');
  fireEvent.click(button);

  expect(screen.getByText('X')).toBeInTheDocument();
});

it('adds a new box when the form is submitted', () => {
  render(<BoxList />);

  const inBoxColor = screen.getByLabelText('Background Color:');
  const inBoxWidth = screen.getByLabelText('Width:');
  const boxHeight = screen.getByLabelText('Height:');
  const button = screen.getByText('Create Box');
  fireEvent.change(inBoxColor, { target: { value: '#000000' } });
  fireEvent.change(inBoxWidth, { target: { value: '#000000' } });
  fireEvent.change(boxHeight, { target: { value: '#000000' } });
  fireEvent.click(button);

  expect(screen.getByText('X')).toBeInTheDocument();
});

it('remove a box when the remove button is click', () => {
  render(<BoxList />); 

  const submitButton = screen.getByText('Create Box');
  fireEvent.click(submitButton);

  const removeBtn = screen.getByText('X');
  fireEvent.click(removeBtn);

  expect(screen.queryByText('X')).toBeNull();
});
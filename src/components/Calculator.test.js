/* eslint-disable react/display-name */
import { React } from 'react';
import ReactDOM from 'react-dom';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import Calculator from './calculator';

it('renders correctly', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Calculator />, div);
});

jest.mock('./display', () => () => <div data-testid="display" />);
jest.mock('./btnPanel', () => () => <div data-testid="button" />);

it('Should render a display area', () => {
  const { getByTestId } = render(<Calculator />);
  expect(getByTestId(/display/)).toBeInTheDocument();
  expect(getByTestId(/button/)).toBeInTheDocument();
});

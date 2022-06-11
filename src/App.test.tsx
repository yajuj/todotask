import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';
import TodoContext from './context/todo-context';

describe('<App />', () => {
  beforeEach(() => {
    render(
      <TodoContext>
        <App />
      </TodoContext>
    );
  });

  describe('todo app renders', () => {
    it('shows TODOS header', () => {
      expect(screen.getByText(/TODOS/i)).toBeInTheDocument();
    });
  });

  describe('todo add function', () => {
    it('adds todo', () => {
      userEvent.type(
        screen.getByPlaceholderText(/What needs to be done?/i),
        'test'
      );
      userEvent.click(screen.getByText(/ADD/i));

      expect(screen.getByText('test')).toBeInTheDocument();
    });
    it("don't adds empty todo", () => {
      userEvent.click(screen.getByText(/ADD/i));

      expect(screen.queryByText('test')).not.toBeInTheDocument();
    });
  });
  describe('todo remove function', () => {
    beforeEach(() => {
      userEvent.type(
        screen.getByPlaceholderText(/What needs to be done?/i),
        'test'
      );
      userEvent.click(screen.getByText(/ADD/i));
    });
    it('removs todo', () => {
      userEvent.click(screen.getByTestId('remove-btn'));
      expect(screen.queryByText('test')).not.toBeInTheDocument();
    });
  });

  describe('todo toggle function', () => {
    beforeEach(() => {
      userEvent.type(
        screen.getByPlaceholderText(/What needs to be done?/i),
        'test'
      );
      userEvent.click(screen.getByText(/ADD/i));
    });
    it('toogle todo', () => {
      userEvent.click(screen.getByTestId('toggle'));
      expect(screen.queryByTestId('checkbox')).toBeChecked();
    });
  });
});

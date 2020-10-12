import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import User from './User';

test("Text 'Histórico de pedidos' is null after click edit", async () => {
  
  const { getByTestId, getByText } = render( <User /> )

  const editButton = getByTestId('editUser')

  fireEvent.click(editButton)

  expect(getByText(/Histórico de pedidos/i)).toHaveTextContent(null)

})
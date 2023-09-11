// @ts-nocheck
import React from 'react'
import { configureStore } from '@reduxjs/toolkit';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { LoginPage } from '../../../src/auth/pages/LoginPage';
import { authSlice } from '../../../src/store/auth';
import { MemoryRouter } from 'react-router';

const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
  },
});

describe("Pruebas en <LoginPage />", () => {
  test("Debe de mostrar el componente correctamente", () => {
    render(
      <Provider store={store} >
        <MemoryRouter basename="/*" >
          <LoginPage />
        </MemoryRouter>
      </Provider>
    );

    screen.debug()
    expect( screen.getAllByAltText('Login').length ).toBeGreaterThanOrEqual(1);
  
  });
});

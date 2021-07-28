import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { AuthProvider } from './hooks/useAuth'

import { Routes } from './routes'

import { GlobalStyle } from './styles/global'

export const App = () => (
  <BrowserRouter>
    <GlobalStyle />
    <AuthProvider>
      <Routes />
    </AuthProvider>
  </BrowserRouter>
)


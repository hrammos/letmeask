import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import { AuthProvider } from './hooks/useAuth'

import { Home } from './pages/Home'
import { NewRoom } from './pages/NewRoom'
import { GlobalStyle } from './styles/global'

export const App = () => (
  <BrowserRouter>
    <GlobalStyle />
    <AuthProvider>
      <Route path="/" exact component={Home} />
      <Route path="/rooms/new" component={NewRoom} />
    </AuthProvider>
  </BrowserRouter>
)


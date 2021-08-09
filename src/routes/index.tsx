import React from 'react'
import { Route, Switch } from 'react-router-dom'

import {
  Home,
  NewRoom,
  Room,
  AdminRoom,
} from 'pages'

export const Routes = () => (
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/rooms/new" component={NewRoom} />
    <Route path="/rooms/:id" component={Room} />

    <Route path="/admin/rooms/:id" component={AdminRoom} />
  </Switch>
)

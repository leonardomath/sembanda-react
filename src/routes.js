import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Signin from './pages/Signin'
import Profile from './pages/Profile'
import Album from './pages/Album'
import Users from './pages/Users'
import UserDeatil from './pages/UserDetail'

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Signin} />
        <Route path="/profile" exact component={Profile} />
        <Route path="/album" exact component={Album} />
        <Route path="/users" exact component={Users} />
        <Route path="/userDetail" exact component={UserDeatil} />
      </Switch>
    </BrowserRouter>
  )
}
import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Signin from './pages/Signin'
import Profile from './pages/Profile'
import Album from './pages/Album'
import Users from './pages/Users'
import UserDeatil from './pages/UserDetail'
import SignUp from './pages/SignUp'
import PrivateRoute from './pages/components/PrivateRoute'

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Signin} />
        <PrivateRoute path="/profile" exact component={Profile} />
        <PrivateRoute path="/album" exact component={Album} />
        <PrivateRoute path="/users" exact component={Users} />
        <PrivateRoute path="/userDetail" exact component={UserDeatil} />
        <PrivateRoute path="/signup" exact component={SignUp} />
      </Switch>
    </BrowserRouter>
  )
}
import React from 'react'

import './style.css'
import logo from './assets/logo.png'
import logoSvg from './assets/logo-svg.svg'
import logoSvgAlt from './assets/logo-alt.svg'
import { Link, useHistory } from 'react-router-dom'
import api from '../../../services/api'
import Error from '../Error'

const NavBar = () => {

  const history = useHistory()

  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')
  const [loading, setLoading] = React.useState(null)
  const [error, setError] = React.useState(false)

  async function handleSignIn(e) {
    e.preventDefault()
    setLoading(true)
    const response = await api.post('/session', { email, password })
    if (response.data.error) {
      setError(response.data.error);
      setLoading(false)
    } else {
      localStorage.setItem('token', response.data.token)
      history.push('/profile')
    }
  }

  return (
    <nav className="navbar">
      {error ? <Error title={error} /> : null}
      <div className="container-navbar">
        <div className="logo">
          <Link to="/">
            <img src={logoSvg} alt="sem banda" />
          </Link>
        </div>
        <div className="signin">
          <form method="post" onSubmit={handleSignIn}>
            <input
              type="email"
              placeholder="E-mail"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
            <input
              type="password"
              placeholder="Senha"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
            <button type="submit">Ir</button>
          </form>
        </div>
      </div>
    </nav>
  );
}

export default NavBar
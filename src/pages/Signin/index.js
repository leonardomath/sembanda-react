import React from 'react'
import { Link } from 'react-router-dom'

import './style.css'
import Logo from './assets/Logo.png'
import Instruments from './assets/icons_instruments.png'
import Album from './assets/disket.png'
import User from './assets/user.png'

export default function Signin() {
  return (
    <>
    <section className="introduction">
        <nav className="navbar">
          <div className="container-navbar">
            <a href="#"><img class="logo" src={Logo} /></a>
            <ul>
              <li>contato</li>
              <li>sobre</li>
            </ul>
          </div>
        </nav>
      <div className="begin">
          Crie seu repertório,
          edite, gerencie, e encontre pessoas para formar sua banda
          <button>Começar</button>
      </div>
      <div className="signin">
        <form>
          <input type="text" placeholder="E-mail" />
          <input type="password" placeholder="Senha" />
          <button type="submit">Entrar</button>
        </form>
      </div>
    </section>
    <section className="instruments">
        <h2>Escolha seu instrumento</h2>
        <img class="icons" src={Instruments} />
    </section>
    <section className="musics">
        <h2>Envie suas melhores músicas</h2>
        <img src={Album} />
    </section>
    <section className="members">
        <h2>Encontre membros e forme uma banda</h2>
    </section>
    <section className="user">
      <div className="user-details">
      <img src={User} className="user-avatar" />
        <div className="user-description">
          <ul>
              <li><p>Zakk Wylde</p></li>
              <li>Guitarrista</li>
          </ul> 
          <button>Ver perfil</button>
        </div>
      </div>
    </section>
    <section className="plans">
      <div className="plan-title">
        <h2>Escolha seu plano</h2>
      </div>

      <div className="boxs">
        <div className="box-plan">
          <h1>Gratis</h1>
          <ul>
            <li>Albuns ilimitados</li>
            <li>3 Músicas no repertório</li>
          </ul>
          <button>Escolher</button>
        </div>

        <div className="box-plan">
          <h1>16,99</h1>
          <ul>
            <li>Albuns ilimitados</li>
            <li>Músicas ilimitados no repertório</li>
          </ul>
          <button>Escolher</button>
        </div>

        <div className="box-plan">
          <h1>9,99</h1>
          <ul>
            <li>Albuns ilimitados</li>
            <li>10 Músicas no repertório</li>
          </ul>
          <button>Escolher</button>
        </div>
      </div>

    </section>
    <footer>
      <h1>SemBanda</h1>
    </footer>
    </>
  )
}
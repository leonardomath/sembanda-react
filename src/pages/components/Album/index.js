import React from 'react'

import ButtonRadius from '../ButtonRadius'

import './style.css'

export default function Album(props) {
  return (
    <section className="album">
      <div className="avatar-album">
        <img src="https://images-na.ssl-images-amazon.com/images/I/81BcvqJw6vL._AC_SL1200_.jpg" alt="Album" />
      </div>
      <div className="album-info">
        <ul>
          <li className="band-name">Oasis</li>
          <li className="band-album">Be here now</li>
          {props.page
            ? <ButtonRadius title="Adicionar" />
            : ''
          }
        </ul>
      </div>
    </section >
  )
}
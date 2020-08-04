import React from 'react'

import ButtonRadius from '../ButtonRadius'

import './style.css'

function Album({ albuns: album, page }) {
  return (
    <section className="album">
      <div className="avatar-album">
        <img
          src={album.url}
          alt={album.name}
        />
      </div>
      <div className="album-info">
        <ul>
          <li className="band-name">{album.band}</li>
          <li className="band-album">{album.name}</li>
          {page ? <ButtonRadius title="Adicionar" /> : ""}
        </ul>
      </div>
    </section>
  )
}

export default Album
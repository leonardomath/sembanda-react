import React from 'react'

import ButtonRadius from '../ButtonRadius'

import './style.css'
import api from '../../../services/api'

function Album({ albuns: album, page }) {

  async function setUserAlbum(album_id) {
    try {
      await api.post('/setAlbumUser', { album_id }, {
        headers: {
          Authorization: "Bearer " + window.localStorage.getItem('token')
        }
      })
      alert('adicionado')
    } catch (error) {
      alert(error)
    }
  }

  return (
    <section className="album">
      <div className="avatar-album">
        <img src={album.url} alt={album.name} />
      </div>
      <div className="album-info">
        <ul>
          <li className="band-name">{album.band}</li>
          <li className="band-album">{album.name}</li>
          {page ? (
            <ButtonRadius
              title="Adicionar"
              albumId={album.id}
              setUserAlbum={() => setUserAlbum(album.id)}
            />
          ) : (
            ""
          )}
        </ul>
      </div>
    </section>
  );
}

export default Album
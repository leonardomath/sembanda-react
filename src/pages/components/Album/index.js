import React from 'react'
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import ButtonRadius from '../ButtonRadius'

import './style.css'
import api from '../../../services/api'

function Album({ albuns: album, page, loading, setLoading }) {

  async function setUserAlbum(album_id) {
    try {
      await api.post('/setAlbumUser', { album_id }, {
        headers: {
          Authorization: "Bearer " + window.localStorage.getItem('token')
        }
      })
      toast.success('Album adicionado ao perfil')
    } catch (error) {
      toast.error("O sistema está indisponível no momento.");
    }
  }

  async function removeAlbum(id) {
    await api.post('/album/delete', {id}, {
      headers: {
        Authorization: "Bearer " + window.localStorage.getItem('token')
      }
    })
    setLoading(!loading)
  }

  return (
    <section className="album">
      <ToastContainer />
      {page && page === "Profile" ? (
        <button className="close" onClick={() => removeAlbum(album.id)}>
          x
        </button>
      ) : (
        ""
      )}
      <div className="avatar-album">
        <img src={album.url} alt={album.name} />
      </div>
      <div className="album-info">
        <ul>
          <li className="band-name">{album.band}</li>
          <li className="band-album">{album.name}</li>
        </ul>
        {page && page === "album" ? (
          <ButtonRadius
            title="Adicionar"
            albumId={album.id}
            setUserAlbum={() => setUserAlbum(album.id)}
          />
        ) : (
          ""
        )}
      </div>
    </section>
  );
}

export default Album
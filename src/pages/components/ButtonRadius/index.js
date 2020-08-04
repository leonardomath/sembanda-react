import React from 'react'

import './style.css'

export default function ButtonRadius({ title, loading, albumId, setUserAlbum }) {
  return (
    <button className="buttonRadius" onClick={() => setUserAlbum(albumId)} disabled={loading ? true : false}>{loading ? 'Carregando...' : title }</button>
  )
}
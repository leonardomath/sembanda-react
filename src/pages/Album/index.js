import React from 'react'

import api from '../../services/api'

import LeftBar from '../components/LeftBar/LeftBar'
import Search from '../components/Search'
import Albuns from '../components/Album'

import { FaPlus } from "react-icons/fa";
import './style.css'

import Overlay from '../components/Overlay'

export default function Album() {

  const [albuns, setAlbuns] = React.useState([])
  const [albumName, setAlbumName] = React.useState('')
  const [band, setBand] = React.useState('')
  const [avatar, setAvatar] = React.useState('')
  const [loading, setLoading] = React.useState(false);

  async function storeAlbum() {
    const response = await api.post('/album', {
      name: albumName,
      band,
    })
  }

 React.useEffect(() => {
   async function getAlbuns() {
     const response = await api.get('/album', {
       headers: {
         Authorization: "Bearer "+window.localStorage.getItem('token')
       }
     })
     setAlbuns(response.data)
     console.log(response)
   }
   getAlbuns()
 }, [loading])

  function handleOpenBox() {
    const box = document.querySelector('.overlay')
    box.style.display = 'flex'
  }

  return (
    <section className="container">
      <Overlay loading={loading} setLoading={setLoading} />
      <LeftBar />
      <button className="plus" onClick={handleOpenBox}><FaPlus className="IconPlus" size={18} color="#000" /></button>
      <h1>Album disponíveis</h1>
      <Search info="Procurar album" />
      <section className="album-list">
        {albuns ? albuns.map((album, key) => <Albuns key={album+key} page="album" albuns={album} />) : 'Sem albums'}
      </section>
    </section>
  )
}
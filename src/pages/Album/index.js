import React from 'react'

import LeftBar from '../components/LeftBar/LeftBar'
import Search from '../components/Search'
import Albuns from '../components/Album'

import { FaPlus } from "react-icons/fa";
import './style.css'

import Overlay from '../components/Overlay'

export default function Album() {

  function handleOpenBox() {
    const box = document.querySelector('.overlay')
    box.style.display = 'flex'
  }

  return (
    <section className="container">
      <Overlay />
      <LeftBar />
      <button className="plus" onClick={handleOpenBox}><FaPlus className="IconPlus" size={18} color="#000" /></button>
      <h1>Album disponíveis</h1>
      <Search info="Procurar album" />
      <section className="album-list">
        <Albuns page="album" />
        <Albuns page="album" />
        <Albuns page="album" />
        <Albuns page="album" />
        <Albuns page="album" />
        <Albuns page="album" />
        <Albuns page="album" />
        <Albuns page="album" />
        <Albuns page="album" />
        <Albuns page="album" />
        <Albuns page="album" />
        <Albuns page="album" />
        <Albuns page="album" />
        <Albuns page="album" />
        <Albuns page="album" />
        <Albuns page="album" />
        <Albuns page="album" />
      </section>
    </section>
  )
}
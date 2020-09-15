import React from 'react'
import './style.css'
import { FaSearch, FaHome } from "react-icons/fa"
import { IoMdClose } from 'react-icons/io'
import { Link, useHistory } from 'react-router-dom'

import AlbumIcon from './assets/music-albums.svg'

export default function LeftBar() {

  const history = useHistory()

  function loggout() {
    window.localStorage.removeItem('token')
    history.push('/')
  }

  return (
    <aside className="leftbar">
      <ul>
        <li><Link to="/profile"> <FaHome size={32} color="#fff" /></Link>  </li>
        <li><Link to="/album"><img src={AlbumIcon} /></Link></li>
        <li><Link to="/users"><FaSearch size={32} color="#fff" /></Link></li>
        <li><IoMdClose size={45} color="#fff" onClick={loggout} /></li>
      </ul>
    </aside>
  )
}
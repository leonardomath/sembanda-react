import React from 'react'

import './style.css'

import { FaSearch } from "react-icons/fa"

export default function Search(props) {
  return (
    <div className="search">
      <span className="search-icon">
        <FaSearch />
      </span>
      <input
        className="searchInput"
        type="text"
        placeholder={props.info}
        value={props.band}
        onChange={(e) => props.setBand(e.target.value)}
      />
    </div>
  );
}
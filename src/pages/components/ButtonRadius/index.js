import React from 'react'

import './style.css'

export default function ButtonRadius(props) {
  console.log(props)
  return (
    <button
      className="buttonRadius"
      onClick={props.setUserAlbum}
      disabled={props.loading ? true : false}
    >
      {props.loading ? "Carregando..." : props.title}
    </button>
  );
}
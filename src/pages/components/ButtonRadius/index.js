import React from 'react'

import './style.css'

export default function ButtonRadius({ title, ...props}) {
  console.log(props)
  return (
    <button
      {...props}
      className="buttonRadius"
      onClick={props.setUserAlbum}
      disabled={props.loading ? true : false}
    >
      {props.loading ? "Carregando..." : title}
    </button>
  );
}
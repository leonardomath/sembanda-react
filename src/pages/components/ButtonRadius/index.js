import React from 'react'

import './style.css'

export default function ButtonRadius({ title, loading }) {
  return (
  <button className="buttonRadius" disabled={loading ? true : false}>{loading ? 'Carregando...' : title }</button>
  )
}
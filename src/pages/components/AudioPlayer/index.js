import React from 'react'
import './style.css'
import api from '../../../services/api';

export default function AudioPlayer({url,title,id, setLoading}) {

  async function removeSong(id) {
    setLoading(true)
    try {
      await api.delete(`/song/${id}`, {
        headers: {
          Authorization: "Bearer " + window.localStorage.getItem("token"),
        },
      });
    } catch (error) {
      alert(`Aconteceu um erro: ${error}`)
    } finally {
      setLoading(false)
    }
  }
  return (
    <div className="audio-player">
      <button onClick={() => removeSong(id)}>x</button>
      <h1>{title}</h1>
      <audio controls>
        <source src={url} type="audio/mpeg" />
      </audio>
    </div>
  );
}
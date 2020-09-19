import React from 'react'
import './style.css'
import api from '../../../services/api';
import { Media, Player, controls, } from "react-media-player";
const {
  PlayPause,
  CurrentTime,
  SeekBar,
} = controls;

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
      <button className="close" onClick={() => removeSong(id)}>x</button>
      <h1>{title}</h1>
      <Media>
        <div className="media">
          <div className="media-player">
            <Player src={url} />
          </div>
          <div className="media-controls">
            <PlayPause />
            <CurrentTime />
            <SeekBar />
          </div>
        </div>
      </Media>
    </div>
  );
}
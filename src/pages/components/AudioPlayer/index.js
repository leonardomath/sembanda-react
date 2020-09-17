import React from 'react'
import './style.css'

export default function AudioPlayer({url,title}) {
  return (
    <div className="audio-player">
      <h1>{title}</h1>
      <audio controls>
        <source src={url} type="audio/mpeg" />
      </audio>
    </div>
  );
}
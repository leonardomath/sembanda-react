import React from 'react'
import AudioPlayer from '../AudioPlayer'
import api from '../../../services/api'
import './style.css'
import UploadSong from '../UploadSong'

export default function UserSongs() {

  const [songs, setSongs] = React.useState([])
  const [overlay, setOverlay] = React.useState(false);
  const [loading, setLoading] = React.useState(false)

  React.useEffect(() => {
    async function getSongs() {
      const response = await api.get("/song", {
        headers: {
          Authorization: "Bearer " + window.localStorage.getItem("token"),
        },
      });
      setSongs(response.data);
    }
    getSongs();
  }, [overlay,loading]);

  return (
    <div className="repertory">
      {overlay ? <UploadSong overlay={overlay} setOverlay={setOverlay} /> : ""}
      <div style={{ width: "100%" }}>
        <button
          class="btnAdicionar"
          onClick={() => {
            setOverlay(!overlay);
          }}
        >
          Enviar nova musica
        </button>
      </div>
      {songs
        ? songs.map((song) => (
            <AudioPlayer
              setLoading={setLoading}
              id={song.Song.id}
              url={song.Song.song_path}
              title={song.Song.title}
            />
          ))
        : ""}
    </div>
  );
}
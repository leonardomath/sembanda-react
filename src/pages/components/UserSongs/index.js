import React from 'react'
import AudioPlayer from '../AudioPlayer'
import api from '../../../services/api'
import './style.css'
import UploadSong from '../UploadSong'

export default function UserSongs() {

  const [songs, setSongs] = React.useState([])
  const [overlay, setOverlay] = React.useState(false);

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
    console.log('ativou')
  }, [overlay]);

  return (
    <div className="repertory">
      { overlay ? <UploadSong overlay={overlay} setOverlay={setOverlay} /> : ''}
      <div style={{ width: '100%' }}>
      <button onClick={() => {setOverlay(!overlay)}}>Enviar nova musica</button>
      </div>
      {songs ? songs.map((song) => <AudioPlayer url={song.Song.song_path} title={song.Song.title} />) : ""}
    </div>
  );
}
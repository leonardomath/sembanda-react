import React from 'react'
import './style.css'
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import api from '../../../services/api'

export default function UploadSong({ overlay, setOverlay }) {

  const [name, setName] = React.useState('')

  async function uploadSong(e) {
    e.preventDefault()
    let formData = new FormData()
    let song = document.querySelector('#file')
    formData.append('title', name)
    formData.append('file', song.files[0])
    try {
      const response = await api.post("/song", formData, {
        headers: {
          Authorization: "Bearer " + window.localStorage.getItem("token"),
          "Content-Type": "multipart/form-data",
        },
      });
      if (response.data.error) {
        toast.error(response.data.error)
      } else {
        setOverlay(!overlay);
      }
    } catch (error) {
      toast.error("O sistema está indisponível no momento.");
    } 
    
  }

  function exit(e) {
    e.preventDefault()
    setOverlay(!overlay);
  }

  return (
    <>
    <ToastContainer />
    <div className="overlay-song">
      
      <form method="POST" onSubmit={uploadSong} encType="multipart/form-data">
        <button onClick={exit} className="close">X</button>
        <label htmlFor="file">
          escolher musica
          <input id="file" type="file" />
        </label>
        <input
          type="text"
          placeholder="Nome da musica"
          value={name}
          onChange={({ target }) => setName(target.value)}
        />
        <button class="submit" type="submit">Enviar</button>
      </form>
    </div>
    </>
  );
}
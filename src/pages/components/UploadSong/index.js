import React from 'react'
import './style.css'
import ButtonRadius from '../ButtonRadius'
import api from '../../../services/api'

export default function UploadSong() {

  const [name, setName] = React.useState('')

  async function uploadSong(e) {
    e.preventDefault()
    let formData = new FormData()
    let image = document.querySelector('#file')
    formData.append('title', name)
    formData.append('file', image.files[0])
    try {
      const response = api.post("/song", formData, {
        headers: {
          Authorization: "Bearer " + window.localStorage.getItem("token"),
          "Content-Type": "multipart/form-data",
        },
      });
      if (response.error) {
        alert('Erro ao enviar')
      } else {
        alert('sucesso')
      }
    } catch (error) {
      alert('error')
    }
  }

  return (
    <div className="overlay-song">
      <form method="POST" onSubmit={uploadSong} encType="multipart/form-data">
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
        <ButtonRadius title="enviar" type="submit" />
      </form>
    </div>
  );
}
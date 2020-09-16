import React from 'react'

import './style.css'
import ButtonRadius from '../ButtonRadius'
import api from '../../../services/api'

function handleExit() {
  const box = document.querySelector('.overlay')
  box.style.display = 'none'
}

function previewImage(e) {
  const file = document.querySelector('#file')
  document.querySelector('#avatar_album').src = window.URL.createObjectURL(file.files[0])
}


export default function Overlay({ loading, setLoading, noAlbum, setNoAlbum }) {
  const [name, setName] = React.useState("");
  const [band, setBand] = React.useState("");

  async function newAlbum(e) {
    setLoading(true);
    e.preventDefault();
    let formData = new FormData();
    var image = document.querySelector("#file");
    formData.append("file", image.files[0]);
    formData.append("name", name);
    formData.append("band", band);
    try {
      await api.post("/album", formData, {
        headers: {
          Authorization: "Bearer " + window.localStorage.getItem("token"),
          "Content-Type": "multipart/form-data",
        },
      });
    } catch (error) {
      alert(error);
    } finally {
      setLoading(false);
      setName("");
      setBand("");
      handleExit();
      setNoAlbum(!noAlbum)
    }
  }
  return (
    <section className="overlay">
      <section className="box-register-album">
        <button id="btnExit" className="btnExit" onClick={handleExit}>
          x
        </button>
        <form
          className="form-album"
          method="post"
          encType="form/data"
          onSubmit={newAlbum}
        >
          <div className="avatar-album-register">
            <input
              type="file"
              id="file"
              name="avatar_url"
              onChange={previewImage}
            />
            <label htmlFor="file">
              <img
                style={{ cursor: "pointer" }}
                id="avatar_album"
                src="https://target.scene7.com/is/image/Target/GUEST_f7e678bb-5d56-4006-b5ac-5d60c3a3f253?wid=488&hei=488&fmt=pjpeg"
                alt="album"
              />
            </label>
          </div>
          <div className="album-description-register">
            <input
              type="text"
              placeholder="Nome do album"
              required
              onChange={(e) => setName(e.target.value)}
              value={name}
            />
            <input
              type="text"
              placeholder="Nome da banda"
              required
              onChange={(e) => setBand(e.target.value)}
              value={band}
            />
            <ButtonRadius title="Adicionar" loading={loading} />
          </div>
        </form>
      </section>
    </section>
  );
}
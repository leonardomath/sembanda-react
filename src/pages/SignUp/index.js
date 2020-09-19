import React, { useState, useEffect } from 'react'
import NavBar from '../components/NavBar'
import api from '../../services/api'
import './style.css'
import AvatarUser from '../components/AvatarUser'
import { useHistory } from 'react-router-dom'
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function previewImage(e) {
  const file = document.querySelector('#file')
  document.querySelector('.avatar').src = window.URL.createObjectURL(file.files[0])
}

export default function SignUp() {

  const history = useHistory()

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [instrument, setInstrument] = useState("");
  const [userState, setUserState] = useState("");
  const [brazilStates, setBrazilStates] = useState([])

  useEffect(() => {
    async function getStates() {
      const response = await api.get(
        "http://www.geonames.org/childrenJSON?geonameId=3469034"
      );
      setBrazilStates(response.data.geonames);
    }
    getStates()
  }, [])

  async function newUser(e) {
    e.preventDefault()
    let formData = new FormData()
    let image = document.querySelector('#file')
    formData.append('file', image.files[0])
    formData.append('name', name)
    formData.append('email', email)
    formData.append('password', password)
    formData.append('instrument', instrument)
    formData.append("city", userState);
    try {
      const response = await api.post("/user", formData, {
        headers: {
          Authorization: "Bearer " + window.localStorage.getItem("token"),
          "Content-Type": "multipart/form-data",
        },
      });
      if (response.data.error) {
        toast.error(response.data.error)
      } else {
        window.localStorage.setItem("token", response.data.token)
        history.push("/profile")
      }
    } catch (error) {
      toast.error("O sistema está indisponível no momento.");
    }
  }

  return (
    <div>
      <NavBar />
      <ToastContainer />
      <div className="box-signup">
        <div className="random-images" style={{ background: "url('https://source.unsplash.com/collection/827741/500x900') no-repeat center center"}}>
          
        </div>
        <div className="form-signup">
          <h1 className="form-signup-title">Nova conta</h1>

          <form onSubmit={newUser} method="post" encType="form/data">
            <label htmlFor="file">
              <AvatarUser />
            </label>
            <input id="file" type="file" name="avatar_url" onChange={previewImage} />
            <input type="text" placeholder="Nome" onChange={({target}) => setName(target.value)} value={name} />
            <input type="email" placeholder="E-mail" onChange={({target}) => setEmail(target.value)} value={email} />
            <input type="password" placeholder="Senha" onChange={({target}) => setPassword(target.value)} value={password} />
            <select onChange={({target}) => setUserState(target.value)} value={userState}>
              <option value="" defaultValue disabled>Selecione seu estado</option>
              {brazilStates.map((state) => (
                <option key={state.name} value={state.name}>{state.name}</option>
              ))}
            </select>
            <select onChange={({target}) => setInstrument(target.value)} value={instrument}>
              <option value="" defaultValue disabled>Escolha seu instrumento</option>
              <option value="Guitarra">Guitarra</option>
              <option value="Violão">Violão</option>
              <option value="Baixo">Baixo</option>
              <option value="Bateria">Bateria</option>
              <option value="Teclado">Teclado</option>
              <option value="Vocal">Vocal</option>
            </select>
            <button type="submit">Cadastrar-se</button>
          </form>

        </div>
      </div>
    </div>
  )
}
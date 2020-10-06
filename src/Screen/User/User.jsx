import axios from 'axios';
import { goToFeed } from '../routes/Coordinator';

const baseUrl = "https://us-central1-missao-newton.cloudfunctions.net/fourFoodB"

 export const login = (body, history, setButtonName) => {
  axios.post(`${baseUrl}/login`, body)
    .then((response) => {
      localStorage.setItem('token', response.data.token)
      goToHome(history)
      setButtonName('Logout')
    })
    .catch((error) => {
      console.log(error)
      alert("Falha no Login, tente novamente!")
    })
}

 export const signUpUser = (body, history, setButtonName) => {
  axios.post(`${baseUrl}/signup`, body)
    .then((response) => {
      localStorage.setItem('token', response.data.token)
      goToHome(history)
      setButtonName('Logout')
    })
    .catch((error) => {
      console.log(error)
      alert("Falha no cadastro, tente novamente!")
    })
}

export const addAddress = (body, history, setButtonName) => {
    axios.post(`${baseUrl}/address`, body)
      .then((response) => {
        localStorage.setItem('token', response.data.token)
        goToHome(history)
        setButtonName('Logout')
      })
      .catch((error) => {
        console.log(error)
        alert("Falha no cadastro, tente novamente!")
      })
  }



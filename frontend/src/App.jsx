import './App.css'

import { useState } from 'react'
import AppRouter from './AppRouter'
import { AuthContext } from './context/auth'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { useEffect } from 'react'

axios.defaults.withCredentials = true
axios.defaults.baseURL = 'http://localhost:3000/api'

function App() {
  const [user, setUser] = useState(null)
  const navigate = useNavigate()

  useEffect(() => {
    refreshUser()
  }, [])

  const refreshUser = () => {
    const alreadyLoggedIn = localStorage.getItem('user')

    if (alreadyLoggedIn) {
      setUser(JSON.parse(alreadyLoggedIn))
    }
  }

  const login = ({ email, password }) => {
    axios
      .post('/user/login', {
        email,
        password
      })
      .then(response => {
        setUser(response.data.user)
        localStorage.setItem('user', JSON.stringify(response.data.user))
      })
      .catch(({ response }) => {
        alert(`Login failed! ${response.data}`)
      })
  }

  const logout = async () => {
    await axios.post('/user/logout')
    localStorage.removeItem('user')
    setUser(null)
  }

  const register = ({ name, email, password, isProfessor }) => {
    axios
      .post('/user/register', {
        name,
        email,
        password,
        isProfessor
      })
      .then(response => {
        navigate('/user/login')
      })
      .catch(({ response }) => {
        alert(`Login failed! ${response.data}`)
      })
  }

  return (
    <AuthContext.Provider value={{ user, login, logout, register, refreshUser }}>
      <AppRouter />
    </AuthContext.Provider>
  )
}

export default App

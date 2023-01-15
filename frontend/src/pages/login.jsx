import { useState } from 'react'
import { useAuth } from '../context/auth'
import { useNavigate } from 'react-router-dom'

const LoginPage = () => {
  const navigate = useNavigate()
  const { login } = useAuth()
  const [form, setForm] = useState({
    email: '',
    password: ''
  })

  const handleLogin = async () => {
    const { email, password } = form
    login({ email, password })
  }

  const handleFormChange = (e, field) => {
    let value = e.target.value

    if (field === 'isProfessor') {
      value = !form.isProfessor
    }

    setForm({
      ...form,
      [field]: value
    })
  }

  return (
    <>
      <h1>Login</h1>
      <small onClick={() => navigate('/user/register')}>Go to register</small>

      <form>
        <input
          type="email"
          placeholder="Your email here..."
          onChange={e => handleFormChange(e, 'email')}
        ></input>
        <input
          type="password"
          placeholder="Your password here..."
          onChange={e => handleFormChange(e, 'password')}
        ></input>
      </form>

      <button onClick={async () => await handleLogin()}>Login</button>
    </>
  )
}

export default LoginPage

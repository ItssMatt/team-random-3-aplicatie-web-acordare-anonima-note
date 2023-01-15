import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../context/auth'

const RegisterPage = () => {
  const { register } = useAuth()
  const navigate = useNavigate()
  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
    isProfessor: false
  })

  const handleRegister = async () => {
    const { name, email, password, isProfessor } = form
    register({ name, email, password, isProfessor })
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
      <h1>Register</h1>
      <small onClick={() => navigate('/user/login')}>Go to login</small>

      <form>
        <input
          type="text"
          placeholder="Your name here..."
          onChange={e => handleFormChange(e, 'name')}
        ></input>
        <input
          type="password"
          placeholder="Your password here..."
          onChange={e => handleFormChange(e, 'password')}
        ></input>
        <input
          type="email"
          placeholder="Your email here..."
          onChange={e => handleFormChange(e, 'email')}
        ></input>
        <input type="checkbox" onChange={e => handleFormChange(e, 'isProfessor')}></input>
      </form>

      <button onClick={async () => await handleRegister()}>Register</button>
    </>
  )
}

export default RegisterPage

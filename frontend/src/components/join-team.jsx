import { useState, useEffect } from 'react'
import axios from 'axios'

const JoinTeam = ({ onJoinTeam }) => {
  const [value, setValue] = useState('')
  const [options, setOptions] = useState([])

  useEffect(() => {
    axios
      .get('http://localhost:3000/api/team', { withCredentials: true })
      .then(response => {
        setOptions(response.data)
      })
      .catch(() => {})
  }, [])

  const handleOptionChange = option => {
    setValue(option)
  }

  return (
    <>
      <select
        name="team-options"
        id="team-options"
        onChange={e => handleOptionChange(e.target.value)}
        value={value}
      >
        {options.map(option => (
          <option key={option.id} value={option.id}>
            {option.name}
          </option>
        ))}
      </select>

      <button onClick={() => {onJoinTeam(value); alert('Ai intrat cu succes in echipa.')}}>Join</button>
    </>
  )
}

export default JoinTeam

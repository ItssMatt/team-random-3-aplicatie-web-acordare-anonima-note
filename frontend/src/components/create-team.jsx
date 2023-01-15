import { useState } from 'react'

const CreateTeam = ({ onCreateTeam }) => {
  const [name, setName] = useState('')

  return (
    <>
      <form>
        <input
          type="text"
          placeholder="Insert the team name here"
          onChange={e => setName(e.target.value)}
        />
      </form>

      <button onClick={() => {onCreateTeam(name); alert('Ai creat cu succes o echipa.')}}>Create</button>
    </>
  )
}

export default CreateTeam

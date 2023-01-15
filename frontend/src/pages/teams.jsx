import axios from 'axios'
import { useEffect, useState } from 'react'

const TeamsPage = () => {
  const [teams, setTeams] = useState([])

  useEffect(() => {
    axios
      .get('http://localhost:3000/api/team', { withCredentials: true })
      .then(response => {
        setTeams(response.data)
      })
      .catch(() => {})
  }, [])

  return (
    <>
      {teams.length > 0 && (
        <table>
          <tr>
            <th>id</th>
            <th>name</th>
            <th>finished project</th>
          </tr>
          {teams.map((team, index) => (
            <tr key={index}>
              <td>{team.id}</td>
              <td>{team.name}</td>
              <td>{team.finishedProject ? 'Yes' : 'No'}</td>
            </tr>
          ))}
        </table>
      )}

      {!teams.length && <span>No teams found</span>}
    </>
  )
}

export default TeamsPage

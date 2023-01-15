import { useState } from 'react'
import CreateTeam from '../components/create-team'
import JoinTeam from '../components/join-team'
import axios from 'axios'
import { useAuth } from '../context/auth'

const StudentPage = () => {
  const { refreshUser, user } = useAuth()
  const [content, setContent] = useState()

  const openCreateTeam = () => {
    setContent('create-team')
  }

  const openJoinTeam = () => {
    setContent('join-team')
  }

  const handleCreateTeam = name => {
    axios
      .post('http://localhost:3000/api/team', { name })
      .then(() => {
        try {
          const currentUser = JSON.parse(localStorage.getItem('user'))
          currentUser.isTeamLead = 1
          localStorage.setItem('user', JSON.stringif(currentUser))
          refreshUser()
        } catch (error) {
          console.log(error)
        }
      })
      .catch(() => {})
  }

  const handleJoinTeam = teamId => {
    console.log(teamId)

    axios
      .post('/user/joinTeam', {
        teamId
      })
      .then(response => {
        setUser(response.data.user)
        localStorage.setItem('user', JSON.stringify(response.data.user))

        alert('You have successfully joined the team!')
      })
      .catch(() => {})
  }

  return (
    <>
      {user.isTeamLead === 1 ? (
        <>Esti team lead</>
      ) : user.teamId !== null ? (
        <>Esti in team id {user.teamId}</>
      ) : (
        <>
          <button onClick={() => openCreateTeam()}>Create Team</button>
          <button onClick={() => openJoinTeam()}>Join Team</button>
        </>
      )}

      {content === 'create-team' && <CreateTeam onCreateTeam={handleCreateTeam} />}
      {content === 'join-team' && <JoinTeam onJoinTeam={handleJoinTeam} />}
    </>
  )
}

export default StudentPage

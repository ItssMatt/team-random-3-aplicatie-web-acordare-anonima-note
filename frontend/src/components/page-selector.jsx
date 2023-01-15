import { useNavigate } from 'react-router-dom'
import { useAuth } from '../context/auth'

const PageSelector = () => {
  const { user } = useAuth()
  const navigate = useNavigate()

  return (
    <>
      {user && (user.isProfessor === true || user.isTeamLead === true) && (
        <button onClick={() => navigate('/teams')}>Teams Page</button>
      )}

      {user && !user.isProfessor && (
        <button onClick={() => navigate('/student')}>Student Page</button>
      )}
    </>
  )
}

export default PageSelector

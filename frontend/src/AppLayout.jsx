import { Outlet } from 'react-router-dom'
import { Suspense } from 'react'
import { useAuth } from './context/auth'

const AppLayout = () => {
  const { logout } = useAuth()

  return (
    <>
      <nav>
        <ul>
          <li onClick={() => logout()}>Logout</li>
        </ul>
      </nav>

      <Suspense fallback={'Loading layout...'}>
        <Outlet />
      </Suspense>
    </>
  )
}

export default AppLayout

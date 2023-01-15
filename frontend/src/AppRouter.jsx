import { Routes, Route, Outlet, Navigate, useLocation } from 'react-router-dom'
import { Suspense, lazy } from 'react'
import { useAuth } from './context/auth'
import AppLayout from './AppLayout'
import { useEffect } from 'react'
import PageSelector from './components/page-selector'

const LoginPage = lazy(() => import('./pages/login'))
const RegisterPage = lazy(() => import('./pages/register'))
const TeamsPage = lazy(() => import('./pages/teams'))
const StudentPage = lazy(() => import('./pages/student'))

const AppRouter = () => {
  const { user } = useAuth()
  const location = useLocation()

  useEffect(() => {
    console.log('route changed', location.pathname)
  }, [location])

  return (
    <Routes>
      <Route path="user" element={user ? <Navigate to="/" /> : <Outlet />}>
        <Route
          path="login"
          element={
            <Suspense fallback={<>Loading login page...</>}>
              <LoginPage />
            </Suspense>
          }
        />
        <Route
          path="register"
          element={
            <Suspense fallback={<>Loading register page...</>}>
              <RegisterPage />
            </Suspense>
          }
        />
      </Route>

      <Route element={user ? <AppLayout /> : <Navigate to="/user/login" />}>
        <Route index element={<PageSelector />} />

        <Route
          path="teams"
          element={
            <Suspense fallback={<>Loading teams page...</>}>
              <TeamsPage />
            </Suspense>
          }
        />

        <Route
          path="student"
          element={
            user && user.isProfessor ? (
              <Navigate to="/teams" replace />
            ) : (
              <Suspense fallback={<>Loading student page...</>}>
                <StudentPage />
              </Suspense>
            )
          }
        />
      </Route>

      <Route path="*" element={<>Route not found</>} />
    </Routes>
  )
}

export default AppRouter

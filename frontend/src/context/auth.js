import { createContext, useContext } from 'react'

const AuthContext = createContext({
  user: null,
  login: userData => {},
  logout: () => {},
  refreshUser: () => {},
  register: userData => {}
})

const useAuth = () => useContext(AuthContext)

export { AuthContext, useAuth }

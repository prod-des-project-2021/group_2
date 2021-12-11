import React, { useState } from 'react'

const AuthContext = React.createContext({
  token: '',
  isLoggedIn: false,
  login: (token,id) => {},
  logout: () => {},
})

export const AuthContextProvider = (props) => {
  const initialToken = localStorage.getItem('token')
  const [token, setToken] = useState(initialToken)


  const userIsLoggedIn = !!token

  const loginHandler = (token,id ) => {
    setToken(token)
    localStorage.setItem('token', token)
    localStorage.setItem('userId', id )
  }

  const logoutHandler = () => {
    setToken(null)
    localStorage.removeItem('token')
    localStorage.removeItem('userId')
  }

  const contextValue = {
    token: token,
    isLoggedIn: userIsLoggedIn,
    login: loginHandler,
    logout: logoutHandler,
  }

  return (
    <AuthContext.Provider value={contextValue}>
      {props.children}
    </AuthContext.Provider>
  )
}

export default AuthContext

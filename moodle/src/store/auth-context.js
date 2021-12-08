import React, { useState } from 'react'

const AuthContext = React.createContext({
  token: '',
  userInfo: {},
  isLoggedIn: false,
  login: (token, userData) => {},
  logout: () => {},
})

export const AuthContextProvider = (props) => {
  const initialToken = localStorage.getItem('token')
  const [token, setToken] = useState(initialToken)
  const [userInfo, setUserInfo] = useState([])

  const userIsLoggedIn = !!token

  const loginHandler = (token, userData) => {
    setToken(token)
    setUserInfo(userData)
    localStorage.setItem('token', token)
  }

  const logoutHandler = () => {
    setToken(null)

    setUserInfo(null)
    localStorage.removeItem('token')
  }

  const contextValue = {
    token: token,
    userInfo: { userInfo },
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

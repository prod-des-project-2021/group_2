import React, { useState } from 'react'

const AuthContext = React.createContext({
  token: '',
  userInfo: {},
  isLoggedIn: false,
  login: (token, userData) => {},
  logout: () => {},
})

export const AuthContextProvider = (props) => {
  const [token, setToken] = useState(null)
  const [userInfo, setUserInfo] = useState([])

  const userIsLoggedIn = !!token

  const loginHandler = (token, userData) => {
    setToken(token)
    setUserInfo(userData)
  }

  const logoutHandler = () => {
    setToken(null)
    setUserInfo(null)
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

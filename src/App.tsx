import React from "react"

import { UserProvider } from "./contexts/UserContext"

import Routes from "./routes"
import Global from "./styles/Global"

function App() {
  return (
    <>
      <Global />
      <UserProvider>
        <Routes />
      </UserProvider>
    </>
  )
}

export default App

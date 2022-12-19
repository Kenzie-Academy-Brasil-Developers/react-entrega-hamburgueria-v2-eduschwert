import React from "react"
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import { UserProvider } from "./contexts/UserContext"
import Routes from "./routes"
import Global from "./styles/Global"

function App() {
  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        style={{ fontSize: "1.4rem", fontWeight: "700" }}
      />
      <Global />
      <UserProvider>
        <Routes />
      </UserProvider>
    </>
  )
}

export default App

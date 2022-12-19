import React from "react"
import { Routes, Route, Navigate } from "react-router-dom"
import { RoutesLoggedIn } from "../components/RoutesLoggedIn"
import { RoutesNotLoggedIn } from "../components/RoutesNotLoggedIn"
import { DashboardPage } from "../pages/DashboardPage"
import { LoginPage } from "../pages/LoginPage"
import { RegisterPage } from "../pages/RegisterPage"

const RoutesMain = () => {
  return (
    <Routes>
      <Route element={<RoutesNotLoggedIn />}>
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/" element={<LoginPage />} />
      </Route>
      <Route element={<RoutesLoggedIn />}>
        <Route path="/dashboard" element={<DashboardPage />} />
      </Route>
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  )
}

export default RoutesMain

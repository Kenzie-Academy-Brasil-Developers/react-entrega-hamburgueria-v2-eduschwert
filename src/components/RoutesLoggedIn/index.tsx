import React from "react"
import { useContext } from "react"
import { Navigate, Outlet } from "react-router-dom"
import { UserContext } from "../../contexts/UserContext"

export const RoutesLoggedIn = () => {
  const { products, globalLoading } = useContext(UserContext)

  if (globalLoading) {
    return null
  }
  return products ? <Outlet /> : <Navigate to="/" />
}

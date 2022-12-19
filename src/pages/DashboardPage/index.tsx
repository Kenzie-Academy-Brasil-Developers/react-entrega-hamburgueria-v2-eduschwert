import React from "react"
import { FramerMotion } from "../../components/FramerMotion"
import { Header } from "../../components/Header"
import { ProductsList } from "../../components/ProductsList"

export const DashboardPage = () => {
  return (
    <FramerMotion>
      <Header />
      <ProductsList />
    </FramerMotion>
  )
}

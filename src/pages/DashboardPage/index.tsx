import React, { useContext, useState } from "react"
import { FramerMotion } from "../../components/FramerMotion"
import { Header } from "../../components/Header"
import { ModalCart } from "../../components/ModalCart"
import { Products } from "../../components/Products"
import { UserContext } from "../../contexts/UserContext"
import { ContainerDashboard } from "../../styles/Container"

export const DashboardPage = () => {
  const { products } = useContext(UserContext)
  const [search, setSearch] = useState("")
  const [openModal, setOpenModal] = useState(false)
  const [isClosing, setClosing] = useState(false)

  const closeModal = () => {
    setClosing(true)
    setTimeout(() => {
      setClosing(false)
      setOpenModal(false)
    }, 200)
  }

  const filteredList = products?.filter((product) =>
    !search
      ? true
      : product.name.toLowerCase().indexOf(search.toLowerCase()) !== -1 ||
        product.category.toLowerCase().indexOf(search.toLowerCase()) !== -1
  )
  return (
    <FramerMotion>
      {openModal && <ModalCart isClosing={isClosing} closeModal={closeModal} />}
      <Header setSearch={setSearch} setOpenModal={setOpenModal} />
      <ContainerDashboard>
        <Products setOpenModal={setOpenModal} filteredList={filteredList} />
      </ContainerDashboard>
    </FramerMotion>
  )
}

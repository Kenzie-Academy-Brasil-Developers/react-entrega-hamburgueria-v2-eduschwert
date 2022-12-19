import React from "react"
import { TailSpin } from "react-loader-spinner"

interface iSpinnerProps {
  loading: boolean
}

export const Spinner = ({ loading }: iSpinnerProps) => {
  return (
    <TailSpin
      height="100%"
      width="100%"
      color="#F8F9FA"
      ariaLabel="tail-spin-loading"
      radius="1"
      wrapperStyle={{ width: "100%", height: "50%" }}
      wrapperClass=""
      visible={loading}
    />
  )
}

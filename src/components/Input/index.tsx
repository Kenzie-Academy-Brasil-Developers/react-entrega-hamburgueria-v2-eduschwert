import React, { useState } from "react"
import { FieldError, UseFormRegisterReturn } from "react-hook-form"
import { SText } from "../../styles/typography"
import { SInput } from "./style"

interface iInputProps {
  id: string
  label: string
  type: "text" | "email" | "password"
  register: UseFormRegisterReturn
  error?: FieldError
  disabled?: boolean
}

export const Input = ({
  id,
  label,
  type,
  register,
  error,
  disabled,
}: iInputProps) => {
  const [inputClicked, setInputClicked] = useState(false)
  return (
    <>
      <SInput error={error} inputClicked={inputClicked}>
        <input
          id={id}
          type={type}
          placeholder=" "
          disabled={disabled}
          {...register}
          onKeyUp={() => setInputClicked(true)}
          onClick={() => setInputClicked(true)}
        />
        <label htmlFor={id}>{label}</label>
      </SInput>
      {error && (
        <SText
          tag="p"
          fontSize="1.2rem"
          fontWeigth="400"
          color="var(--color-error)"
          marginBottom=".9rem"
        >
          {error.message}
        </SText>
      )}
    </>
  )
}

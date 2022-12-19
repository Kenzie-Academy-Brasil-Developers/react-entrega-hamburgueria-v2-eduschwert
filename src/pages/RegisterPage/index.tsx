import React, { useContext, useState } from "react"
import { SubmitHandler, useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import { registerSchema } from "./registerSchema"
import { Input } from "../../components/Input"
import { ContainerRegister } from "../../styles/Container"
import { StyledForm } from "../../styles/Form"
import { STitle } from "../../styles/typography"
import { StyledButton } from "../../styles/buttons"
import { Logo } from "../../components/Logo"
import { UserContext } from "../../contexts/UserContext"
import { Link } from "react-router-dom"
import { FramerMotion } from "../../components/FramerMotion"
import { Spinner } from "../../components/Spinner"

export const RegisterPage = () => {
  const [loading, setLoading] = useState(false)
  const { register: registerSubmit } = useContext(UserContext)
  interface iLoginForm {
    email: string
    name: string
    password: string
    passwordConfirm: string
  }
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<iLoginForm>({
    mode: "onBlur",
    resolver: yupResolver(registerSchema),
  })
  const submit: SubmitHandler<iLoginForm> = (data) => {
    registerSubmit(data, setLoading)
  }
  return (
    <FramerMotion>
      <ContainerRegister>
        <StyledForm onSubmit={handleSubmit(submit)} page="register" noValidate>
          <div>
            <div>
              <STitle
                tag="h2"
                fontSize="1.8rem"
                fontWeigth="700"
                color="var(--color-grey-6)"
              >
                Cadastro
              </STitle>
              <Link to="/">Retornar para o login</Link>
            </div>
            <Input
              id="name"
              label="Nome"
              type="text"
              register={register("name")}
              error={errors.name}
              disabled={loading}
            />
            <Input
              id="email"
              label="Email"
              type="email"
              register={register("email")}
              error={errors.email}
              disabled={loading}
            />
            <Input
              id="password"
              label="Senha"
              type="password"
              register={register("password")}
              error={errors.password}
              disabled={loading}
            />
            <Input
              id="passwordConfirm"
              label="Confirmar Senha"
              type="password"
              register={register("passwordConfirm")}
              error={errors.passwordConfirm}
              disabled={loading}
            />
            <StyledButton type="submit" buttonsize="default" buttonstyle="grey">
              <Spinner loading={loading} />
              {!loading && "Cadastrar"}
            </StyledButton>
          </div>
        </StyledForm>
        <Logo />
      </ContainerRegister>
    </FramerMotion>
  )
}

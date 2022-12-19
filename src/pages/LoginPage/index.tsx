import React, { useContext, useState } from "react"
import { SubmitHandler, useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import { loginSchema } from "./loginSchema"
import { Input } from "../../components/Input"
import { ContainerLogin } from "../../styles/Container"
import { StyledForm } from "../../styles/Form"
import { SText, STitle } from "../../styles/typography"
import { StyledButton, StyledLinkButton } from "../../styles/buttons"
import { Logo } from "../../components/Logo"
import { UserContext } from "../../contexts/UserContext"
import { FramerMotion } from "../../components/FramerMotion"
import { Spinner } from "../../components/Spinner"

export const LoginPage = () => {
  const [loading, setLoading] = useState(false)
  const { login } = useContext(UserContext)
  interface iLoginForm {
    email: string
    password: string
  }
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<iLoginForm>({
    mode: "onBlur",
    resolver: yupResolver(loginSchema),
  })
  const submit: SubmitHandler<iLoginForm> = (data) => {
    login(data, setLoading)
  }
  return (
    <FramerMotion>
      <ContainerLogin>
        <StyledForm onSubmit={handleSubmit(submit)} page="login" noValidate>
          <div>
            <div>
              <STitle
                tag="h2"
                fontSize="1.8rem"
                fontWeigth="700"
                color="var(--color-grey-6)"
              >
                Login
              </STitle>
            </div>
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

            <StyledButton
              type="submit"
              buttonsize="default"
              buttonstyle="primary"
            >
              <Spinner loading={loading} />
              {!loading && "Logar"}
            </StyledButton>
            <div>
              <SText
                tag="small"
                fontSize="1.4rem"
                fontWeigth="400"
                color="var(--color-grey-2)"
                textAlign="center"
              >
                Crie sua conta para saborear muitas delícias e matar sua fome!
              </SText>
            </div>
            <StyledLinkButton
              to="/register"
              buttonsize="default"
              buttonstyle="grey"
            >
              Cadastrar
            </StyledLinkButton>
          </div>
        </StyledForm>
        <Logo />
      </ContainerLogin>
    </FramerMotion>
  )
}

import * as yup from "yup"

export const registerSchema = yup.object().shape({
  name: yup
    .string()
    .required("O nome é obrigatório!")
    .min(3, "O nome precisa de pelo menos 3 caracteres.")
    .max(200, "O nome pode ter no máximo 200 caracteres."),
  email: yup
    .string()
    .required("O Email é obrigatório!")
    .email("O Email digitado é inválido."),
  password: yup
    .string()
    .required("A senha é obrigatória!")
    .min(8, "A senha precisa conter pelo menos 8 caracteres.")
    .matches(
      /(?=.*?[#?!@$%^&*-])/,
      "É necessário pelo menos um caractere especial."
    )
    .matches(/(?=.*?[0-9])/, "É necessário pelo menos um número.")
    .matches(
      /(?=.*?[a-zA-Z\u00C0-\u00FF])/,
      "É necessário ter pelo menos uma letra."
    ),
  passwordConfirm: yup
    .string()
    .oneOf([yup.ref("password"), null], "As senhas não conferem."),
})

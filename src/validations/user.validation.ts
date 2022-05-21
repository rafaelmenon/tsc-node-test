import * as yup from "yup";

export const userValidation = yup.object({
  name: yup.string().required("name é obrigatório"),
  email: yup.string().required("email é obrigatório").email("email inválido"),
  password: yup
    .string()
    .required("password é obrigatório")
    .min(6, "password minimo 6 caracteres"),
});

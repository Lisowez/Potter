import { SubmitHandler, useForm } from "react-hook-form"

import style from "./Form.module.css"

export interface Credentials {
  email: string
  password: string
}
interface FormPropsInterface {
  onSubmit: SubmitHandler<Credentials>
  type: string
}

export const Form = ({ onSubmit, type }: FormPropsInterface) => {
  const { register, handleSubmit } = useForm<Credentials>()

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={`${style[`form`]}`}>
      <input
        {...register("email", { required: true })}
        type="email"
        className={`${style[`email_input`]}`}
        placeholder="Enter your email"
      />
      <input
        {...register("password", { required: true, minLength: 7 })}
        type="password"
        className={`${style[`password_input`]}`}
        placeholder="Enter your password"
      />
      <button className={`${style[`form_button`]}`}>{type}</button>
    </form>
  )
}

import { SubmitHandler, useForm } from "react-hook-form"
import { RegistrationData } from "../../ulits/interface/Registration"
import style from "./Form.module.css"

interface FormPropsInterface {
  onSubmit: SubmitHandler<RegistrationData>
  type: string
}

export const Form = ({ onSubmit, type }: FormPropsInterface) => {
  const { register, handleSubmit } = useForm<RegistrationData>()

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

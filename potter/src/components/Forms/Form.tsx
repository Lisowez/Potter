import { SubmitHandler, useForm } from "react-hook-form"
import style from "./Form.module.css"

export interface Credentials {
  email: string
  password: string
}

interface FormPropsInterface {
  onSubmit: SubmitHandler<Credentials>
  type: string
  error: string
}

export const Form = ({ onSubmit, type, error }: FormPropsInterface) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Credentials>()

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={style.form}>
      <div className={style.input_container}>
        <input
          {...register("email", { required: true })}
          type="email"
          className={style.email_input}
          placeholder="Enter your email"
        />
        {errors.email?.message && (
          <div className={style.error_message}>{errors.email.message}</div>
        )}
      </div>
      <div className={style.input_container}>
        <input
          {...register("password", {
            required: true,
            minLength: {
              value: 7,
              message: "Password must be at least 7 characters long",
            },
          })}
          type="password"
          className={style.password_input}
          placeholder="Enter your password"
        />
        {errors.password?.message && (
          <div className={style.error_message}>{errors.password.message}</div>
        )}
      </div>
      <button className={style.form_button}>{type}</button>
      <div style={{ color: "red", fontSize: "10px" }}>{error}</div>
    </form>
  )
}

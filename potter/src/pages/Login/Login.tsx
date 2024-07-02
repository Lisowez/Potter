import { SubmitHandler } from "react-hook-form"
import { RegistrationData } from "../../ulits/interface/Registration"
import { Form } from "../../components/Forms/Form"

export const Login = () => {
  const onSubmit: SubmitHandler<RegistrationData> = data => {
    console.log(data)
  }

  return (
    <div className="login">
      <Form onSubmit={onSubmit} type="login" />
    </div>
  )
}

import { SubmitHandler } from "react-hook-form"
import { RegistrationData } from "../../ulits/interface/Registration"
import { Form } from "../../components/Forms/Form"

export const Registration = () => {
  const onSubmit: SubmitHandler<RegistrationData> = data => {
    console.log(data)
  }

  return (
    <div className="registration">
      <Form onSubmit={onSubmit} type="registration" />
    </div>
  )
}

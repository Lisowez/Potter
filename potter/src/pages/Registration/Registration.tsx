import { Credentials, Form } from "../../components/Forms/Form"

export const Registration = () => {
  const onSubmit = (data: Credentials) => {
    console.log(data)
  }

  return (
    <div className="registration">
      <Form onSubmit={onSubmit} type="registration" />
    </div>
  )
}

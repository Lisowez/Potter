import { Credentials, Form } from "../../components/Forms/Form"

export const Login = () => {
  const onSubmit = (data: Credentials) => {
    console.log(data)
  }

  return (
    <div className="login">
      <Form onSubmit={onSubmit} type="login" />
    </div>
  )
}

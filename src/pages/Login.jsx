import loginImg from "../assets/Images/login.webp"
import Template from "../components/core/Auth/Template"

function Login() {
  return (
    <Template
      title="Welcome Back"
      description1="Shopping is cheaper than therapy."
      description2="If shopping doesn't make you happy, then you're in the wrong shop."
      image={loginImg}
      formType="login"
    />
  )
}

export default Login
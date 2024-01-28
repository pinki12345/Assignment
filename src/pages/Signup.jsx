import signupImg from "../assets/Images/signup.webp"
import Template from "../components/core/Auth/Template"

function Signup() {
  return (
    <Template
      title="Create New Account "
      description1="Nobody ever goes to that store to shop because it's too crowded."
      description2="When buyers don't fall for prices, prices must fall for buyers."
      image={signupImg}
      formType="signup"
    />
  )
}

export default Signup
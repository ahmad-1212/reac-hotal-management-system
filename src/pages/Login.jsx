import styled from "styled-components";

import LoginForm from "../features/authentication/LoginForm";
import Logo from "../ui/Logo";
import Heading from "../ui/Heading";

const LoginLayout = styled.main`
  min-height: 100vh;
  display: grid;
  grid-template-columns: 48rem;
  align-content: center;
  justify-content: center;
  gap: 3.2rem;
  background-color: var(--color-grey-50);
  padding: 0 2rem 10rem;
  overflow-y: scroll;

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

function Login() {
  return (
    <LoginLayout>
      <Logo />
      <Heading as="h4">Log in to your account</Heading>
      <Heading as="h5" center style={{ color: "red" }}>
        Use this credentials to Login!
      </Heading>
      <LoginForm />
    </LoginLayout>
  );
}

export default Login;

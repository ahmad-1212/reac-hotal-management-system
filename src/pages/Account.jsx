import Heading from "../ui/Heading";
import Row from "../ui/Row";
import UpdateUserDataForm from "../features/authentication/UpdateUserDataForm";
import UpdatePasswordForm from "../features/authentication/UpdatePasswordForm";
import { useScreenSize } from "../hooks/useScreenSize";

function Account() {
  const { screenSize } = useScreenSize();
  return (
    <>
      <Heading as="h1">Update your account</Heading>

      <Row>
        <Heading as="h3" center={screenSize <= 1200 && true}>
          Update user data
        </Heading>
        <UpdateUserDataForm />
      </Row>

      <Row>
        <Heading as="h3" center={screenSize <= 1200 && true}>
          Update password
        </Heading>
        <UpdatePasswordForm />
      </Row>
    </>
  );
}

export default Account;

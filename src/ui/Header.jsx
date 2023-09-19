import { styled } from "styled-components";
import { HiMenu } from "react-icons/Hi";
import HeaderMenu from "./HeaderMenu";
import UserAvatar from "../features/authentication/UserAvatar";
import ButtonIcon from "./ButtonIcon";
import { useSidebare } from "../context/SidebareContext";
import { useScreenSize } from "../hooks/useScreenSize";

const StyledHeader = styled.header`
  background-color: var(--color-grey-0);
  padding: 1.2rem 4.8rem;
  border-bottom: 1px solid var(--color-grey-100);

  display: flex;
  gap: 2.4rem;
  align-items: center;
  justify-content: flex-end;

  @media (max-width: 600px) {
    padding: 1.2rem 1.5rem;
  }
`;

const MenuButton = styled.div`
  margin-right: auto;
`;

function Header() {
  const { toggleSidebare } = useSidebare();
  const { screenSize } = useScreenSize();
  return (
    <StyledHeader>
      {screenSize <= 900 && (
        <MenuButton onClick={toggleSidebare}>
          <ButtonIcon>
            <HiMenu />
          </ButtonIcon>
        </MenuButton>
      )}
      <UserAvatar />
      <HeaderMenu />
    </StyledHeader>
  );
}

export default Header;

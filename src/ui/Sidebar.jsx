import { styled } from "styled-components";
import { HiXMark } from "react-icons/hi2";

import Logo from "./Logo";
import MainNav from "./MainNav";
import Backdrop from "./Backdrop";
import { useScreenSize } from "../hooks/useScreenSize";
import { useSidebare } from "../context/SidebareContext";
import ButtonIcon from "./ButtonIcon";

const StyledSidebar = styled.aside`
  background-color: var(--color-grey-0);
  padding: 3.2rem 2.4rem;
  border-right: 1px solid var(--color-grey-100);
  grid-row: 1 / -1;
  display: flex;
  flex-direction: column;
  gap: 3.2rem;
  overflow-y: auto;

  @media (max-width: 1300px) {
    padding: 2rem 2.4rem;
  }
  @media (max-width: 900px) {
    position: fixed;
    z-index: 1000;
    top: 0;
    left: 0;
    width: 40%;
    height: 100dvh;
    overflow-y: auto;
    z-index: 2000;
    &::-webkit-scrollbar {
      display: none;
    }
  }

  @media (max-width: 600px) {
    width: 60%;
  }
`;

const Close = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
`;

function Sidebar() {
  const { showSidebare, toggleSidebare } = useSidebare();
  const { screenSize } = useScreenSize();

  return (
    <>
      {screenSize <= 900 && showSidebare && (
        <Backdrop
          backgroundColor="rgba(0,0,0,0.2)"
          blur="2px"
          onClick={toggleSidebare}
          zIndex={1000}
        />
      )}
      {screenSize <= 900 ? (
        showSidebare && (
          <StyledSidebar>
            <Close onClick={toggleSidebare}>
              <ButtonIcon>
                <HiXMark />
              </ButtonIcon>
            </Close>
            <Logo />
            <MainNav />
          </StyledSidebar>
        )
      ) : (
        <StyledSidebar>
          <Logo />
          <MainNav />
        </StyledSidebar>
      )}
    </>
  );
}

export default Sidebar;

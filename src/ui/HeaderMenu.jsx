import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { HiOutlineUser } from "react-icons/hi2";
import { Logout } from "../features/authentication/Logout";
import ButtonIcon from "./ButtonIcon";
import DarkModeToggle from "./DarkModeToggle";
import Tooltip from "./Tooltip";
import { useDarkMode } from "../context/DarkModeContext";

const StyledHeaderMenu = styled.ul`
  display: flex;
  gap: 0.4rem;
`;

function HeaderMenu() {
  const navigate = useNavigate();
  const { isDarkMode } = useDarkMode();

  return (
    <StyledHeaderMenu>
      <li>
        <Tooltip
          tooltipValue="My account"
          backgroundColor={!isDarkMode ? "#075985" : "#e0f2fe"}
          textColor={!isDarkMode ? "#c4e2f3" : "#174563"}
          left="50%"
          top="40px"
        >
          <ButtonIcon onClick={() => navigate("/account")}>
            <HiOutlineUser />
          </ButtonIcon>
        </Tooltip>
      </li>
      <li>
        <Tooltip
          tooltipValue="Switch theme"
          backgroundColor={!isDarkMode ? "#075985" : "#e0f2fe"}
          textColor={!isDarkMode ? "#c4e2f3" : "#174563"}
          left="50%"
          top="40px"
        >
          <DarkModeToggle />
        </Tooltip>
      </li>
      <li>
        <Tooltip
          tooltipValue="Logout"
          backgroundColor={!isDarkMode ? "#075985" : "#e0f2fe"}
          textColor={!isDarkMode ? "#c4e2f3" : "#174563"}
          left="50%"
          top="40px"
        >
          <Logout />
        </Tooltip>
      </li>
    </StyledHeaderMenu>
  );
}

export default HeaderMenu;

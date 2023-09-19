import { NavLink } from "react-router-dom";
import styled from "styled-components";
import {
  HiOutlineCalendarDays,
  HiOutlineCog6Tooth,
  HiOutlineHome,
  HiOutlineHomeModern,
  HiOutlineUsers,
} from "react-icons/hi2";
import { useSidebare } from "../context/SidebareContext";

const NavList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`;

const StyledNavLink = styled(NavLink)`
  &:link,
  &:visited {
    display: flex;
    align-items: center;
    gap: 1.2rem;

    color: var(--color-grey-600);
    font-size: 1.6rem;
    font-weight: 500;
    padding: 1.2rem 2.4rem;
    transition: all 0.3s;

    @media (max-width: 1300px) {
      padding: 0.8rem 2.4rem;
    }
  }

  /* This works because react-router places the active class on the active NavLink */
  &:hover,
  &:active,
  &.active:link,
  &.active:visited {
    color: var(--color-grey-800);
    background-color: var(--color-grey-50);
    border-radius: var(--border-radius-sm);
  }

  & svg {
    width: 2.4rem;
    height: 2.4rem;
    color: var(--color-grey-400);
    transition: all 0.3s;
  }

  &:hover svg,
  &:active svg,
  &.active:link svg,
  &.active:visited svg {
    color: var(--color-brand-600);
  }
`;

function NavItem({ icon, link, text }) {
  const { toggleSidebare } = useSidebare();

  return (
    <li onClick={toggleSidebare}>
      <StyledNavLink to={link}>
        {icon}
        <span>{text}</span>
      </StyledNavLink>
    </li>
  );
}

function MainNav() {
  return (
    <nav>
      <NavList>
        <NavItem icon={<HiOutlineHome />} link="/dashboard" text="Home" />
        <NavItem
          icon={<HiOutlineCalendarDays />}
          link="/bookings"
          text="Bookings"
        />
        <NavItem icon={<HiOutlineHomeModern />} link="/cabins" text="Cabins" />
        <NavItem icon={<HiOutlineUsers />} link="/users" text="Users" />
        <NavItem
          icon={<HiOutlineCog6Tooth />}
          link="/settings"
          text="Settings"
        />
      </NavList>
    </nav>
  );
}

export default MainNav;

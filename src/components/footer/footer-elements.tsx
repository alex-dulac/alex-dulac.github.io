import styled from "styled-components";

export const FooterContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 100vw;
  position: absolute;
  bottom: 0;
  width: 100%;
`;

export const FooterNav = styled.nav`
  background: ${props => props.theme['base-background']};
  height: 5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  position: sticky;
  width: 100%;
  max-width: 1200px;
  top: 0;
  font-size: 1.2em;
  z-index: 999;
  @media screen and (max-width: 960px) {
    transition: 1.7s all ease;
  }
`;

export const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 5rem;
  width: 100%;
  padding: 0 3.5rem 0 3.5rem;
  z-index: 1;
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavItem = styled.li`
  height: 4em;
`;

export const NavLink = styled.a`
  color: ${props => props.theme['base-text']};
  display: flex;
  align-items: center;
  text-decoration: none;
  height: 100%;
  padding: 0 1rem;
`;

export const FooterTitle = styled.h6`
  color: ${props => props.theme['base-text']};
  display: flex;
  align-items: center;
  text-decoration: none;
  height: 100%;
  padding: 0 1rem;
`;

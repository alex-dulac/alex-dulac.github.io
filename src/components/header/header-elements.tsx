import styled from "styled-components";

export const HeaderContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    max-width: 100vw;
`;

export const HeaderNav = styled.nav`
    background: ${props => props.theme['panel-background']};
    height: 5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    position: sticky;
    width: 100%;
    max-width: 1100px;
    top: 0;
    font-size: 1.2em;
    z-index: 999;
    box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);
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
    height: 3.6em;
    a {
		color: ${props => props.theme['navy-text']};
  		text-decoration: none;
  		cursor: pointer;
  	}
`;

export const NavLink = styled.a`
    color: ${props => props.theme['navy-text']};
    display: flex;
    align-items: center;
    text-decoration: none;
    height: 100%;
    padding: 0 1rem;
    font-weight: bold;
    outline : none;
`;

export const MobileNavMenuIcon = styled.div`
    font-size: 1.75rem;
    padding-top: 20px;

    @media screen and (min-width: 0px) and (max-width: 768px) {
        display: block;
    }
 
    @media screen and (min-width: 768px) {
        display: none;
    }`;

export const MobileNavMenu = styled.div`
    @media screen and (min-width: 768px) {
        display: none;
    }
    display: none;
    background-color: #FDF6F6;
    border:1px solid #043b59;
    font-size: 75%;
`;

export const MobileList = styled.ul`
	list-style: none;
	text-decoration: none;
	padding: 20px;
`;

export const MobileNavItem = styled.li`
    @media screen and (min-width: 768px) {
        display: none;
    }
    height: 1.5em;
    cursor: pointer;
`;

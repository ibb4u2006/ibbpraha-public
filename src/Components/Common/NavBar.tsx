import { Link } from "react-router-dom";
import { FC } from "react";
import styled, { css } from "styled-components";
import {
  isPhoneOrSmaller,
  isTabletOrMobile,
  isVerySmallPhone,
} from "../../utils/screens";
import MenuSidebar from "./SideBar/menu";

interface INavBar { scrolling: boolean }

const StyledNavbar = styled.nav`
  background-color: #1f3044;
  width: 100%;
  height: 5rem;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  padding: 0 5rem;
  position: fixed;
  z-index: 999;

  ${(props: INavBar) =>
    props.scrolling &&
    css`
      background-color: #1f3044;
    `}

  .logo {
    width: 10rem;
    margin-left: -1.5rem;
    cursor: pointer;
    img {
      width: 100%;
      height: 100%;
    }
  }
  
  .hamburger-button {
    position: absolute;
    right: 0;
    width: 3.6rem;
    height: 3.6rem;
    border-radius: 50%;
    background-color: transparent;
    cursor: pointer;
    z-index: 2;
  }

  ${isTabletOrMobile(css`
    max-width: 1000px;
    padding: 0 1rem;
  `)}
  ${isPhoneOrSmaller(css`
    height: 6rem;
    max-width: 767px;
    padding: 0 0.5rem;
    .logo {
      width: 6.5rem;
      margin-left: -0.4rem;
      img {
        width: 100%;
        height: 100%;
      }
    }
  `)}
  ${isVerySmallPhone(css`
    .menus {
      display: none;
    }
  `)}
`;

type Props = { scrolling: boolean }

const NavigationBar: FC<Props> = ({scrolling}) => {
  return (
    <StyledNavbar scrolling={!scrolling} className="top-nav bg-home">
      <Link to="/">
        <div className="logo">
          <img src="/asset/IBB_animation_White.gif" alt="" />
        </div>
      </Link>
      <div className="menus expand">
        <ul className="menu">
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/business">Business</Link>
          </li>
          <li>
            <Link to="/connect">Connect</Link>
          </li>
        </ul>
        <div className="hamburger-button" />
        <div className="hamburger">
          <div className="burger"></div>
        </div>
      </div>

      <MenuSidebar />
    </StyledNavbar>
  );
};

export default NavigationBar;

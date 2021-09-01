/* eslint-disable jsx-a11y/anchor-is-valid */
import { FC } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

interface ISideBar {
    open?: boolean;
    close?: () => void;
}

const Ul: FC<ISideBar> = styled.ul`
  list-style: none;
  display: none;

  li {
    margin: 0 0.3rem;
    &:nth-of-type(1) {
      margin-top: 1.5rem;
    }

    a {
      display: block;
      padding: 1rem 2rem;
      border-radius: 4px;
      font-size: 1.5rem;
      font-weight: 500;
      color: white;
      text-decoration: none;
    }
    &:hover {
      cursor: pointer;
      color: blue;
      a {
        color: blue;
      }
    }
  }

  @media (max-width: 375px) {
    display: flex;
    flex-flow: column nowrap;
    background-color: #1f3044;
    z-index: 2;
    position: fixed;
    transform: ${(props: ISideBar) => (props.open ? "translateX(0)" : "translateX(100%)")};
    top: 0;
    right: 0;
    height: 130vh;
    width: 300px;
    padding-top: 3.5rem;
    transition: transform 0.3s cubic-bezier(0.075, 0.82, 0.165, 0.8);

    li {
      color: #fff;
    }
  }
`;

const Sidebar: FC<ISideBar> = props => {
    return (
        <Ul open={props.open}>
            <li onClick={props.close}>
                <Link to="/about">
                    <a aria-label="Home link">
                        <span>About Us</span>
                    </a>
                </Link>
            </li>
            <li onClick={props.close}>
                <Link to="/business">
                    <a aria-label="Blog link">
                        <span>Business</span>
                    </a>
                </Link>
            </li>
            <li onClick={props.close}>
                <Link to="/connect">
                    <a aria-label="About link">
                        <span>Connect</span>
                    </a>
                </Link>
            </li>
        </Ul>
    );
};

export default Sidebar;

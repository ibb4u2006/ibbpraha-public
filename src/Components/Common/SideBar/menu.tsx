import React, { useState } from "react";
import styled from "styled-components";
import SideBar from "./index"

interface IMenuSidebar { open: boolean }

const StyledBurger = styled.button`
  width: 3rem;
  height: 3rem;
  position: absolute;
  background: white;
  top: 1.5rem;
  right: 1rem;
  z-index: 20;
  display: none;
  border: none;
  border-radius: 50%;
  padding-left: ${(props: IMenuSidebar) => (props.open ? "0.2rem" : "0")};

  @media (max-width: 375px) {
    display: flex;
    justify-content: space-around;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
    gap: 0.2rem;
  }

  div {
    width: 1.6rem;
    min-height: 0.2rem;
    border-radius: 10px;
    transform-origin: 0.2rem;
    margin: 0 auto;
    transition: all 0.3s cubic-bezier(0.075, 0.82, 0.165, 1);
    background: #1f3044;

    &:nth-child(1) {
      transform: ${(props: IMenuSidebar) => (props.open ? "rotate(42deg)" : "rotate(0)")};
    }

    &:nth-child(2) {
      transform: ${(props: IMenuSidebar) => (props.open ? "translateX(100%)" : "translateX(0)")};
      opacity: ${(props: IMenuSidebar) => (props.open ? 0 : 1)};
    }

    &:nth-child(3) {
      transform: ${(props: IMenuSidebar) => (props.open ? "rotate(-42deg)" : "rotate(0)")};
    }
  }
`;

const MenuSidebar = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <StyledBurger
        aria-label="menu"
        type="button"
        open={open}
        onClick={() => setOpen(!open)}
      >
        <div />
        <div />
        <div />
      </StyledBurger>
      <SideBar open={open} close={() => setOpen(false)} />
    </>
  );
};

export default MenuSidebar;
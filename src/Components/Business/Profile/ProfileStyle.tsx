import styled, { css } from "styled-components";
import { isDesktop, isTabletOrMobile } from "../../../utils/screens";

export const StyledProfile = styled.div`
  padding: 4rem 10rem;
  display: flex;
  justify-content: center;
  background-color: #f6f7f8;

  .row {
    min-width: 100%;
    align-items: center;
  }
  .business-avatar {
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
  }

  .business-avatar img {
    border-radius: 50%;
    width: 360px;
    height: 360px;
    object-fit: cover;
  }
  h2 {
    font-weight: 600;
  }
  .profile-info {
    color: #707070;
    border-bottom: 1px solid #b3b3b4;
    max-width: 400px;
    font-weight: 400;
    padding: 0.2rem;
    span {
      margin: 0.4rem 0;
      width: 100%;
      display: block;
      font-size: 1.1rem;
      line-height: 1.5;
    }
  }

  .contacts {
    margin: 0.6rem 0;
    color: #2c3c50;
    font-weight: 400;
    padding: 0.2rem;
    span {
      font-size: 1rem;
    }
    a {
      color: #2c3c50;
      &:hover {
        text-decoration: underline;
      }
    }
  }

  .category-btns {
    button {
      font-size: 14px;
      padding: 0.3rem 1.4rem;
      border-radius: 3px;
      box-shadow: unset;
      border: none;
    }
  }

  ${isDesktop(css`
    padding: 4rem 8rem;
    .business-avatar img {
      width: 290px;
      height: 290px;
    }
  `)}
  ${isTabletOrMobile(css`
    padding: 2rem 1rem;
    text-align: center;

    .profile-info {
      min-width: 100%;
      span {
        text-align: center;
      }
    }
    .business-avatar img {
      width: 200px;
      height: 200px;
    }
  `)}
`;

export const StyledContent = styled.div`
  padding: 2rem 8rem;
  background: white;
  min-height: 500px;
  width: 100%;
  h3 {
    font-weight: 600;
    font-size: 1.5rem;
  }
  ${isTabletOrMobile(css`
    padding: 0.2rem 1rem;
    img {
      width: 100% !important;
      height: auto !important;
    }
    iframe {
      width: 100% !important;
      height: auto !important;
    }
  `)}
`;

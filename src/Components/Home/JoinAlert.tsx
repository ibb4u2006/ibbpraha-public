import React, { FC } from 'react';
import styled, { css } from 'styled-components';
import { isPhoneOrSmaller, isTabletOrMobile } from "../../utils/screens";

const JoinCTA = styled.div`
  width: 100%;
  background-color: #707070;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  padding: 2rem 6rem;

  p.newstext {
    font-weight: 400;
    color: white;
    font-size: 1.7rem;
    margin-bottom: 0;
  }

  .btn-box {
    max-width: 400px;
    height: 3.64rem;
    overflow: hidden;
    background-color: white;
    border-radius: 6px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    font-size: 1rem;
    color: #f38022;
    font-weight: 900;
    text-transform: uppercase;
    cursor: pointer;
    white-space: nowrap;
    padding: 0 2rem;
  }
  ${isTabletOrMobile(css`
    padding: 2rem 0;

    p.newstext {
      font-size: 1.4rem;
      font-weight: 400;
      color: white;
      margin-bottom: 1rem;
    }
    .btn-box {
      max-width: 100%;
      width: 100%;
    }
  `)}
  ${isPhoneOrSmaller(css`
    padding: 2rem 0;
    p.newstext {
      font-size: 1rem;
    }
    .btn-box {
      font-size: 0.8rem;
    }
  `)}
`;

type Props = { click: () => void; }

const JoinAlert: FC<Props> = (props) => {
  return (
    <JoinCTA>
      <div className="container-fluid">
        <div className="row justify-content-center">
          <div className="col-lg-6 col-md-12 col-sm-12 d-flex align-items-center">
            <p className="newstext">
              Would you like to meet us at one of our weekly Bus Dev Meetups?
            </p>
          </div>
          <div className="col-lg-4 col-sm-12 d-flex align-items-center">
            <div className="btn-box" onClick={props.click}>
              Join a meeting
            </div>
          </div>
        </div>
      </div>
    </JoinCTA>
  )
}

export default JoinAlert;
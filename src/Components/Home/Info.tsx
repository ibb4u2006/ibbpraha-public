import React from "react";
import styled, { css } from "styled-components";
import { isPhoneOrSmaller, isTabletOrMobile, isTablet, isDesktop } from "../../utils/screens";

const StyledAbout = styled.section`
  height: 33.4rem;
  width: 100%;
  background-image: url("/asset/about.png");
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;

  .content-box {
    width: 28rem;
    margin: 0 5rem;
    padding-right: 5rem;
  }
  
  ${isDesktop(css`
    background-position: left;
  `)}
  ${isTablet(css`
    padding-right: 8rem;
  `)}
  ${isTabletOrMobile(css`
    background-position: left;
      .content-box {
        width: 100%;
        margin: 0 1rem;
      }
  `)}
  ${isPhoneOrSmaller(css`
    height: auto;
    padding: 2rem 0;
    .content-box {
      width: 100%;
      margin: 0;
      padding-right: 0rem;
    }
  `)}
`;

const Info = () => {
    return (
        <StyledAbout className="section-b">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="content-box">
                            <h4 className="in-text orange-color">We're IBB,</h4>
                            <h4 className="notes orange-color mb-4">International Business Bureau</h4>
                            <p className="notes">
                                Founded in Prague, our members have now spread
                                to the UK, Turkey, Italy and China, as well as Czechia.
                            </p>{" "}
                            <p className="notes">
                                Like so many others, we’ve adapted to an online format in a mission to build our own business ecosystem.
                            </p>{" "}
                            <p className="notes">
                                Find out more about the IBB community,
                                how to join one of our weekly online Bus Dev Meetups, partner with us, and even how to become a member.
                                {" "}
                            </p>{" "}
                            <p className="notes">
                                We’re here for you if you’re looking to grow; no matter what, we’re always in your comfort zone.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </StyledAbout>
    );
};

export default Info;
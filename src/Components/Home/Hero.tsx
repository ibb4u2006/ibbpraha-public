import React from "react";
import styled, { css } from "styled-components";
import { useMediaQuery } from "react-responsive";
import {
    isTabletOrMobile,
    isPhoneOrSmaller,
    isSmallPhone,
} from "../../utils/screens";

const StyledIntro = styled.section`
  height: 40rem;
  width: 100%;
  background: url("../asset/MaskGroup7.png");
  background-position: top center;
  background-size: cover;
  background-repeat: no-repeat;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: end;
  -ms-flex-align: end;
  align-items: flex-end;

  .firsttext-box {
    width: 45.7rem;
    height: 11.5rem;
    background-color: #1f3044;
    opacity: 80%;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
  }

  .mouse {
    width: -webkit-fit-content;
    width: -moz-fit-content;
    width: fit-content;
    margin: 7rem auto 4rem;
  }
  ${isTabletOrMobile(css`
    height: 35rem;
    .firsttext-box {
      width: 35rem;
      height: 8rem;
    }
    .in-text {
      font-size: 2rem;
    }
  `)}

  ${isPhoneOrSmaller(css`
    height: 28rem;
    .firsttext-box {
      max-width: 25rem;
    }
    .in-text {
      font-size: 1.5rem;
    }
    .mouse {
      margin: 3rem auto 4rem;
      svg {
        width: 22px;
      }
    }
  `)}

  ${isSmallPhone(css`
    .firsttext-box {
      width: calc(100% - 2rem);
      margin: 0 1rem;
    }
  `)}
`;

const Hero = () => {
    const isDesktopOrLaptop = useMediaQuery({
        query: "(min-width: 992px)",
    });
    const isTabletOrLarger = useMediaQuery({
        query: "(min-width: 768px)",
    });
    const isPhoneOrLarger = useMediaQuery({ query: "(min-width: 575px)" });
    const isPhoneOrSmaller = useMediaQuery({
        query: "(max-width: 574px)",
    });

    const handleScrollToNextSection = () => {
        if (isDesktopOrLaptop) {
            window.scrollBy(0, 660);
        } else if (isTabletOrLarger) {
            window.scrollBy(0, 500);
        } else if (isPhoneOrLarger) {
            window.scrollBy(0, 360);
        } else if (isPhoneOrSmaller) {
            window.scrollBy(0, 360);
        }
    };

    return (
        <StyledIntro>
            <div className="inner-section-a">
                <div className="firsttext-box">
                    <h4 className="in-text text-center">
                        Looking for new business connections?
                    </h4>
                </div>
                <div
                    className="mouse"
                    style={{ cursor: "pointer" }}
                    onClick={handleScrollToNextSection}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="33.8"
                        height="48.071"
                        viewBox="0 0 47.548 67.521"
                    >
                        <g transform="translate(-75.726)">
                            <g transform="translate(75.726)">
                                <path
                                    className="a"
                                    d="M99.5,0A23.99,23.99,0,0,0,75.726,24.147V43.375a23.776,23.776,0,1,0,47.548.074v-19.3A23.99,23.99,0,0,0,99.5,0Zm19.3,43.449a19.305,19.305,0,1,1-38.6-.075V24.147a19.306,19.306,0,1,1,38.6,0Z"
                                    transform="translate(-75.726)"
                                    fill="white"
                                />
                            </g>
                            <g transform="translate(97.264 18.483)">
                                <path
                                    className="a"
                                    d="M241.282,140.15a2.236,2.236,0,0,0-2.236,2.236v7.825a2.236,2.236,0,0,0,4.472,0v-7.825A2.236,2.236,0,0,0,241.282,140.15Z"
                                    transform="translate(-239.046 -140.15)"
                                    fill="white"
                                />
                            </g>
                        </g>
                    </svg>
                </div>
            </div>
        </StyledIntro>
    );
};

export default Hero;
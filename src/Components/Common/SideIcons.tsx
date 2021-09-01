import { FC } from "react";
import { Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import styled, { css } from "styled-components";
import { isPhoneOrSmaller } from "../../utils/screens";

const StyledSideIcons = styled.div`
  position: fixed;
  right: 0;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  cursor: pointer;
  z-index: 999;

  ${isPhoneOrSmaller(css`
    right: -1.5rem;
  `)}
`;

type Props = { profile: any };

const SideIcons: FC<Props> = ({ profile = {} }) => {
    return (
        <StyledSideIcons>
            <Link
                to={{ pathname: `mailto:${profile?.email}` }}
                target="_blank"
            >
                <div className="single-icon">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24.644"
                        height="24.644"
                        viewBox="0 0 34.644 34.644"
                    >
                        <path
                            className="a"
                            d="M34.644,0,0,19.487l11.072,4.1L28.148,7.578,15.159,25.1l.011,0-.013,0v9.542L21.366,27.4l7.865,2.913Z"
                            fill="#fff"
                        />
                    </svg>
                </div>
            </Link>
            <Link
                to={{ pathname: `tel:${profile?.phone}` }}
                target="_blank"
            >
                <div className="single-icon">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="21.816"
                        height="34.019"
                        viewBox="0 0 30.716 47.809"
                    >
                        <path
                            className="a"
                            d="M33.637,0H10.816A3.735,3.735,0,0,0,6.87,3.484V44.33a3.735,3.735,0,0,0,3.946,3.479H33.637a3.739,3.739,0,0,0,3.949-3.479V3.484A3.741,3.741,0,0,0,33.637,0Zm.989,38.736H9.83V5.877h24.8Zm-7.109-35.2H16.937V2.518H27.519l0,1.017Zm4.528-.465a1.02,1.02,0,0,1-2.023,0,1.02,1.02,0,0,1,2.023,0Zm-5,41.027H17.408V41.484h9.636Z"
                            transform="translate(-6.87)"
                            fill="#fff"
                        />
                    </svg>
                </div>
            </Link>
            <Link
                to={{ pathname: profile?.facebook }}
                target="_blank"
            >
                <div className="social-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width={18} height={30}>
                        <path
                            d="M18 .843a.84.84 0 00-.24-.59.811.811 0 00-.578-.243H13.09a7.722 7.722 0 00-5.61 2.03 8.005 8.005 0 00-2.572 5.467v4.499H.82a.811.811 0 00-.58.244.84.84 0 00-.239.589v4.332c0 .22.086.433.24.589a.81.81 0 00.578.244H4.91v11.163a.84.84 0 00.24.589.811.811 0 00.578.244h4.91a.81.81 0 00.578-.244.84.84 0 00.24-.59V18.005h4.287a.808.808 0 00.505-.168.834.834 0 00.297-.448l1.178-4.332a.848.848 0 00-.14-.722.822.822 0 00-.646-.328h-5.482V7.507c.041-.412.231-.794.534-1.071a1.62 1.62 0 011.103-.428h4.09a.811.811 0 00.58-.244.84.84 0 00.239-.59V.844z"
                            fill="#fff"
                        />
                    </svg>
                </div>
            </Link>
            <Link
                to={{ pathname: profile?.linkedin }}
                target="_blank"
            >
                <div className="social-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={25}>
                        <path
                            d="M5.333 2.778c0 1.475-.946 2.744-2.668 2.744C1.045 5.522 0 4.325 0 2.85 0 1.336 1.013 0 2.667 0 4.32 0 5.3 1.264 5.333 2.778zM0 25V6.944h5.333V25H0zM8 13.117c0-2.146-.068-3.939-.136-5.488h4.792l.237 2.393h.102c.674-1.126 2.328-2.777 5.096-2.777 3.376 0 5.909 2.354 5.909 7.419V25h-5.333v-9.529c0-2.214-.81-3.903-2.667-3.903-1.416 0-2.125 1.195-2.497 2.18-.136.352-.17.844-.17 1.337V25H8V13.117z"
                            fill="#fff"
                        />
                    </svg>
                </div>
            </Link>
            <Link
                to={{ pathname: profile?.website }}
                target="_blank"
            >
                <div className="social-icon">
                    <Image src="/asset/b.png" width="34px" height="34px" />
                </div>
            </Link>
        </StyledSideIcons>
    );
};

export default SideIcons;

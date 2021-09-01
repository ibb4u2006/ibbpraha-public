import { FC } from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import styled, { css } from "styled-components";
import { isPhoneOrSmaller } from "../utils/screens";

interface IProps {
  pragueTeam: [];
  downloads: [];
  ibbMembership: string;
}

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

const Connect: FC<IProps> = (props) => {
  return (
    <>
      <StyledSideIcons>
        <Link to={`mailto:info@ibbpraha.com`}>
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
        <Link to={`tel:+447828633996`}>
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
      </StyledSideIcons>
      <div className="section-j pam">
        <h6 className="liketo text-center">
          If you would like to know more about IBB Business Development
        </h6>
        <h3 className="title-text text-center mt-3">GET IN TOUCH</h3>
        <Container>
          <Row>
            <Col lg={7}>
              <div className="row mb-5">
                {props.pragueTeam.map((member: any) => (
                  <Col sm={12} md={3}>
                    <div className="avatar">
                      <Image
                        src={
                          member.member_image || "/asset/default-avatar.jpg"
                        }
                        width="150px"
                        height="150px"
                        alt=""
                      />
                    </div>
                    <p className="name-tab">{member.member_name}</p>
                    <p className="city">{member.location}</p>
                    <p className="role">{member.member_title}</p>
                    <p className="tel">T: {member.phone}</p>
                    <p className="tel">E: {member.email}</p>
                  </Col>
                ))}
              </div>
            </Col>
            <Col lg={1}>
              <div className="vertical-line"></div>
            </Col>
            <Col lg={4}>
              <div className="member-box">
                <h5 className="comm text-left orange-color">
                  Become a Member
                </h5>
                <p className="top-it">
                  We’re always on the lookout for new partners to help us
                  build the community and share in the collective proceeds.{" "}
                  <br />
                  <br /> If you’d like to know more download the pdf:
                </p>
                <Link to={props.ibbMembership}>
                  <div className="memberbtn mt-3">IBB Membership</div>
                </Link>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="section-k center-text">
        <h3 className="title-text text-center my-3 text-uppercase">
          Downloads
        </h3>
        <h6 className="liketo text-center">
          Introductory / instructional / guidance text here & links to:
        </h6>
        <div className="container-fluid">
          <div className="row">
            <div className="col"></div>
            {props.downloads?.map((download: any) => (
              <div className="col-sm-12 col-md-3 col-lg-3">
                <Link to={download.url} className="download">
                  <div className="icon">
                    <i className="fas fa-file-download"></i>
                  </div>
                  <p className="downloads">{download.name}</p>
                </Link>
              </div>
            ))}
            <div className="col"></div>
          </div>
        </div>
      </div>

      <div className="section-j pam center-text">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-6 col-sm-12">
              <div className="country-acct">
                <div className="img-bx">
                  <img src="../asset/czech-republic.svg" alt="" />
                </div>
                <h5 className="comm text-left ml-3">
                  IBB Business Details:
                  <br /> Czechia
                </h5>
              </div>
              <div className="row text-left">
                <div className="col-lg-4">
                  <p className="bankdetail">IBB PRAHA S.R.O.</p>
                  <p className="bankdetails">
                    Radhoštska 1645/15 Žižkov, 130 00 Praha 3
                  </p>
                </div>
                <div className="col-lg-8">
                  <p className="bankdetail">
                    BANK: <span className="others">Fio Banka</span>{" "}
                  </p>
                  <p className="bankdetail">
                    ACCOUNT NAME: <span className="others">IBB Praha</span>{" "}
                  </p>
                  <p className="bankdetail">
                    ACCOUNT NUMBER: <span className="others">2301641281</span>{" "}
                  </p>
                  <p className="bankdetail">
                    SORT CODE: <span className="others">2010</span>{" "}
                  </p>
                  <p className="bankdetail">
                    SWIFT: <span className="others">FIOBCZPPXXX</span>{" "}
                  </p>
                  <p className="bankdetail">
                    IBAN:{" "}
                    <span className="others">CZ7720100000002301641281</span>{" "}
                  </p>
                  <p className="bankdetail">
                    ICO: <span className="others">077 73 013</span>{" "}
                  </p>
                </div>
              </div>
              <p className="bankdetail text-left mt-3">
                EXECUTIVE OFFICER:{" "}
                <span className="others">Hana Prosdocimo Hajova</span>{" "}
              </p>
            </div>
            <div className="col-lg-6">
              <div className="country-acct">
                <div className="img-bx">
                  <img src="../asset/united-kingdom.svg" alt="" />
                </div>
                <h5 className="comm text-left ml-3">
                  IBB Business Details:
                  <br /> United Kingdom
                </h5>
              </div>
              <div className="row text-left">
                <div className="col-lg-4">
                  <p className="bankdetail">IBB PRAHA (UK) LTD </p>
                  <p className="bankdetails">
                    LANCASHIRE ENGLAND <br />
                    <br />
                    <br />
                    CO REG: 13021094
                    <br />
                  </p>
                </div>
                <div className="col-lg-8">
                  <p className="bankdetail">
                    BANK:{" "}
                    <span className="others">Starling Bank (online)</span>{" "}
                  </p>
                  <p className="bankdetail">
                    ACCOUNT NAME:{" "}
                    <span className="others">IBB Praha (UK)</span>{" "}
                  </p>
                  <p className="bankdetail">
                    ACCOUNT NUMBER: <span className="others">41106717</span>{" "}
                  </p>
                  <p className="bankdetail">
                    SORT CODE: <span className="others">60-83-71</span>{" "}
                  </p>
                  <p className="bankdetail">
                    SWIFT: <span className="others">SRLGGB2L</span>{" "}
                  </p>
                  <p className="bankdetail">
                    IBAN:{" "}
                    <span className="others">GB14SRLG60837141106717</span>{" "}
                  </p>
                </div>
              </div>
              <p className="bankdetail text-left mt-5">
                EXECUTIVE OFFICER: <span className="others">Steven Lord</span>{" "}
              </p>
            </div>
          </div>
          <div className="cred-box">
            <span className="credit">Credits</span>
            <div className="divides"></div>
          </div>

          <div className="row justify-content-center center-text">
            <div className="col-lg-5 col-sm-12">
              <div className="logo-cred">
                <img src="../asset/stack.png" alt="" />
              </div>
              <p className="top-it">
                IBB community acknowledge a huge debt of gratitude to Ibrahim
                Bello, founder member and CEO of Stacksuit (a Tristack s.r.o.
                company) for making this website possible
              </p>
            </div>
            <div className="col-lg-5 col-sm-12">
              <div className="logo-cred">
                <img src="../asset/dezakaya-logo.svg" alt="" />
              </div>
              <p className="top-it">
                IBB brand design by <br />
                Ivana & Toufic Tawilee
              </p>
            </div>
          </div>
        </div>
      </div>

    </>
  );
};

export default Connect;
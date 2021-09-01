import styled, { css } from "styled-components";
import {
  isDesktopOrLarger,
  isTabletOrDesktop,
  isVerySmallPhone,
} from "../../utils/screens";
import { Col, Container, Image, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FC } from "react";

const StyledPeople = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  padding: 0.5rem;
  margin: 0.5rem;
  .people-card {
    width: 100%;
    margin: 0 0.5rem;
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
  }
  ${isVerySmallPhone(css`
    justify-content: center;
  `)}
  ${isTabletOrDesktop(css`
    margin: 0 2rem;
  `)}
  ${isDesktopOrLarger(css`
    margin: 0 0;
  `)}
`;

type IProps = {
  businesses: any;
}

const Profiles: FC<IProps> = ({ businesses }) => {
  return (
    <StyledPeople className="col-lg-9">
      <Container>
        <Row>
          {businesses.map((business: any) => (
            <Col md={3}>
              <Link
                key={business.id}
                to={`/business/${business.id}/${business.acf?.name
                  ?.toLowerCase()
                  .replace(/ /g, "-")}`}
              >
                <div className="people-card mt-3">
                  <div className="avatar">
                    <Image
                      src={business.acf.image ? business.acf?.image : '/asset/profile.png'}
                      width="150px"
                      height="150px"
                      alt={business.acf?.name}
                    />

                  </div>
                  <p className="name-tab">{business.acf?.name}</p>
                  <p className="city">
                    {business.acf?.city}, {business.acf?.country}
                  </p>
                  <p className="role">{business.acf?.title}</p>
                  <p className="tel">TEL: {business.acf?.phone}</p>
                  <p className="tel">EMAIL: {business.acf?.email}</p>
                </div>
              </Link>
            </Col>

          ))}
        </Row>
      </Container>


    </StyledPeople>
  );
};

export default Profiles;

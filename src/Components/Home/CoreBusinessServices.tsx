import { Link } from "react-router-dom";
import React from "react";
import styled, { css } from "styled-components";
import { isPhoneOrSmaller, isTabletOrMobile } from "../../utils/screens";

const services = [
    {
        id: 1,
        topic: "Develop:",
        category: "Ventures, Partners & Projects",
        imgUrl: "../asset/IMG_20200127_0907437.png",
        title: "Business is hard and lonely, but fun",
        description:
            "Everyone in IBB is doing it, some for the first time, others persisting after many years. Whatever stage you’re at with your business project you’ve nothing to lose and everything to gain by contacting us.",
    },
    {
        id: 2,
        topic: "BUREAU:",
        category: "Commitment-free Access",
        imgUrl: "../asset/MaskGroup1.png",
        title: "The Stuff of Business",
        description:
            "Having someone on hand to give specific occasional support can be priceless. If you’re looking for commitment-free access to specialist expertise our diverse roster of business professionals can take care of your needs.",
    },
    {
        id: 3,
        topic: "CONSULT:",
        category: "Flexible Terms",
        imgUrl: "../asset/MaskGrou2.png",
        title: "Consulting is collaboration",
        description:
            "It’s the human touch that we invest in relationships which makes all the difference. If there’s a specific development need required for your business then we can help with imaginative and flexible terms if it’s a clear win/win.",
    },
];

const StyledCoreBusinessServices = styled.div`
  padding: 0 6rem;

  .service-card {
    overflow: hidden;
    margin-bottom: 2rem;
  }
  
  ${isTabletOrMobile(css`
    padding: 0 0;
    .img-box {
      margin-bottom: 1rem;
    }
    p.small-notes {
      margin-bottom: 1.5rem;
    }
  `)}
  ${isPhoneOrSmaller(css`
    padding: 0 0;
  `)}
`;

const CoreBusinessesServices = () => {
    return (
        <StyledCoreBusinessServices className="section-c mag">
            <h4 className="title-text text-center no-ls">
                Our core business services
            </h4>
            <div className="container-fluid">
                <div className="row">
                    {services.map((svc) => (
                        <div key={svc.id} className="service-card col-lg-4 col-md-6">
                            <h5 className="topic">{svc.topic}</h5>
                            <h5 className="top-lt">{svc.category}</h5>
                            <div className="img-box">
                                <img width="100%" height="auto" src={svc.imgUrl} alt="" />
                            </div>
                            <h5 className="top-lt">{svc.title}</h5>
                            <p className="small-notes">{svc.description}</p>
                            <Link to="/about">
                                <div className="btn-card">Find out more</div>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </StyledCoreBusinessServices>
    );
};

export default CoreBusinessesServices;

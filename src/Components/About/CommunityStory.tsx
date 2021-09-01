import { FC } from "react";
import parse from "html-react-parser";
import styled, { css } from "styled-components";
import { isTabletOrMobile } from "../../utils/screens";
import { Image } from "react-bootstrap";
import { Link } from "react-router-dom";

interface IStory {
    heading: string;
    category: string;
    content: string;
    image: string;
}

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin: 6rem 0;
  &:nth-of-type(even) {
    flex-direction: row-reverse;
    .butn {
      left: auto;
      right: 1.5rem;
    }
  }

  ${isTabletOrMobile(css`
    .img-boxx {
      margin-top: 2rem;
    }
    .col-lg-6 {
      padding: 0;
    }
  `)}
`;

const CommunityStory: FC<IStory> = (props) => {
    return (
        <StyledWrapper className="row">
            <div className="col-lg-6">
                <h5 className="topic">{`${props.heading?.split(":")[0]}:`}</h5>
                <h5 className="topic">{props.heading?.split(":")[1]}</h5>
                <div className="tag-box">{props.category}</div>
                <div className="small-notes my-0">{parse(props.content)}</div>
            </div>
            <div className="col-lg-6">
                <div className="img-boxx" style={{ position: "relative" }}>
                    <div className="img-container">
                        <Image src={props.image} alt={props.heading} />
                    </div>
                    <Link to="#weekly-online-business">
                        <div className="butn">Find out more</div>
                    </Link>
                </div>
            </div>
        </StyledWrapper>
    );
};

export default CommunityStory;

import { FC } from "react";
import classnames from "classnames";
import styled, { css } from "styled-components";
import { isTabletOrMobile } from "../../../utils/screens";

interface IProps {
    groupedSchedules: [];
    months: any;
    handleClickMeeting: (meeting: any) => void;
}

const StyledWrapper = styled.section`
  min-height: 62.6rem;
  width: 100%;
  background: url("../asset/meeting-bg.png") rgba(31, 48, 68, 0.98);
  background-blend-mode: multiply;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  padding: 2rem 5rem;
  padding-bottom: 4rem;

  ${isTabletOrMobile(css`
    padding: 2rem 1rem;
  `)}
`;

const WeeklyMeeting: FC<IProps> = (props) => {
    return (
            <StyledWrapper>
                <div className="container-fluid pax">
                    <div className="row">
                        <div className="col-lg-6 col-sm-12">
                            <h4 className="title-text text-uppercase w-75 m-0">
                                WEEKLY ONLINE BUSINESS
                            </h4>
                            <h5 className="top-lt text-white mt-3 text-uppercase text-bold">
                                THURSDAY MORNING, 09.30HRS CET (08.30HRS UK). 90 minutes
                                duration.
                            </h5>
                        </div>
                        <div className="col-lg-6 col-sm-12">
                            <div className="btn-card ml-lg-auto mr-sm-1">How to join</div>
                            <p className="text-smaller text-right">
                                Click on the meeting date you wish to join and complete the pop
                                up with your email address. You’ll receive an acknowledgement of
                                your request, followed by a confirmation email 48 hours before
                                the meeting date, and then an email on the day, 30 minutes
                                before the meeting starts with the link for you to join in.
                                Simple.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="container-fluid mt-5">
                    <div className="row">
                        {Object.keys(props.groupedSchedules)
                            // Gets the first 4 months with active meetings
                            ?.slice(0, 4)
                            .map((sm: any, index) => (
                                <div
                                    key={index}
                                    style={{ cursor: "pointer" }}
                                    className="col-lg-3 col-md-4 col-sm-12 col"
                                >
                                    <h5 className="month-tag">{props.months[sm].toUpperCase()}</h5>
                                    <div className="card-container">
                                        {[...props.groupedSchedules[sm]].map((meeting: any, index) => {
                                            return (
                                                <div
                                                    key={index}
                                                    onClick={() => props.handleClickMeeting(meeting)}
                                                    className="card-single px-2"
                                                >
                                                    <div className="date-box">
                                                        <p className="days">{meeting.day}</p>
                                                        <p className="date">{meeting.date}</p>
                                                    </div>
                                                    <div
                                                        className={classnames("status-box", {
                                                            greenbg:
                                                                meeting.status.toLowerCase() === "available",
                                                            yellowbg:
                                                                meeting.status.toLowerCase() === "postponed",
                                                            bluebg:
                                                                meeting.status.toLowerCase() === "ongoing",
                                                            pinkbg:
                                                                meeting.status.toLowerCase() === "cancelled",
                                                            pacificblue:
                                                                meeting.status.toLowerCase() === "awaiting",
                                                            dodgerblue:
                                                                meeting.status.toLowerCase() === "open",
                                                        })}
                                                    >{`${meeting.status} +`}</div>
                                                </div>
                                            );
                                        })}
                                    </div>
                                </div>
                            ))}
                    </div>
                </div>
            </StyledWrapper>
    )
}

export default WeeklyMeeting;
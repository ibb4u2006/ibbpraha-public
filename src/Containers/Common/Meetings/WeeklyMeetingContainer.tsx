import React from "react";
import AllData from "../../../utils/allData";
import { days, errors, IState, monthNames, months, values } from "../../../utils/meetingData";
import RequestModalContainer from "./RequestModalContainer";
import WeeklyMeeting from "../../../Components/Common/Meetings/WeeklyMeeting";
import LoadingIndicator from "../../../Components/Common/LoadingIndicator";

class WeeklyMeetingContainer extends React.Component<{}, IState> {
    constructor(props: any) {
        super(props);
        this.state = {
            meetingSchedules: [],
            sortedSchedules: [],
            groupedSchedules: [],
            openModal: false,
            months: months,
            monthNames: monthNames,
            values: values,
            errors: errors,
            loading: true,
        }
    }

    componentDidMount() {
        const getMeetingInfo = async () => {
            return await AllData.fetchMeetings();
        }

        getMeetingInfo().then((info: any) => {
            info?.filter((mt: any) => AllData.dateInPast(mt?.acf?.date))
                // eslint-disable-next-line array-callback-return
                ?.map((mt: any) => {
                    this.setState({
                        meetingSchedules: [...this.state.meetingSchedules, {
                            day: days[new Date(mt.acf?.date).getDay()],
                            month: new Date(mt.acf?.date).getMonth(),
                            date: new Date(mt.acf?.date).getDate(),
                            year: new Date(mt.acf?.date).getFullYear(),
                            status: mt.acf?.status,
                        }]
                    }, () => {
                        const sortSchedules = this.state.meetingSchedules.sort((a: any, b: any) => a.date - b.date).sort((a: any, b: any) => a.month - b.month);
                        this.setState({ sortedSchedules: sortSchedules }, () => {
                            const groupSchedules: [] = this.groupBy(this.state.sortedSchedules, "month");
                            this.setState({ groupedSchedules: groupSchedules }, () => {
                                this.setState({ loading: false })
                            })
                        });
                    });
                });
        })
    }

    private groupBy = (array: any, criteria: any) => {
        const newObj = array.reduce((acc: any, val: string) => {
            if (!acc[val[criteria]]) {
                acc[val[criteria]] = [];
            }
            acc[val[criteria]].push(val);
            return acc;
        }, {});
        return newObj;
    }


    private handleClickMeeting = (meeting: any) => {
        this.setState({ openModal: true });
        this.setState({
            values: {
                ...this.state.values,
                meetingDate: `${meeting.date}-${months[meeting.month]}-${meeting.year}`,
                date: new Date(),
            },
        });
    };
    render() {
        return (
            <>
                {this.state.openModal && (
                    <RequestModalContainer
                        closeModal={() => this.setState({ openModal: false })}
                        values={this.state.values}
                        errors={this.state.errors}
                    />
                )}
                {this.state.loading ? <LoadingIndicator /> : (
                    <WeeklyMeeting
                        groupedSchedules={this.state.groupedSchedules}
                        months={this.state.months}
                        handleClickMeeting={this.handleClickMeeting}
                    />
                )}
            </>
        );
    }


};

export default WeeklyMeetingContainer;

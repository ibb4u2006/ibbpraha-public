import React from "react";
import AllData from "../../../utils/allData";
import RequestModal from "../../../Components/Common/Meetings/RequestModal";

export interface IProps {
    closeModal: Function;
    values: any;
    errors: any;
}

interface IState {
    isCreating: boolean;
    success: boolean;
    error: string;
}

class RequestModalContainer extends React.Component<IProps, IState> {
    modalRef: any;
    constructor(props: IProps) {
        super(props);
        this.state = { isCreating: false, success: false, error: "" };
        this.modalRef = React.createRef();
    }

    componentDidMount() {
        document.addEventListener("mousedown", this.handleCloseModal);
        return () => {
            document.removeEventListener("mousedown", this.handleCloseModal);
        };
    }

    private handleCloseModal = (e: any) => {
        if (!this.modalRef?.current.contains(e.target)) {
            this.props.closeModal();
        }
    };

    private validate = () => {
        const { errors, values } = this.props;
        errors.name = !values.name ? "Name is required" : "";
        errors.email = !values.email ? "Email is required" : "";
        errors.jobTitle = !values.jobTitle ? "Job Title is required" : "";
        errors.why = !values.why ? "This field is required" : "";
        errors.hear = !values.hear ? "This field is required" : "";

        for (let key in errors) {
            if (errors[key]) {
                this.setState({ ...this.props.errors, errors });
                return false;
            }
        }

        this.setState({
            ...this.props.errors,
            errors: errors,
        });
        return true;
    };

    private handleChange = (e: any) => {
        e.persist();
        const { name, value } = e.target;
        this.setState({
            ...this.props.values,
            values: {
                ...this.props.values,
                [name]: value,
            },
        });
    };

    private handleMeetingRequest = async (e: any) => {
        e.preventDefault();
        const isValid = this.validate();
        if (isValid) {
            try {
                this.setState({ isCreating: true });
                await AllData.appendSpreadsheet(this.props.values);
                this.setState({ success: true });
                this.setState({ isCreating: false });
            } catch (error) {
                this.setState({ isCreating: true });
            }
        }
    };

    render() {
        return (
            <RequestModal
                isCreating={this.state.isCreating}
                success={this.state.success}
                errors={this.state.error}
                handleChange={this.handleChange}
                modalRef={this.modalRef}
                closeModal={this.handleCloseModal}
                handleMeetingRequest={this.handleMeetingRequest}
            />
        )
    }
}

export default RequestModalContainer;
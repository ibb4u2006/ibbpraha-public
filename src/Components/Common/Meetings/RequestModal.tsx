import { FC } from "react";
import styled from "styled-components";
import Loader from "react-loader-spinner";

interface IProps {
    isCreating: boolean;
    success: boolean;
    errors: any;
    handleChange: (e: any) => void;
    modalRef: any;
    closeModal: (e: any) => void;
    handleMeetingRequest: (e: any) => void;
}

const ModalWrapper = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const Modal = styled.form`
  background: rgba(31, 48, 68, 0.98);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.5);
  border-radius: 3px;
  width: 700px;
  color: white;
  padding: 2rem;
  margin: 0 1rem;
  display: flex;
  flex-direction: column;
  opacity: 1;
  transition: opacity 0.5s linear;

  input,
  textarea {
    background-color: transparent;
    border: 1px solid #f1f1f1;
    padding: 0.5rem;
    border-radius: 3px;
    outline: 0;
    color: white;
    width: 100%;
  }

  .successMsg {
    margin: 2rem auto;
    text-align: center;
    font-size: large;
  }

  .buttons {
    margin: 1rem auto;
  }
`;

const SubmitButton = styled.button`
  background: #f38022;
  border: none;
  height: 45px;
  width: 150px;
  border-radius: 3px;
  font-weight: 600;
  color: white;
  margin: 0 0.5rem;
  box-shadow: 0 1px 10px rgba(0, 0, 0, 0.2);
`;

const LoaderWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1111;
`;

const CloseButton = styled.button`
  background: rgba(35, 49, 69, 1);
  box-shadow: 0 1px 10px rgba(0, 0, 0, 0.2);
  border: none;
  color: white;
  padding: 0.5rem 1rem;
  height: 45px;
  border-radius: 3px;
  margin: 0 0.5rem;
`;

const RequestModal: FC<IProps> = (props) => {
    return (
        <>
            {props.isCreating && (
                <LoaderWrapper>
                    <Loader
                        type="ThreeDots"
                        color="#f38022"
                        height={100}
                        width={100}
                        timeout={50000}
                    />
                </LoaderWrapper>
            )}
            <ModalWrapper>
                <Modal ref={props.modalRef}>
                    <h2 className="text-center m-3 text-bold">
                        Request to Attend Meeting
                    </h2>
                    {!props.success ? (
                        <>
                            <div className="d-flex">
                                <div className="d-flex flex-column p-2" style={{ width: "100%" }}>
                                    <input
                                        onChange={props.handleChange}
                                        type="text"
                                        name="name"
                                        placeholder="Full Name *"
                                    />
                                    <strong className="text-danger">{props.errors.name}</strong>
                                </div>
                                <div className="d-flex flex-column p-2" style={{ width: "100%" }}>
                                    <input
                                        onChange={props.handleChange}
                                        type="text"
                                        name="email"
                                        placeholder="Email Address *"
                                    />
                                    <strong className="text-danger">{props.errors.email}</strong>
                                </div>
                            </div>
                            <div className="d-flex">
                                <div className="d-flex flex-column p-2" style={{ width: "100%" }}>
                                    <input
                                        onChange={props.handleChange}
                                        type="tel"
                                        name="phone"
                                        placeholder="Phone"
                                    />
                                </div>
                                <div className="d-flex flex-column p-2" style={{ width: "100%" }}>
                                    <input
                                        onChange={props.handleChange}
                                        type="text"
                                        name="jobTitle"
                                        placeholder="Job Title *"
                                    />
                                    <strong className="text-danger">
                                        {props.errors.jobTitle}
                                    </strong>
                                </div>
                            </div>
                            <div className="d-flex">
                                <div className="d-flex flex-column p-2" style={{ width: "100%" }}>
                                    <input
                                        onChange={props.handleChange}
                                        type="text"
                                        name="city"
                                        placeholder="City"
                                    />
                                </div>
                                <div className="d-flex flex-column p-2" style={{ width: "100%" }}>
                                    <input
                                        onChange={props.handleChange}
                                        type="text"
                                        name="country"
                                        placeholder="Country"
                                    />
                                </div>
                            </div>
                            <div className="d-flex flex-column p-2" style={{ width: "100%" }}>
                                <input
                                    onChange={props.handleChange}
                                    type="text"
                                    name="company"
                                    placeholder="Company Name"
                                />
                            </div>
                            <div className="d-flex flex-column p-2" style={{ width: "100%" }}>
                                <textarea
                                    name="hear"
                                    placeholder="How did you hear about us? *"
                                    onChange={props.handleChange}
                                // rows="3"
                                />
                                <strong className="text-danger">{props.errors.hear}</strong>
                            </div>
                            <div className="d-flex flex-column p-2" style={{ width: "100%" }}>
                                <textarea
                                    name="why"
                                    placeholder="What are you looking for? *"
                                    onChange={props.handleChange}
                                // rows="3"
                                />
                                <strong className="text-danger">{props.errors.why}</strong>
                            </div>
                            <div className="d-flex buttons">
                                <SubmitButton onClick={props.handleMeetingRequest}>
                                    Submit
                                </SubmitButton>
                                <CloseButton onClick={props.closeModal}>Cancel</CloseButton>
                            </div>
                        </>
                    ) : (
                        <div className="d-flex flex-column justify-content-center align-items-center p-4">
                            <svg
                                width={45}
                                height={46}
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M17.275 21.367c-.425-.433-1-.677-1.601-.677s-1.177.244-1.602.677A2.333 2.333 0 0013.408 23c0 .612.24 1.2.664 1.633l6.768 6.9a2.22 2.22 0 001.602.667c.308-.01.611-.085.89-.22a2.26 2.26 0 00.733-.562l15.791-18.4a2.33 2.33 0 00-.266-3.17 2.23 2.23 0 00-1.585-.57c-.58.024-1.13.276-1.532.704L22.44 26.542l-5.166-5.175z"
                                    fill="#16B813"
                                />
                                <path
                                    d="M42.744 20.7c-.598 0-1.172.242-1.595.674a2.323 2.323 0 00-.66 1.626c0 4.88-1.902 9.56-5.286 13.01-3.385 3.451-7.975 5.39-12.762 5.39a17.801 17.801 0 01-10.012-3.097 18.327 18.327 0 01-6.644-8.24 18.734 18.734 0 01-1.043-10.614 18.516 18.516 0 014.909-9.421A17.874 17.874 0 0115.51 6a17.592 17.592 0 016.931-1.4c1.443.01 2.88.179 4.287.506a2.215 2.215 0 001.78-.197 2.27 2.27 0 00.688-.616 2.322 2.322 0 00.421-1.775 2.327 2.327 0 00-.335-.868 2.278 2.278 0 00-.645-.66 2.231 2.231 0 00-.85-.346A23.343 23.343 0 0022.442 0a22.255 22.255 0 00-12.5 3.934 22.915 22.915 0 00-8.258 10.348 23.42 23.42 0 00-1.235 13.28A23.14 23.14 0 006.65 39.307c4.189 4.272 9.867 6.679 15.791 6.693 5.983 0 11.721-2.423 15.952-6.736C42.623 34.95 45 29.1 45 23c0-.61-.238-1.195-.66-1.626a2.234 2.234 0 00-1.596-.674z"
                                    fill="#16B813"
                                />
                            </svg>
                            <span className="successMsg">
                                Request submitted successfully and awaiting review
                            </span>
                            <CloseButton onClick={props.closeModal}>Close</CloseButton>
                        </div>
                    )}
                </Modal>
            </ModalWrapper>
        </>
    )
}

export default RequestModal;
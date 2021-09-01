import { FC } from "react";
import { RouteComponentProps } from "react-router-dom";
import Banner from "../../../Components/Common/Banner";
import ProfileContainer from "./ProfileContainer";

type Props = RouteComponentProps<{ id: string, name: string }>;

const ProfilePage: FC<Props> = (props: Props) => {
    return (
        <>
            <Banner title="Business Profile" />
            <ProfileContainer id={props.match.params.id} name={props.match.params.id} />
        </>
    )
}

export default ProfilePage;
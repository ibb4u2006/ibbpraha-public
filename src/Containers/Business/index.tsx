import { FC } from "react";
import Banner from "../../Components/Common/Banner";
import BusinessContainer from "./BusinessContainer";
const BusinessPage: FC = () => {
    return (
        <>
        <Banner title="Business" />
        <BusinessContainer />
        </>
    )
}

export default BusinessPage;
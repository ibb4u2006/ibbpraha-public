import React from "react";
import { structureCategories } from "../../../utils/businessData";
import AllData from "../../../utils/allData";
import Profile from "../../../Components/Business/Profile/Profile";
import LoadingIndicator from "../../../Components/Common/LoadingIndicator";

type Props = { id: string, name: string };

interface IState {
    profile?: any;
    categories?: object[];
    subCategories?: any;
    loading: boolean;
}

class ProfileContainer extends React.Component<Props, IState> {
    constructor(props: Props) {
        super(props);
        this.state = { loading: true }
    }

    componentDidMount() {
        const getProfiles = async (id: number) => {
            try {
                const profile = await AllData.fetchBusinessProfile(id);
                return { profile: profile.acf || null };
            } catch (error) {
                return {
                    props: {},
                };
            }
        }
        if (this.props.id) {
            const id = parseInt(this.props.id, 10);
            getProfiles(id).then((profile: any) => this.setState({ profile: profile.profile, categories: profile.profile.categories }, () => {
                let profileSubCategories: any[] = [];
                this.state.categories?.forEach((sub: any) => {
                    if (this.state.categories?.length) {
                        profileSubCategories.push(sub.sub_categories);
                    }
                })
                const categoriesData = structureCategories(this.state.categories, profileSubCategories);
                this.setState({ categories: [...categoriesData.objCategories], subCategories: [...categoriesData.arrSubCategories] }, () => {
                    this.setState({ loading: false });
                });
            }));
        }
    }

    render() {
        return (
            <>
                {
                    this.state.loading ? <LoadingIndicator /> :
                        <Profile profile={this.state.profile} subCategories={this.state.subCategories} />
                }
            </>
        );
    }


};

export default ProfileContainer;

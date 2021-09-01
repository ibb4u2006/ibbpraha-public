import React from 'react';
import Banner from '../../Components/Common/Banner';
import LoadingIndicator from '../../Components/Common/LoadingIndicator';
import Connect from '../../Components/Connect';
import AllData from '../../utils/allData';

interface IState {
    pragueTeam: [];
    downloads: [];
    ibbMembership: string;
    loading: boolean;
}

class ConnectPage extends React.Component<{}, IState> {
    constructor(props: {} | Readonly<{}>) {
        super(props);
        this.state = { pragueTeam: [], downloads: [], ibbMembership: '', loading: true };
    }

    componentDidMount() {
        const getContact = async () => {
            const info = await AllData.fetchPageById(135);
            return info;
        };
        getContact().then((info: any) => (this.setState(
            {
                pragueTeam: info?.acf?.prague_team,
                downloads: info?.acf?.downloads,
                ibbMembership: info?.acf?.ibb_membership,
            },
            () => {
                this.setState({ loading: false })
            }
        )))
    };
    render() {
        return (
            <>
                <Banner title="Connect with us" />
                {
                    this.state.loading ? <LoadingIndicator /> :
                        <Connect
                            pragueTeam={this.state.pragueTeam}
                            downloads={this.state.downloads}
                            ibbMembership={this.state.ibbMembership} />
                }
            </>
        )
    }

}

export default ConnectPage;
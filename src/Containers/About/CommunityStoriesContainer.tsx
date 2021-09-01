import { useEffect } from "react";
import { useState } from "react";
import AllData from "../../utils/allData";
import CommunityStories from "../../Components/About/CommunityStories";
import LoadingIndicator from "../../Components/Common/LoadingIndicator";

const CommunityStoriesContainer = () => {
    const [stories, setStories] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getStories = async () => {
            const communityStories = await AllData.fetchCommunityStoriesById();
            return communityStories;
        };
        getStories().then((stories: any) => {
            setStories(stories?.acf?.community_stories);
            setLoading(false);
        }
        )
    });

    return (
        <>
            {loading ? <LoadingIndicator /> : <CommunityStories stories={stories} />}
        </>
    );
};

export default CommunityStoriesContainer;

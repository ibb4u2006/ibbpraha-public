import { FC } from "react";
import CommunityStory from "./CommunityStory";

type Props = {stories: object[]}

const CommunityStories: FC<Props> = ({stories}) => {
    return (
        <div className="section-g mt-5 mag">
                <h4 className="section-title">
                    IF YOU WANT TO GO FAR, <div className="orange-color">GO TOGETHER</div>
                    <div className="divides w-75"></div>
                </h4>
                <h5 className="comm">community stories</h5>
                <div className="content-wrapper">
                    <div className="container-fluid">
                        {stories?.map((story: any, index: number) => (
                            <CommunityStory
                                key={index}
                                category={story.category}
                                image={story.image}
                                content={story.content}
                                heading={story.title}
                            />
                        ))}
                    </div>
                </div>
            </div>
    )
}

export default CommunityStories;
import { FC } from 'react';
import Banner from '../../Components/Common/Banner';
import JoinConversation from '../../Components/Common/JoinConversation';
import WeeklyMeetingContainer from '../Common/Meetings/WeeklyMeetingContainer';
import CommunityStories from './CommunityStoriesContainer';

const AboutPage: FC = () => {
  return (
    <>
      <Banner title="About Us" />
      <CommunityStories />
      <JoinConversation />
      <WeeklyMeetingContainer />
    </>
  )
}

export default AboutPage;
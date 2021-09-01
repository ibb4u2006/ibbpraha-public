import { useRef } from 'react';
import Hero from './Hero';
import JoinConversation from '../Common/JoinConversation';
import CoreBusinessesServices from './CoreBusinessServices';
import Info from './Info';
import JoinAlert from './JoinAlert';
import WeeklyMeetingContainer from '../../Containers/Common/Meetings/WeeklyMeetingContainer';

const HomePage = () => {
    const myRef: any = useRef(null)
    const executeScroll = () => myRef.current.scrollIntoView();
    return (
        <>
            <Hero />
            <Info />
            <JoinAlert click={executeScroll} />
            <CoreBusinessesServices />
            <JoinConversation />
            <div ref={myRef}>
                <WeeklyMeetingContainer />
            </div>
        </>
    );
}

export default HomePage;
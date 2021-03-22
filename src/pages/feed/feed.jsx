import React from 'react';
import Following from './following';
import You from './you';
import Profile from './profile';
import { FeedContainer, NavContainer } from './styled';

function Feed() {
    const [following, setFollowing] = React.useState(true);
    const [you, setYou] = React.useState(false);
    const [profile, setProfile] = React.useState(false);

    function changeToFollowing() {
        setYou(false);
        setProfile(false);
        setFollowing(true);
      }
    function changeToYou() {
        setYou(true);
        setProfile(false);
        setFollowing(false);
      }
    function changeToProfile() {
        setYou(false);
        setProfile(true);
        setFollowing(false);
      }

    return (
        <FeedContainer>
            <NavContainer >
                <p>Feed</p>
                <ul>
                    <li><span onClick={() => changeToFollowing()} >Following</span></li>
                    <li><span onClick={() => changeToYou() } >You</span></li>
                    <li><span onClick={() => changeToProfile()} >Profile</span></li>
                </ul>
            </NavContainer>
            <br/>
            {following && <Following />}
            {you && <You />}
            {profile && <Profile />}
        </FeedContainer>
    );
}

export default Feed;
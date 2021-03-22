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
                <span>Feed</span>
                <ul>
                    <li><a onClick={() => changeToFollowing()} href="#feed">Following</a></li>
                    <li><a onClick={() => changeToYou() } href="#feed">You</a></li>
                    <li><a onClick={() => changeToProfile()} href="#feed">Profile</a></li>
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
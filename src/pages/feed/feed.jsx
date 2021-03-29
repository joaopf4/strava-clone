import React from 'react';
import Following from './following';
import You from './you';
import Profile from './profile';
import { FeedContainer, HeaderContainer } from './styled';

function Feed() {
    const [following, setFollowing] = React.useState(true);
    const [you, setYou] = React.useState(false);
    const [profile, setProfile] = React.useState(false);
    const [border, setBorder] = React.useState(false);

    function changeToFollowing() {
        setYou(false);
        setProfile(false);
        setFollowing(true);
        setBorder(true);
      }
    function changeToYou() {
        setYou(true);
        setProfile(false);
        setFollowing(false);
        setBorder(true);
      }
    function changeToProfile() {
        setYou(false);
        setProfile(true);
        setFollowing(false);
        setBorder(true);
      }

    return (
        <FeedContainer>
            <HeaderContainer >
                <p>Feed</p>
                <nav>
                    <div><span border onClick={() => changeToFollowing()} >Following</span></div>
                    <div><span border onClick={() => changeToYou() } >You</span></div>
                    <div><span border onClick={() => changeToProfile()} >Profile</span></div>
                </nav>
            </HeaderContainer>
            <br/>
            {following && <Following />}
            {you && <You />}
            {profile && <Profile />}
        </FeedContainer>
    );
}

export default Feed;
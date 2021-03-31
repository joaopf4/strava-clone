import React from 'react';
import Following from './following';
import You from './you';
import Profile from './profile';
import { FeedContainer, HeaderContainer, NavItens, Nav} from './styled';

function Feed() {
    const [following, setFollowing] = React.useState(true);
    const [you, setYou] = React.useState(false);
    const [profile, setProfile] = React.useState(false);
    // const [borderOne, setBorderOne] = React.useState(false);
    // const [borderTwo, setBorderTwo] = React.useState(false);
    // const [borderThree, setBorderThree] = React.useState(false);

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
            <HeaderContainer >
                <p>Feed</p>
            </HeaderContainer>
            <Nav>
                <div><NavItens active={following} onClick={() => changeToFollowing()} >Following</NavItens></div>
                <div><NavItens active={you} onClick={() => changeToYou() } >You</NavItens></div>
                <div><NavItens active={profile} onClick={() => changeToProfile()} >Profile</NavItens></div>
            </Nav>
            <br/>
            {following && <Following />}
            {you && <You />}
            {profile && <Profile />}
        </FeedContainer>
    );
}

export default Feed;
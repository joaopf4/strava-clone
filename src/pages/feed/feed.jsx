import React, { useEffect } from 'react';
import Following from './following';
import You from './you';
import Profile from './profile';
import { FeedContainer, HeaderContainer, NavItens, Nav} from './styled';
import { useHistory } from 'react-router';

function Feed() {
    const [following, setFollowing] = React.useState(true);
    const [you, setYou] = React.useState(false);
    const [profile, setProfile] = React.useState(false);
    const history = useHistory();

    useEffect(() => {
        checkAuth();
      }, );

    function checkAuth() {
        if (!localStorage.getItem('token', 'user@user.com') || !localStorage.getItem('token', 'provi@provi.com')) {
            redirectToLogin();
        }
    }

    const redirectToLogin = () => {
        history.push('/login'); 
    };

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
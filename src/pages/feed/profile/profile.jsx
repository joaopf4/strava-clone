import React from 'react';
import { ProfileFeed } from './styled';
import Avatar from '../../../assets/profile_placeholder.png'


function Profile() {
    return (
        <ProfileFeed>
            <img alt="avatar" src={Avatar} />
            <h1>Provi Nascimento</h1>
            <h1>67kg</h1>
            <h1>33 anos</h1>
            <h1>Bicicleta: Audax sport</h1>
        </ProfileFeed>
    );
}

export default Profile;
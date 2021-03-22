import React from 'react';
import Following from './following';
import { FeedContainer } from './styled';

function Feed() {
    return (
        <FeedContainer>
            <Following />
        </FeedContainer>
    );
}

export default Feed;
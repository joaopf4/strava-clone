import styled from 'styled-components';

export const ProfileFeed = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    background-color: #f1f1f1;
    padding: 20px;
    img {
        border-radius: 50%;
        width: 150px;
    }
    h1 {
        font-size: 16px;
        padding: 6px;
        border-radius: 4px;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    }
`
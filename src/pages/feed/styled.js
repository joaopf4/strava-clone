import styled from 'styled-components';

export const FeedContainer = styled.div `
    width: inherit;
    height: 100%;
    background-color: #f1f1f1;
    display: flex;
    flex-direction: column;
`
export const NavContainer = styled.nav `
    width: inherit;
    height: 14vh;
    background-color: #e84f32;
    box-sizing: border-box;
    color: white;
    display: flex;
    flex-direction: column;
    font-weight: 800;
    position: relative; 
    p {
        width: fit-content;
        margin: 16px;
    }
    ul {
        list-style-type: none;
        text-align: center;
        width: 100%;
        margin: 0 auto;
        padding: 0px;
        overflow: hidden;
        position: absolute; 
        bottom: 10px; 
    }
    li {
        display: inline-block;
        width: 33.3%;
        font-size: 14px;
    }
    span {
        cursor: pointer;
    }

`
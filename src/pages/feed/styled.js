import styled from 'styled-components';

export const FeedContainer = styled.div `
    width: inherit;
    height: 100%;
    background-color: #f1f1f1;
    display: flex;
    flex-direction: column;
`
export const HeaderContainer = styled.header `
    width: inherit;
    height: fit-content;
    background-color: #e84f32;
    box-sizing: border-box;
    color: white;
    display: flex;
    flex-direction: column;
    font-weight: 800;
    /* position: relative;  */
    p {
        width: fit-content;
        margin: 2.5vh;
    }
    nav {
        flex: 1;
        align-self: flex-end;
        width: 100%;
        padding: 0px;
        overflow: hidden;
        bottom: 10px; 
        display: flex;
        align-items: center;
    }
    div {
        width: 100%;
        height: 40px;
        font-size: 14px;        
    }
    span {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 100%;
        background-position: center;
        box-sizing: border-box;
        border-bottom: 3px solid white;
        transition: background 0.8s;
        cursor: pointer;
        :active {
            background-color: #ef745c;
            background-size: 100%;
            transition: background 0s;
        }
    }

`
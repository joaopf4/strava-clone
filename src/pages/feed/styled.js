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
    p {
        width: fit-content;
        margin: 1.9vh;
    }
`
export const Nav = styled.nav `
    background-color: #e84f32;
    width: 100%;
    display: flex;
    justify-content: space-around;
    position: sticky;
    top: 0;
    font-weight: 800;
    div {
        width: 100%;
        height: 38px;
        font-size: 14px;        
    }
`
export const NavItens = styled.span `
    display: flex;
    color: ${props => props.active ? "white" : "#ffa291"};
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    background-position: center;
    box-sizing: border-box;
    border-bottom: ${props => props.active ? "2px solid white" : "2px solid transparent"};
    transition: linear background 0.8s;
    transition: border-bottom 0.3s;
    cursor: pointer;
    :active {
        background-color: #ef745c;
        background-size: 100%;
        transition: background 0s;
    }
`
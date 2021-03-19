import styled from 'styled-components';

export const NavContainer = styled.nav `
    width: inherit;
    height: 12vh;
    background-color: #e84f32;
    box-sizing: border-box;
    color: white;
    display: flex;
    flex-direction: column;
    font-weight: 800;
    position: relative; 
    span {
        width: fit-content;
        margin: 20px;
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
    }

`
export const NavTitle = styled.h2 `
    
`
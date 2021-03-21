import styled from 'styled-components';

export const LoginContainer = styled.div `
    width: inherit;
    height: 100vh;
    background-color: #ebebeb;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    color: #e84f32;
    font-weight: 800;
    form {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    label {
        font-size: 1.0rem;
        margin: 6px 0px -10px;
        align-self: flex-start;
    }
    img {
      height: 100px;
    }
`
export const InputsComp = styled.div `
  width: 300px;
  height: 60px;
  border: 2px solid #111010;
  box-shadow: rgba(17, 16, 16, 1) 20px 20px;
  box-sizing: border-box;
  padding: 0 20px;
  margin: 18px 0px;
  display: flex;
  align-items: inherit;
  background-color: white;
  input {
    border: none;
    outline: none;
    width: 100%;
    font-size: 1.3rem; 
  }
  p {
    font-size:1.2rem;
    cursor: pointer;
    color: #111010;
  }

  @media(max-width: 460px) {
    min-width: 260px;
    width:  260px;
    height: 50px;
  }
`
export const Button = styled.button `
  width: 300px;
  height: 60px;
  background-color: #e84f32;
  outline: none;
  border: 2px solid #111010;
  box-shadow: rgba(17, 16, 16, 1) 20px 20px ;
  box-sizing: border-box;
  font-weight: inherit;
  color: #fff;
  margin: 18px 0px;
  font-size: 1.3rem;
  :hover {
    cursor: pointer;
    background-color: #e9654c;
  }
  :active {
    background-color: #e84f32;
    color: #fff;
    transform: translateY(3px);
    transition: .25s;
    box-shadow: rgba(17, 16, 16, 1) 20px 17px ;
  }
  @media(max-width: 460px) {
    width: 260px;
    height: 50px;
  }
`

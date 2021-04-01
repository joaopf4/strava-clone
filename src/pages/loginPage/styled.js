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
    transition: .15s;
    box-shadow: rgba(17, 16, 16, 1) 14px 14px ;
  }
  @media(max-width: 460px) {
    width: 260px;
    height: 50px;
  }
`
export const Loader = styled.div `
  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;
  div{
    position: absolute;
    top: 33px;
    width: 13px;
    height: 13px;
    border-radius: 50%;
    background: #e84f32;
    animation-timing-function: cubic-bezier(0, 1, 1, 0);
  }
  div:nth-child(1) {
    left: 8px;
    animation: Loader1 0.6s infinite;
  }
  div:nth-child(2) {
    left: 8px;
    animation: Loader2 0.6s infinite;
  }
  div:nth-child(3) {
    left: 32px;
    animation: Loader2 0.6s infinite;
  }
  div:nth-child(4) {
    left: 56px;
    animation: Loader3 0.6s infinite;
  }

  @keyframes Loader1 {
    0% {
      transform: scale(0);
    }
    100% {
      transform: scale(1);
    }
  }
  @keyframes Loader3 {
    0% {
      transform: scale(1);
    }
    100% {
      transform: scale(0);
    }
  }
  @keyframes Loader2 {
    0% {
      transform: translate(0, 0);
    }
    100% {
      transform: translate(24px, 0);
    }
  }

`
import styled from 'styled-components';

export const SingleActivity = styled.div `
    /* width: fit-content; */
    margin-bottom: 20px;
    display: flex;
    flex-direction: column;
    font-size: 14px;
    padding: 16px 16px 0 16px;
    h1{
        font-size: 40px;
        font-weight: 600;
    }
    span {
        margin-bottom: 3px;
    }
    div {
        display: flex;
        flex-direction: column;
    }
`

export const Author = styled.span `
    text-align: left;
    font-weight: 800;
    font-size: 12px;
    margin-left: 60px;
`
export const DateLocal = styled.span `
    font-size: 10px;
    margin-left: 60px;
    color: #636363;
`
export const ActivityTitle = styled.span `
    font-size: 16px;
    font-weight: 800;
`
export const Description = styled.span `
    font-size: 12px;
    color: #636363;
`
export const DistanceElev = styled.span `  
    font-size: 18px;
    display: flex;
    p {
        color: #636363;
        margin: 6px;
        font-size: 20px;
        font-weight: 100;
    }
`
export const Metrics = styled.span `
    font-size: 10px;
    color: #636363;
`
export const Route = styled.img `
    width: 90vw;
`
export const Spacer = styled.div `
    height: 16px;
`
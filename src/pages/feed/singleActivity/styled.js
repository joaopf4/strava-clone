import styled from 'styled-components';

export const SingleActivity = styled.div `
    /* width: fit-content; */
    display: flex;
    flex-direction: column;
    font-size: 14px;
    padding: 16px 16px 8px 16px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    h1{
        font-size: 40px;
        font-weight: 600;
    }
    span {
        margin-bottom: 3px;
    }

`
export const ProfileInfo = styled.div`
    display: flex;
    div {
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
`
export const Avatar = styled.img `
    width: 40px;
    border-radius: 50%;

`
export const Author = styled.span `
    text-align: left;
    font-weight: 800;
    font-size: 12px;
    margin-left: 10px;
`
export const DateLocal = styled.span `
    font-size: 10px;
    color: #636363;
    margin-left: 10px;
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
    div {
        display: flex;
        flex-direction: column;
    }
`
export const Metrics = styled.span `
    font-size: 10px;
    color: #636363;
`
export const Route = styled.img `
    width: inherit;
`
export const Spacer = styled.div `
    height: 16px;
`
export const ActivityStats = styled(DateLocal)`
    margin: 12px;

`
export const Interactions = styled.div `
    padding: 6px 0;
    width: inherit;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    margin-bottom: 20px;
    background-color: #e7e7e7;
    i {
        cursor: pointer;
    }
`
import React from 'react';
import { 
SingleActivity, 
Spacer, 
DistanceElev, 
Metrics,  
Author, 
DateLocal, 
ActivityTitle, 
Description,  
Route
 } from './styled';

function Activity(props) {
    return(
        <SingleActivity key={props.id}>
            <Author>{props.userName}</Author>
            <DateLocal>{props.date} • {props.local}</DateLocal>
            <Spacer />
            <ActivityTitle>{props.activityName}</ActivityTitle>
            <Description>{props.description}</Description>
            <Spacer />
            <DistanceElev>
                <div>                
                    <Metrics>Distância</Metrics>              
                    <DistanceElev>{props.distance}</DistanceElev> 
                </div>
                <p>|</p>
                <div>                
                    <Metrics>Ganho de elev.</Metrics>              
                    <DistanceElev>{props.elevationGain}</DistanceElev> 
                </div>
            </DistanceElev>
            <Route src={props.map}/>
                
        </SingleActivity>
    );
}

export default Activity;
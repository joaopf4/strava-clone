import React from 'react';
import { 
Avatar,
SingleActivity, 
Spacer, 
DistanceElev, 
Metrics,  
Author, 
DateLocal,
Interactions,
ProfileInfo,
ActivityStats,
ActivityTitle, 
Description,  
Route
 } from './styled';

function Activity(props) {
    return(
        <>
            <SingleActivity key={props.id}>
                <ProfileInfo>
                    <Avatar src={props.avatar}></Avatar>
                    <div>
                        <Author>{props.userName}</Author>
                        <DateLocal>{props.date} • {props.local}</DateLocal>
                    </div>
                </ProfileInfo>
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
                <ActivityStats>{props.kudos} pessoas curtiram esta atividade</ActivityStats>
            </SingleActivity>
                <Interactions>
                    <i className="fa fa-thumbs-o-up"></i>
                    <i className="fa fa-comment-o"></i>
                    <i className="fa fa-share-alt"></i>
                </Interactions>
        </>
    );
}

export default Activity;
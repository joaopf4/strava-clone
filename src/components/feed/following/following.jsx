import React from 'react';
import Activity from '../singleActivity';
import { FollowingFeed } from './styled';
import MockMap from '../../../assets/map.png'

function Following() {
    const followingActivities = [
        {
            id: 0,
            userName: 'Henrique Avancini',
            date: 'Hoje, às 10:33',
            local: 'Buzios, Rio de Janeiro',
            activityName: 'Pedal litorâneo',
            description: 'Hoje foi dia de pedal leve pela orla. Pouco trânsito.',
            distance: '44,75 km',
            elevationGain: '120m',
            map: `${MockMap}`
        },
        {
            id: 2,
            userName: 'Mari Brugger',
            date: 'Ontem, às 05:33',
            local: 'Belo Horizonte, Minas Gerais',
            activityName: 'Morning Ride',
            description: 'Subindo montanhas',
            distance: '84,75 km',
            elevationGain: '2372m',
            map: `${MockMap}`
        },
        {
            id: 3,
            userName: 'Henrique Avancini',
            date: 'Hoje, às 10:33',
            local: 'Buzios, Rio de Janeiro',
            activityName: 'Pedal litorâneo',
            description: 'Hoje foi dia de pedal leve pela orla. Pouco trânsito.',
            distance: '44,75 km',
            elevationGain: '120m',
            map: `${MockMap}`
        },
        {
            id: 4,
            userName: 'Henrique Avancini',
            date: 'Hoje, às 10:33',
            local: 'Buzios, Rio de Janeiro',
            activityName: 'Pedal litorâneo',
            description: 'Hoje foi dia de pedal leve pela orla. Pouco trânsito.',
            distance: '44,75 km',
            elevationGain: '120m',
            map: `${MockMap}`
        },
        {
            id: 5,
            userName: 'Henrique Avancini',
            date: 'Hoje, às 10:33',
            local: 'Buzios, Rio de Janeiro',
            activityName: 'Pedal litorâneo',
            description: 'Hoje foi dia de pedal leve pela orla. Pouco trânsito.',
            distance: '44,75 km',
            elevationGain: '120m',
            map: `${MockMap}`
        },
    ]

    return (
        <FollowingFeed>
            {
                followingActivities.map((activity) => {
                    return(
                        <Activity 
                            id={activity.id}
                            userName={activity.userName}
                            date={activity.date}
                            local={activity.local}
                            activityName={activity.activityName}
                            description={activity.description}
                            distance={activity.distance}
                            elevationGain={activity.elevationGain}
                            map={activity.map}
                        />
                    )
                })
            }
        </FollowingFeed>
    );
}

export default Following;
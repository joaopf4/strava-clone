import React from 'react';
import Activity from '../singleActivity';
import { YouFeed } from './styled';
import MockMap from '../../../assets/map.png'
import Avatar from '../../../assets/profile_placeholder.png'

function You() {
    const yourActivities = [
        {
            id: 0,
            userName: 'Atleta Provi',
            avatar: `${Avatar}`,
            date: 'Hoje, às 10:33',
            local: 'Buzios, Rio de Janeiro',
            activityName: 'Pedal litorâneo',
            description: 'Hoje foi dia de pedal leve pela orla. Pouco trânsito.',
            distance: '44,75 km',
            elevationGain: '120m',
            kudos: '233',
            map: `${MockMap}`
        },
        {
            id: 2,
            userName: 'Atleta Provi',
            avatar: `${Avatar}`,
            date: 'Ontem, às 05:33',
            local: 'Belo Horizonte, Minas Gerais',
            activityName: 'Morning Ride',
            description: 'Subindo montanhas',
            distance: '84,75 km',
            elevationGain: '2372m',
            kudos: '145',
            map: `${MockMap}`
        },
        {
            id: 3,
            userName: 'Atleta Provi',
            avatar: `${Avatar}`,
            date: 'Ontem, às 11:00',
            local: 'Belo Horizonte, Minas Gerais',
            activityName: '3 voltas na lagoa',
            description: '',
            distance: '54,75 km',
            elevationGain: '120m',
            kudos: '189',
            map: `${MockMap}`
        },
        {
            id: 4,
            userName: 'Atleta Provi',
            avatar: `${Avatar}`,
            date: '18 de Março de 2021, às 09:45',
            local: 'Campinas, São Paulo',
            activityName: 'Morning Ride',
            description: 'Dia de fazer força na estrada!',
            distance: '144,75 km',
            elevationGain: '1320m',
            kudos: '72',
            map: `${MockMap}`
        },
        {
            id: 5,
            userName: 'Atleta Provi',
            avatar: `${Avatar}`,
            date: '17 de Março de 2021, às 10:33',
            local: 'Três Corações, Minas Gerais',
            activityName: 'Morning Ride',
            description: '',
            distance: '155,67 km',
            elevationGain: '1620m',
            kudos: '57',
            map: `${MockMap}`
        },
    ]

    return (
        <YouFeed>
            {
                yourActivities.map((activity) => {
                    return(
                        <Activity 
                            id={activity.id}
                            userName={activity.userName}
                            avatar={activity.avatar}
                            date={activity.date}
                            local={activity.local}
                            activityName={activity.activityName}
                            description={activity.description}
                            distance={activity.distance}
                            elevationGain={activity.elevationGain}
                            kudos={activity.kudos}
                            map={activity.map}
                        />
                    )
                })
            }
        </YouFeed>
    );
}

export default You;
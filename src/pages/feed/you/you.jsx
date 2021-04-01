import React from 'react';
import Activity from '../singleActivity';
import { YouFeed } from './styled';
import MockMap from '../../../assets/map.png'
import Avatar from '../../../assets/profile_placeholder.png'

function You() {
    const yourActivities = [
        {
            id: 0,
            userName: 'Usuário da conta',
            avatar: `${Avatar}`,
            date: 'Hoje, às 10:33',
            local: 'São Paulo, São Paulo',
            activityName: 'Passeio pela paulista',
            description: 'Roé suave hoje, sem treino',
            distance: '24,75 km',
            elevationGain: '320m',
            kudos: '233',
            map: `${MockMap}`
        },
        {
            id: 2,
            userName: 'Usuário da conta',
            avatar: `${Avatar}`,
            date: 'Ontem, às 05:33',
            local: 'São Paulo, São Paulo',
            activityName: 'Marginal pelotão',
            description: 'Hoje foi pegado',
            distance: '84,75 km',
            elevationGain: '372m',
            kudos: '145',
            map: `${MockMap}`
        },
        {
            id: 3,
            userName: 'Usuário da conta',
            avatar: `${Avatar}`,
            date: 'Ontem, às 11:00',
            local: 'São Paulo, São Paulo',
            activityName: 'Ibira',
            description: '',
            distance: '44,75 km',
            elevationGain: '220m',
            kudos: '189',
            map: `${MockMap}`
        },
        {
            id: 4,
            userName: 'Usuário da conta',
            avatar: `${Avatar}`,
            date: '18 de Março de 2021, às 09:45',
            local: 'São Paulo, São Paulo',
            activityName: 'Morning Ride',
            description: 'Dia de fazer força na estrada!',
            distance: '144,75 km',
            elevationGain: '1320m',
            kudos: '72',
            map: `${MockMap}`
        },
        {
            id: 5,
            userName: 'Usuário da conta',
            avatar: `${Avatar}`,
            date: '17 de Março de 2021, às 10:33',
            local: 'São Paulo, São Paulo',
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
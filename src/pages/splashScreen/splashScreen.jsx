import React from 'react';
import { SplashScreen } from './styled';
import Logo from '../../assets/strava-logo.png';
import { useHistory } from 'react-router';

function Splash() {
    const history = useHistory();

    React.useEffect(() => {
        setTimeout(() => {
            history.push('/login');
        }, 3 * 1000);
      });

    return (
        <SplashScreen>
            <img alt="Logo" src={Logo}/>
        </SplashScreen>
    );
}

export default Splash;
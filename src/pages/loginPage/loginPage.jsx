import React from 'react';
import { LoginContainer, InputsComp, Button, Loader } from './styled';
import Strava from '../../assets/strava-icon.png'
import { useHistory } from 'react-router';

function Login() {
    const [passwordShown, setPasswordShown] = React.useState(false);
    const [state , setState] = React.useState({
        email : "",
        password : "",
        successMessage: null
    });
    const [loading, setLoading] = React.useState(false);
    const history = useHistory();
    
    const handleChange = (e) => {
        const {id , value} = e.target   
        setState(prevState => ({
            ...prevState,
            [id] : value
        }))
    };
    const togglePasswordVisibility = () => {
        setPasswordShown(!passwordShown);
    };
    const handleLogin = (e) => {
        e.preventDefault();
        const payload={
            "email":state.email,
            "password":state.password,
        }
        if((payload.email === 'provi@provi.com' || payload.email === 'user@user.com' ) && payload.password === '12345'){
            localStorage.setItem('token', state.email)
            setLoading(true);
            setTimeout(() => {
                redirectToHome();
              }, 2 * 1000);
        } else{
            alert("Senha ou usuário incorretos");

        }
        
    };
    const redirectToHome = () => {
        history.push('/feed'); 
    };

    return (
        <LoginContainer>
            <img alt="Strava" src={Strava}/>
            <h2>Faça seu Login</h2>
            <form>
                <label for="email">Email</label>
                <InputsComp>
                    <input 
                        name="email"
                        required
                        type="text"
                        id="email"
                        value={state.email}
                        onChange={handleChange}
                        placeholder="user@user.com"
                    />
                </InputsComp>
                <label for="password">Senha</label>
                <InputsComp>
                    <input 
                        name="password"
                        required
                        type={(passwordShown) ? "text" : "password" }
                        id="password"
                        value={state.password}
                        onChange={handleChange} 
                        placeholder="12345"
                    />
                    <p>
                        <i 
                        onClick={() => togglePasswordVisibility() } 
                        className={passwordShown ? "icon-eye-close" : "icon-eye-open"}>
                        </i>
                    </p>
                </InputsComp>
                {!loading ? 
                <Button 
                type="submit"
                onClick={handleLogin}
                >
                    Login
                </Button> 
                :
                <Loader>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </Loader>

                }
            </form>
        </LoginContainer>
    );
}

export default Login;
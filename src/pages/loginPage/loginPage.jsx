import React from 'react';
import { LoginContainer, InputsComp, Button } from './styled';
import Strava from '../../assets/strava-icon.png'
import { useHistory } from 'react-router';

function Login(props) {
    const [passwordShown, setPasswordShown] = React.useState(false);
    const [state , setState] = React.useState({
        email : "",
        password : "",
        successMessage: null
    })

    const handleChange = (e) => {
        const {id , value} = e.target   
        setState(prevState => ({
            ...prevState,
            [id] : value
        }))
    }

    const togglePasswordVisibility = () => {
        setPasswordShown(!passwordShown);
      }
    const handleLogin = (e) => {
        e.preventDefault();
        const payload={
            "email":state.email,
            "password":state.password,
        }
        if(payload.email === 'provi@provi.com' && payload.password === '12345'){
            redirectToHome();
        } else{
            alert("Senha ou usuário incorretos");

        }
        
    }
    const history = useHistory()
    const redirectToHome = () => {
        history.push('/feed'); //adicionar um set time out com um loading
    }

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
                        placeholder="email"
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
                        placeholder="senha"
                    />
                    <p>
                        <i 
                        onClick={() => togglePasswordVisibility() } 
                        className={passwordShown ? "icon-eye-close" : "icon-eye-open"}>
                        </i>
                    </p>
                </InputsComp>
                <Button 
                    type="submit"
                    onClick={handleLogin}
                >
                    Login
                </Button>
            </form>
        </LoginContainer>
    );
}

export default Login;
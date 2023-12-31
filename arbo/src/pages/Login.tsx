import { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { validateLogin } from '../utils/apiCalls';
import { UserContext } from '../Context';
import { UserState } from '../utils/types';
import '../shared_styles/alignment.css'
import '../shared_styles/unselectable.css'
import './Login.css'

const Login = () => {
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [errorText, setError] = useState('');

    const navigate = useNavigate();

    const {userState, setUserState} = useContext(UserContext)

    // Verifies if the account is valid
    const checkLogin = () => {
        if (name === '' || password === '')
            setError('Erro: Há campos não preenchidos!');

        const account : UserState = validateLogin(name, password);
        performLogin(account);
    }

    // Actually performs the login
    const performLogin = (account : UserState) => {
        if (account.isLoggedIn === false) {
            setError('Erro: Usuário e/ou senha inválidos!');
            return;
        }

        if (setUserState !== undefined)
            setUserState(account);

        navigate('/');
    }
    
    const loginForm = () => {
        return (
            <>
                <p>
                    <input className='login_input'
                    style={{marginRight: '15%'}}
                        onChange={(event)=>setName(event.target.value)} 
                        type='text'
                        placeholder='Email or username...'
                        id='name' />
                </p>
                <p>
                    <input className='login_input'
                    style={{marginLeft: '15%'}}
                        onChange={(event)=>setPassword(event.target.value)} 
                        type='password' 
                        placeholder='Password' 
                        id='password' />
                </p>

                <p><button className='login_button unselectable' onClick={checkLogin}>Login</button></p>
            </>
        );
    }

    const loadForm = () => {
        if (!userState?.isLoggedIn)
            return loginForm();

        else 
            return (<p className='login-message'>You're already logged in, {userState.userName}!</p>)
    }

    return (
        <div className='login-background'>
            <div className='conteiner-middle-center conteiner-login'>
                <div className='item-middle-center item-login'>
                    <div className='login-container'>
                        {errorText !== '' && <p className='error'>{`${errorText}`}</p>}
                        
                        {loadForm()}
                        
                        <Link to='/signup'><p className='link'>Are you new here?</p></Link>
                        <Link to='/recovery'><p className='link'>Forgot your password?</p></Link>
                        
                    </div>
                </div>
            </div>
        </div>
    );
}



export default Login;
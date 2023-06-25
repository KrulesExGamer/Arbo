import { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../Context';
import { user_session } from '../utils/types';
import '../shared_styles/alignment.css'
import '../shared_styles/unselectable.css'
import './Login.css'
import { performLogin } from '../utils/apiCalls';

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

        let account : user_session = performLogin(name, password);

        if (setUserState !== undefined && account.logado)
        {    
            setUserState(account);
            navigate('/');
        }

        else 
            setError('Erro: Usuário ou senha não encontrados!')
    }

    const loginForm = () => {
        return (
            <>
                <p>
                    <input className='login_input'
                    // style={{marginRight: '15%'}}
                        onChange={(event)=>setName(event.target.value)} 
                        type='text'
                        placeholder='Email or username...'
                        id='name' />
                </p>
                <p>
                    <input className='login_input'
                    // style={{marginLeft: '15%'}}
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
        if (!userState?.logado)
            return loginForm();

        else 
            return (<p className='login-message'>Você já está logado(a), {userState.nome}!</p>)
    }

    return (
        <div className='login-background'>
            <div className='conteiner-middle-center'>
                <div className='item-login'>
                    <div className='login-container'>
                        {errorText !== '' && <p className='error'>{`${errorText}`}</p>}
                        
                        {loadForm()}
                        
                        {!userState?.logado && <>                        
                        <Link to='/signup'><p className='link'>Ainda não tem uma conta?</p></Link>
                        <Link to='/recovery'><p className='link'>Esqueceu sua senha?</p></Link>
                        </> }

                        {userState?.logado && <>
                        <Link to='logoff'><p className='link'>Deseja sair?</p></Link>
                        </>}
                        
                    </div>
                </div>
            </div>
        </div>
    );
}



export default Login;
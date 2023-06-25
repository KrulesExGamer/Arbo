import { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../Context';
import '../shared_styles/alignment.css';
import '../shared_styles/unselectable.css';
import './Signup.css';
import { user_session } from '../utils/types';
import { performSignup } from '../utils/apiCalls';
import { EMAIL_PATTERN } from '../utils/appConstants';

const Signup = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorText, setError] = useState('');

    const navigate = useNavigate();

    const {userState, setUserState} = useContext(UserContext);

    // Garantees that both the name and email are not already registered 
    const checkSignup = () => {
        if (name === '' || email === '' || password === '') 
            setError('Erro: Há campos não preenchidos!');

        else if (!EMAIL_PATTERN.test(email))
            setError('Erro: Email inválido!')

        else {
            let account : user_session = performSignup(name, email, password);
        
            if (setUserState != undefined && account.logado)
            {
                setUserState(account);
                navigate('/');
            }


            else
                setError('Erro: Usuário e/ou email já foram cadastrados!');
        }
    }

    const signupForm = () => {
        return (
            <>
                <p>
                    <input className='login_input'
                        onChange={(event)=>setName(event.target.value)} 
                        type='text'
                        placeholder='Username...'
                        id='name' />
                </p>
                <p>
                <input className='login_input'
                        onChange={(event)=>setEmail(event.target.value)} 
                        type='text'
                        placeholder='Email...'
                        id='name' />
                </p>
                <p>
                    <input className='login_input'
                        onChange={(event)=>setPassword(event.target.value)} 
                        type='password' 
                        placeholder='Password' 
                        id='password' />
                </p>
                <p>
                    <button className='login_button unselectable' onClick={checkSignup}>Sign Up</button>
                </p>
            </>
        );
    }

    const loadForm = () => {
        if (!userState?.logado)
            return signupForm();

        else 
            return (<p className='signup-message'>Você já está logado, {userState.nome}!</p>)
    }

    return (
        <div className='signup-background'>
            <div className='conteiner-middle-center'>
                <div className='item-signup'>
                    <div className='login-container'>
                        {errorText != '' && <p className='error'>{`${errorText}`}</p>}
                        
                        {loadForm()}
                        
                        {!userState?.logado && <Link to='/login'><p className='link'>Já tem uma conta?</p></Link>}

                        {userState?.logado && <Link to='/logoff'><p className='link'>Deseja sair?</p></Link>}
                    </div>
                </div>
            </div>
        </div>
    );
}



export default Signup;
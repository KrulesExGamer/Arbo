import { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { UserContext } from '../Context';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSadTear } from '@fortawesome/free-solid-svg-icons';
import SimpleHeader from '../components/SimpleHeader';
import '../shared_styles/alignment.css'
import '../shared_styles/unselectable.css'
import './Logoff.css'

const Logoff = () => {
    const {userState, setUserState} = useContext(UserContext);

    const navigate = useNavigate();

    const searchParams = new URLSearchParams(useLocation().search);
    const username = searchParams.get('username');  

    // Performs the logoff
    const performLogoff = () => {
        if (setUserState !== undefined) {
            let name = userState?.nome;
            
            setUserState({logado: false});

            navigate(`/logoff?username=${name}`);
        }
    }

    const farewellMessage = () => {
        return (
            <p className='logoff-message'>
                Até mais, {username}!!
            </p>
        );
    }

    const loadButton = () => {
        if (userState?.logado)
            return (<button className='logoff_button unselectable' onClick={performLogoff}>Confirmar logoff</button>);

        else if (username === null)
            return (<Link to='/login'><p className='link'>Você não está logado, deseja fazer isso agora?</p></Link>)
    }

    return (
        <div className='logoff-background'>
            <SimpleHeader />
            <div className='conteiner-middle-center'>
                <div className='item-logoff'>
                    <div className='logoff-container'>
                        {userState?.logado && <p className='logoff-message'>Já está indo embora, {userState.nome}? <FontAwesomeIcon icon={faSadTear} /> </p>}
                        {username !== null && farewellMessage()}
                        
                        {loadButton()}
                        
                        {username !== null && <Link to='/login'><p className='link'>Deseja logar novamente?</p></Link>}
                    </div>
                </div>
            </div>
        </div>
    );
}



export default Logoff;
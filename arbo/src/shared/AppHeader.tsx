import { useContext } from 'react';
import { SidebarContext, UserContext } from '../Context';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTree, faBars, faUser, faSignIn, faGrip, faBook, faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import { useWindowResize } from '../utils/customHooks'
import { Link } from 'react-router-dom';
import './AppHeader.css';
import { subscribe } from 'diagnostics_channel';

const NAME_SIZE_LIMIT = 15;

const sideBar = (logado : boolean, nome : string = "Pedro Henrique Vilela") => {
    if (nome.length > NAME_SIZE_LIMIT){
        nome = nome.substring(0, NAME_SIZE_LIMIT); // Limita o tamanho do nome
        nome = nome.trim(); // Remove espaços em branco do início e do fim
        nome += '...'; // Indica que há mais texto
    }

    return (
        <ul>
            <li>
                {!logado && 
                    <Link to='user'>
                    <p className="li_fa"><FontAwesomeIcon icon={faUser} id="icon_user"/></p>
                    <p className="li_text">  {nome} </p></Link>
                }
                
                {logado && 
                    <Link to='login'>
                    <p className="li_fa"><FontAwesomeIcon icon={faSignIn} id="icon_login"/></p>
                    <p className="li_text"> Entre </p></Link>
                }
            </li>
            <li><Link to='about'>
                <p className="li_fa"><FontAwesomeIcon icon={faGrip} id="icon_dash"/></p>
                <p className="li_text">  Dashboard</p></Link>
            </li>
            <li><Link to='about'>
                <p className="li_fa"><FontAwesomeIcon icon={faBook} id="icon_inventory"/></p>
                <p className="li_text">  Inventório Arbóreo</p></Link>
            </li>
            <li><Link to='cadastro_arboreo'>
                <p className="li_fa"><FontAwesomeIcon icon={faTree} id="icon_tree"/></p>
                <p className="li_text">  Cadastrar Árvore</p></Link>
            </li>
            {logado && 
                <li>
                    <Link to='logoff'>
                    <p className="li_fa"><FontAwesomeIcon icon={faArrowRightFromBracket} id="icon_leave"/></p>
                    <p className="li_text">  Sair</p></Link>
                </li>
            }
        </ul>
    );
}

const AppHeader = () => {
    const {userState, setUserState} = useContext(UserContext);

    const passUserState = () => {
        if (userState?.logado !== undefined)
            return userState?.logado;
    
        return false;
    }
    
    const { width } = useWindowResize();

    const {sidebarState, setSidebarState} = useContext(SidebarContext);

    return (
        <nav className='header-navbar'>
            <input type="checkbox" id="check" onClick={() => {if (setSidebarState != undefined) setSidebarState(true)}}/>
            <label htmlFor='check' defaultChecked className="checkbtn">
                <FontAwesomeIcon icon={faBars} />
            </label>
            <Link to='/'><label className="logo"><FontAwesomeIcon icon={faTree} /> Arbo <FontAwesomeIcon icon={faTree} /></label></Link>
            
            {sidebarState && sideBar(passUserState(), userState?.nome)}
        </nav>
    );
};


export default AppHeader;
import { useContext, useEffect } from 'react';
import { SidebarContext, UserContext, STD_USER_STATE } from '../Context';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTree, faBars, faUser, faSignIn, faGrip, faBook, faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import { useWindowResize } from '../utils/customHooks'
import { Link } from 'react-router-dom';
import { NAME_SIZE_LIMIT } from '../utils/appConstants';
import './AppHeader.css';

const sideBar = (logado : boolean, nome : string = "") => {
    if (nome.length > NAME_SIZE_LIMIT){
        nome = nome.substring(0, NAME_SIZE_LIMIT); // Limita o tamanho do nome
        nome = nome.trim(); // Remove espaços em branco do início e do fim
        nome += '...'; // Indica que há mais texto
    }

    return (
        <ul>
            <li>
                {logado && 
                    <Link to='user'>
                    <p className="li_fa"><FontAwesomeIcon icon={faUser} id="icon_user"/></p>
                    <p className="li_text">  {nome} </p></Link>
                }
                
                {!logado && 
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

    useEffect(() => {
        // Function to run when the component is mounted (page is loaded)
        let loginSessionString : string | null = localStorage.getItem('loginSession');
        
        if (setUserState !== undefined) {
            // if (loginSessionString !== null) {
            //     setUserState(STD_USER_STATE);
            //     let loginSession : user_session = JSON.parse(loginSessionString);

            //     // Verifica se a sessão existe e se ela não expirou
            //     if (loginSession.lastLogin == undefined || 
            //         loginSession.lastLogin - Math.floor(Date.now() / 1000) > TIME_SESSION_LIMIT)
            //         setUserState(STD_USER_STATE);

            //     else {
            //         setUserState(loginSession);
            //     }
            // }
            
            // else
            //     setUserState(STD_USER_STATE);
        }
        
        
        
        console.log(loginSessionString);

        // Clean-up function (optional)
        return () => {
          // Clean-up code here (if needed)
          console.log('Component is unmounted!');
        };
      }, []);


    const passUserState = () => {
        if (userState?.logado !== undefined)
            return userState?.logado;
    
        return false;
    }
    
    const { width } = useWindowResize();

    const {sidebarState, setSidebarState} = useContext(SidebarContext);

    return (
        <nav className='header-navbar'>
            <input type="checkbox" id="check" onClick={() => {if (setSidebarState !== undefined) setSidebarState(true)}}/>
            <label htmlFor='check' defaultChecked className="checkbtn">
                <FontAwesomeIcon icon={faBars} />
            </label>
            <Link to='/'><label className="logo"><FontAwesomeIcon icon={faTree} /> Arbo <FontAwesomeIcon icon={faTree} /></label></Link>
            
            {sidebarState && sideBar(passUserState(), userState?.nome)}
        </nav>
    );
};


export default AppHeader;
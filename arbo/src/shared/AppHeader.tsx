import { useState, useContext } from 'react';
import { UserContext } from '../Context';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTree } from '@fortawesome/free-solid-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faGrip } from '@fortawesome/free-solid-svg-icons';
import { faBook } from '@fortawesome/free-solid-svg-icons';
import { faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import { useWindowResize } from '../utils/customHooks'
import { Link } from 'react-router-dom';
import './AppHeader.css';

const sideBar = () => {
    return (
        <ul>
            <li><Link to='user'>
                <p className="li_fa"><FontAwesomeIcon icon={faUser} id="icon_user"/></p>
                <p className="li_text">  Nome Completo</p></Link>
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
            <li><Link to='about'>
                <p className="li_fa"><FontAwesomeIcon icon={faArrowRightFromBracket} id="icon_leave"/></p>
                <p className="li_text">  Sair</p></Link>
            </li>
        </ul>
    );
}

const AppHeader = () => {
    const { width } = useWindowResize();

    const [sideBarShow, toggleSideBar] = useState(false);

    return (
        <nav className='header-navbar'>
            <input type="checkbox" id="check" onClick={() => toggleSideBar(true)}/>
            <label htmlFor='check' defaultChecked className="checkbtn">
                <FontAwesomeIcon icon={faBars} />
            </label>
            <Link to='/'><label className="logo"><FontAwesomeIcon icon={faTree} /> Arbo <FontAwesomeIcon icon={faTree} /></label></Link>
            
            {sideBarShow && sideBar()}
        </nav>
    );
};


export default AppHeader;
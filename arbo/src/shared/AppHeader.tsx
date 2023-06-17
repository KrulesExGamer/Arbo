import { useState, useContext } from 'react';
import { UserContext } from '../Context';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTree, faBars } from '@fortawesome/free-solid-svg-icons';
import { useWindowResize } from '../utils/customHooks'
import { Link } from 'react-router-dom';
import './AppHeader.css';

const sideBar = () => {
    return (
        <ul>
            <li><Link to='login'>Login</Link></li>
            <li><Link to='about'>Sobre</Link></li>
            <li><Link to='signup'>Cadastrar</Link></li>
            <li><Link to='contatos'>Contatos</Link></li>
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
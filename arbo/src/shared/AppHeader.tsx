import { useContext } from 'react';
import { UserContext } from '../Context';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTree } from '@fortawesome/free-solid-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { useWindowResize } from '../utils/customHooks'
import { Link } from 'react-router-dom';
import './AppHeader.css';

const AppHeader = () => {
    const { width } = useWindowResize();

    return (
        <nav className='header-navbar'>
            <input type="checkbox" id="check" defaultChecked/>
            <label defaultChecked className="checkbtn">
                <FontAwesomeIcon icon={faBars} />
            </label>
            <Link to='/'><label className="logo"><FontAwesomeIcon icon={faTree} /> Arbo <FontAwesomeIcon icon={faTree} /></label></Link>
            <ul>
                <li><Link to='login'>Login</Link></li>
                <li><Link to='sobre'>Sobre</Link></li>
                <li><Link to='signup'>Cadastrar</Link></li>
                <li><Link to='contatos'>Contatos</Link></li>
            </ul>
        </nav>
    );
};


export default AppHeader;
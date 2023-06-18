import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTree } from '@fortawesome/free-solid-svg-icons';
import './AppFooter.css';

const AppFooter = () => {
    return (
        <footer className='AppFooter'>
            <label><FontAwesomeIcon icon={faTree} /> Arbo Project <FontAwesomeIcon icon={faTree} /></label>
        </footer>
    );
};


export default AppFooter;
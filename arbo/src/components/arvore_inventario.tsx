import { useState } from 'react';
import { useContext } from 'react';
import { UserContext } from '../Context';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './arvore_inventario.css';

const arvore = (props:{
    nome:string;
    endereco:string;
    descricao: string;
    especie:string;
    img:any;
}) =>{
    return <Link to="/">
        <div>
            <div><img></img></div>
            <div>
                <div className="tree_name"></div>
                <div className="tree_address"></div>
                <div className="tree_description"></div>
            </div>
        </div>
    </Link>
};

export default arvore;
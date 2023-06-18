import { useState } from 'react';
import { useContext } from 'react';
import { UserContext } from '../Context';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTree } from '@fortawesome/free-solid-svg-icons';
import './Cadastrar_Arvore.css';

const Cadastro_Arboreo = () => {
    return <div id="cadastro_arboreo">
        <div>Nome: <input type="text" placeholder='Nome da Árvore'></input></div>
        <div>Localização <input type="text" placeholder='Localização'></input></div>
        <div>Descrição <input type="text" placeholder='Descrição'></input></div>
        <div>Situação de Risco <input type="text" placeholder='Situação de risco'></input></div>
    </div>
}

export default Cadastro_Arboreo;
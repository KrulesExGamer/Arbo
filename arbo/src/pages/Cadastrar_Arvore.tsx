import { useState } from 'react';
import { useContext } from 'react';
import { UserContext } from '../Context';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTree } from '@fortawesome/free-solid-svg-icons';
import './Cadastrar_Arvore.css';

const Cadastro_Arboreo = () => {
    return <div id="cadastro_arboreo">
        <div><p>Nome:</p> <input type="text" placeholder='Nome da Árvore'></input></div>
        <div><p>Localização:</p> <input type="text" placeholder='Localização'></input></div>
        <div><p>Descrição:</p> <input type="text" placeholder='Descrição'></input></div>
        <div><p>Situação de Risco:</p> <textarea  placeholder='Situação de risco' className="long_text_input"/></div>
    </div>
}

export default Cadastro_Arboreo;
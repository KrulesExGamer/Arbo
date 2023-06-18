import { useState } from 'react';
import { useContext } from 'react';
import { UserContext } from '../Context';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import './userPage.css';

const UserProfile = () => {
    return <div id="user_profile">
        <div><p>Nome:</p> <input type="text" placeholder='Nome do Usuário'></input></div>
        <div><p>nUSP:</p> <input type="number" ></input></div>
        <div><p>Email:</p> <input type="text" placeholder='E-mail'></input></div>
        <div><p>Telefone:</p> <input type="tel" placeholder='(NN) XXXXX-YYYY' /></div>
        <div id="alter_user">Alterar Usuário</div>
    </div>
}

export default UserProfile;
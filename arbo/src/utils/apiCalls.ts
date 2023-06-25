import { STD_USER_STATE } from "../Context";
import { TIME_SESSION_LIMIT } from "./appConstants";
import { user_session } from "./types";

export function recoverSession() {
    let loginSessionString : string | null = localStorage.getItem('loginSession');
        
    if (loginSessionString !== null) {
        let loginSession : user_session = JSON.parse(loginSessionString);

        // Verifica se a sessão não existe ou se ela expirou
        if (loginSession.lastLogin === undefined || 
            loginSession.lastLogin - Math.floor(Date.now() / 1000) > TIME_SESSION_LIMIT)
            return null;

        else 
            return loginSession;
    }
    
    else
        return null;
}


export function performLogin(name : string, password : string) {
    if ((name.toLowerCase() === 'pedro' || name === 'pedro@mail.com') && password === '123')
    {
        let conta : user_session = {logado: true, nome: 'Pedro', email: 'pedro@mail.com', lastLogin: Date.now() / 1000}
        return conta;
    }

    else 
    {
        let conta : user_session = {logado: false}
        return conta;
    }
}

export function performSignup(name : string, email : string, password : string) {
    if (name.toLowerCase() !== 'pedro' && email.toLowerCase() !== 'pedro@mail.com')
    {
        let conta : user_session = {logado: true, nome: name, email: email, lastLogin: Date.now() / 1000};
        return conta;
    }

    else 
    {
        let conta : user_session = {logado: false};
        return conta;
    }
}
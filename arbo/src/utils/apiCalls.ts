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
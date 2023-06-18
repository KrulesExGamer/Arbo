import { user_session } from "./types";

export function recoverSession() {
    let loginSessionString : string | null = localStorage.getItem('loginSession');
        
    if (loginSessionString !== null) {
        // setUserState(STD_USER_STATE);
        let loginSession : user_session = JSON.parse(loginSessionString);

        // Verifica se a sessão existe e se ela não expirou
        if (loginSession.lastLogin == undefined || 
            loginSession.lastLogin - Math.floor(Date.now() / 1000) > TIME_SESSION_LIMIT)
            setUserState(STD_USER_STATE);

        else {
            setUserState(loginSession);
        }
    }
    
    else
        setUserState(STD_USER_STATE);
}
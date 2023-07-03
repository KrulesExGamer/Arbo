// Importação dos módulos necessários para o contexto
import { createContext, useContext, useReducer } from 'react'

// Criação das chaves e valores iniciais
const initialState = {
    auth: false,
    token: '',
    nusp: '',
    id: '',
    name: '',
    email: '',
    admin: false
}

// Criação do Contexto de Autenticação
const authContext = createContext(initialState)

export function reducer(state, action) {

    switch (action.type) {

        // Realiza o login no site
        case 'login':

            localStorage.setItem('USPArboreo', action.token)

            return {
                auth: true,
                token: action.token,
                nusp: action.nusp,
                id: action.id,
                name: action.name,
                email: action.email,
                admin: action.admin
            }

        // Usado quando o usuário clica em logout no menu
        // dropdown.
        case 'logout':

            localStorage.removeItem('USPArboreo', action.token)
            
            return initialState

        // Usado quando o usuário faz update dos dados
        // do profile
        case 'loginUpdate':
            
            return {
                auth: true,
                token: action.token,
                nusp: action.nusp,
                id: action.id,
                name: action.name,
                email: action.email,
                admin: action.admin
            }

        default:
            throw new Error()
    }
}

// Criação do Provedor de Contexto de Autenticação
export function AuthProvider({ children }) {
    const [authed, dispatch] = useReducer(reducer, initialState)
    return <authContext.Provider value={[authed, dispatch]}>{children}</authContext.Provider>
}

// Criação do Consumidor de Contexto de Autenticação
export default function AuthConsumer() {
    return useContext(authContext)
}
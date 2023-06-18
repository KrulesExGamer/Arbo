export interface user_db {
    email : string;
    nusp : string;
    password : string;
}

export interface arvore_db {
    id : number;
    especie : string;
    nome_comum : string;
    estado : string;
    naturalidade : string; // Exótico ou Nativo
    altura : number;
    diametro_peito : number;
    categoria_ameaca : number;
    coordenadas : [number, number];
    referencia : string;
}

export interface riscos_db {
    estado_casca : string;
    presenca_coroa : string;
    risco_geologico : string;
    ameaca_vizinhanca : string;
    comentatio : string;
    avaliacao : string;
    outros : [];
}

export interface profissional_db {
    carteira_profissional : string;
    nome : string;
    profissao : string;
}

export interface user_session {
    logado : boolean;
    nome? : string;
    email? : string;
    funcionario? : boolean;
}
export interface user {
    email : string;
    nusp : string;
    password : string;
}

export interface arvore {
    id : number;
    especia : string;
    nome_comum : string;
    estado : string;
    naturalidade : string; // Exótico ou Nativo
    altura : number;
    diametro_peito : number;
    categoria_ameaca : number;
    coordenada : [number, number];
}

export interface riscos {
    estado_casca : string;
    presenca_coroa : string;
    risco_geologico : string;
    ameaca_vizinhanca : string;
    comentatio : string;
    avaliacao : string;
    outros : [];
}

export interface profissional {
    carteira_profissional : string;
    nome : string;
    profissao : string;
}
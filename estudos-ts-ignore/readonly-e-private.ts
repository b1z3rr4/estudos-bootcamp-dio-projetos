interface Cachorro {
    nome: string;
    idade : number;
    parqueFav?: string;
}

type CachorroOnlyRead = {
    +readonly [K in keyof Cachorro]-?: Cachorro[K];
}

class MeuCachorro implements CachorroOnlyRead {
    idade;
    nome;
    parqueFav;

    constructor(nome, idade){
        this.nome = nome;
        this.idade = idade;
    }
}

const cao = new MeuCachorro('Dod', 5);

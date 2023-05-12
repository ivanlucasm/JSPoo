export default class User{

    #nome
    #email
    #nascimento
    #role
    #ativo
    constructor(nome, email, nascimento, role, ativo = true){
        this.#nome = nome; 
        this.#email = email;
        this.#nascimento = nascimento;
        this.#role = role || 'estudante';
        this.#ativo = ativo;
    }

    exibirInfos(){
        return `${this.#nome} | ${this.#email} | ${this.#nascimento} | ${this.#role} | ${this.#ativo}`
    }
}

// const novoUser = new User('Ivan', 'ivan@email.com', '1997-05-07')

// console.log(novoUser.exibirInfos())

// console.log(User.prototype.isPrototypeOf(novoUser))
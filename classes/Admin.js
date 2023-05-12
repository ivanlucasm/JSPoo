import User from "./User.js"

export default class Admin extends User{

    constructor(nome, email, nascimento, role = 'admin', ativo = true){
        super(nome, email, nascimento, role, ativo)
    }

     criarCurso(descricao) {
        console.log('Curso Criado! Nome: ', descricao)
        return descricao;
    }
}
// const novoAdmin = new Admin('Gabriel', 'gab@email.com', '2023-04-02');

// console.log(novoAdmin)
// console.log(novoAdmin.exibirInfos())

// console.log(novoAdmin.criarCurso('ABAP'))
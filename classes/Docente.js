import User from "./User.js";

export default class Docente extends User {
    constructor (nome, email, nascimento, role = 'docente', ativo = true){
            super(nome, email, nascimento, role, ativo);
    }

    aprovaEstudante (estudante, curso){
        return `Estudante ${estudante} aprovado no curso ${curso}`
    }
}


// const novoDocente = new Docente('Wash', 'wash@bemol', '2022-04-02');
// console.log(novoDocente)

// console.log(novoDocente.exibirInfos())
// console.log(novoDocente.aprovaEstudante('Ivan', 'Sistemas'))

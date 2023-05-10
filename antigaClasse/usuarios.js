const user = {
    nome: "Ivan",
    email: "ivan@email.com",
    nascimento: "2021/03/04",
    role: "estudante",
    ativo: true,

    exibirDados: function(){ 
        console.log(this.nome, this.email)
    } 
}

// user.exibirDados()

// const exibir = function (){
//     console.log(this.nome)
// };

// const exibirNome = exibir.bind(user);

// exibirNome();

const admin = { 
    nome: "Mariana",
    email: "mariana@email.com",
    role: "admin",
    criarCurso(){
        console.log('curso criado')
    }
}


Object.setPrototypeO(admin, user)

admin.criarCurso();
admin.exibirDados();
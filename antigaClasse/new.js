function User(nome, email){
    this.nome = nome
    this.email = email

    this.exibirInfos = function(){
        return `${this.nome}, ${this.email}`
    }
}


//const novoUser = new User('Ivan', 'ivan@eemail.com')
//console.log(novoUser.exibirInfos())


// function Admin(role){
//     User.call(this, 'Ivan', 'email@email.com')

//     this.role= role || 'estudante';

// }

// Admin.prototype = Object.create(User.prototype)
// const novoUser = new Admin('admin')

// console.log(novoUser.exibirInfos())
// console.log(novoUser.role)

const user = { 

    init: function(nome,email){
        this.nome = nome;
        this.email = email;
    },

    exibirInfos: function() {
        return this.nome + ' ' + this.email;
    }
}
const novoUser = Object.create(user)

novoUser.init('Ivan', 'ivan@email.com')

console.log(novoUser.exibirInfos())


import User from "./classes/User.js"
import Admin from "./classes/Admin.js"
import Docente from "./classes/Docente.js"

let novoUser = new User('Teste', 'teste@email.com', '2023-05-12');
console.log(novoUser.exibirInfos());



novoUser.nome= 'Teste2';

console.log(novoUser.exibirInfos())
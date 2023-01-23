const dados = require("./cliente.json");

//  a funcao require puxa um dado de algum lugar

console.log(dados)
console.log(typeof dados)

//  transforma o objeto em uma string 

const clienteEmString = JSON.stringify(dados);

console.log(clienteEmString);
console.log(typeof clienteEmString);

//   como eh uma string nao podemos interagir da mesma forma que interagimos com um objeto

//  mudar novamente para objeto 

const objetoCliente = JSON.parse(clienteEmString);

console.log(objetoCliente);
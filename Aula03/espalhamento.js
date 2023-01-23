const cliente = {
    nome: "Joao",
    idade: 24,
    email: "joao@firma.com",
    telefone: ["1155555550", "1144444440"],
  };
  
  cliente.enderecos = [{
    rua: "R. Joseph Climber",
    numero: 1337,
    apartamento: true,
    complemento: "ap 934",
  }];

  function ligaParaCliente(telefoneComercial, telefoneResidencial) {
    console.log(`Ligando para telefone comercial ... ${telefoneComercial}`)
    console.log(`Ligando para telefone residencial ... ${telefoneResidencial}`)
  }

//  ligaParaCliente(cliente.telefone[0], cliente.telefone[1])

//  usando o spread operator

ligaParaCliente(...cliente.telefone);

// const encomenda = {
//     destinatario: cliente.nome,
//     rua: cliente.enderecos[0].rua,
//     numero: cliente.enderecos[0].numero,
//     apartamento: cliente.enderecos[0].apartamento,
//     complemento: cliente.enderecos[0].complemento,
// };

const encomenda = {
    destinatario: cliente.nome,
    ...cliente.enderecos[0]
};

console.log(encomenda);
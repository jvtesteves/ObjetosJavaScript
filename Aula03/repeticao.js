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

  // Como percorrer um Objeto

  for (let chave in cliente){
    // faremos um filtro das informacoes que queremos que sejam mostradas
    let tipo = typeof cliente[chave];
    if (tipo !== "object" && tipo !== "function")
    console.log(`A chave ${chave} tem valor ${cliente[chave]}!`);
  }
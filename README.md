## DESAFIO DESENVOLVEDOR

Projeto criado para o [desafio](https://github.com/funcional-health/challenge/), referente a vaga de Desenvolvedor, da Funcional - Health Tech.


## AUTOR

* **Renan Queiroz** - [renanq](https://github.com/renanq)


## Tecnologias Utilizadas

- [Node.js](https://nodejs.org/) backend
- [MongoDB - Conta na Nuvem](https://www.mongodb.com/cloud/atlas/) Banco de Dados
- [Git](https://git-scm.com/) Versionamento


## INSTALAÇÃO E CONFIGURAÇÃO

- Ter uma máquina com Node.js instalado
- Baixar o repositorio criado no Github [chalenge](https://github.com/renanq/challenge)
- Configurar no backend o caminho do banco de dados (já configurado corretamente), no arquivo /src/server.js
- Configurar o endereço para testes da aplicação (Está configurada para http://localhost:4000), no arquivo /src/server.js
- Rodar o comando node /src/server.js
- Acessar o endereço http://localhost:4000 para realizar as requisições


## GraphQL - Queries Desenvolvidas

Exemplos de entrada e saída das queries desenvolvidas

**Criação de conta**

-Entrada: 
```
mutation {
  createConta(
    numero: 62153, 
    saldo: 46.19, 
    cliente: "Renato Farias"
  ){
    id
  }
}
```

-Saída:
```
{
  "data": {
    "createConta": {
      "id": "5e697d20ca205032ecc17eb5"
    }
  }
}
```

**Listar Todas as Contas**

- Entrada:
```
{
 contas{
    id
    numero
    saldo
    cliente
  }
}
```

-Saída:
```
{
  "data": {
    "contas": [
      {
        "id": "5e6979feca205032ecc17eb3",
        "numero": "40401",
        "saldo": 1230.46,
        "cliente": "Renan Queiroz"
      },
      {
        "id": "5e697ad1ca205032ecc17eb4",
        "numero": "98250",
        "saldo": 345.23,
        "cliente": "Angela Maria"
      }
    ]
  }
}
```

**Dados de Uma Determinada Conta**

- Entrada:
```
{
  conta(numero: 40401){
    id
    numero
    saldo
    cliente
  }
}
```

- Saída:
```
{
  "data": {
    "conta": {
      "id": "5e6979feca205032ecc17eb3",
      "numero": "40401",
      "saldo": 1230.46,
      "cliente": "Renan Queiroz"
    }
  }
}
```

**Apenas Saldo de Uma Determinada Conta**

- Entrada:
```
{
  conta(numero: 40401){
    saldo
  }
}
```

- Saída:
```
{
  "data": {
    "conta": {
      "saldo": 1230.46
    }
  }
}
```

**Depositar em uma conta**

- Entrada:
```
mutation{
  depositar(numero: 40401, valor: 60.00){
    saldo
  }
}
```
- Saída:
```
{
  "data": {
    "depositar": {
      "saldo": 500
    }
  }
}
```

**Sacar de uma conta**

- Entrada:
```
mutation{
  sacar(numero: 98250, valor: 120){
    saldo
  }
}
```

-Saída:
```
{
  "data": {
    "sacar": {
      "saldo": 105
    }
  }
}
```

**Sacar de uma conta sem saldo**

- Entrada:
```
mutation {
  sacar(numero: 98250, valor: 300) {
    saldo
  }
}
```

- Saída:
```
{
  "data": {
    "sacar": null
  },
  "errors": [
    {
      "message": "Saldo Insuficiente",
      "locations": [
        {
          "line": 2,
          "column": 3
        }
      ],
      "path": [
        "sacar"
      ]
    }
  ]
}
```


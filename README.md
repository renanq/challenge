## DESAFIO DESENVOLVEDOR

Projeto criado para o desafio, referente a vaga de Desenvolvedor, da Funcional - Health Tech.

## AUTOR

* **Renan Queiroz** - [renanq](https://github.com/renanq)

## Tecnologias Utilizadas
- [Node.js](https://nodejs.org/) backend
- [MongoDB - Conta na Nuvem](https://www.mongodb.com/cloud/atlas/) Banco de Dados
- [Git](https://git-scm.com/) Versionamento

## INSTALAÇÃO E CONFIGURAÇÃO

- Ter uma máquina com Node.js instalado
- Baixar o repositorio criado no Github [desafio-folha-dirigida](https://github.com/renanq/desafio-folha-dirigida)
- Configurar no backend o caminho do banco de dados (já configurado corretamente), no arquivo /src/server.js
- Configurar o endereço para testes da aplicação (Está configurada para http://localhost:4000), no arquivo /src/server.js
- rodar o comando node /src/server.js
- acessar o endereço http://localhost:4000

## GraphQL - Queries criadas

Exemplos de entrada e saída

### Criação de conta
-Entrada: 
mutation {
  createConta(
    numero: 62153, 
    saldo: 46.19, 
    cliente: "Renato Farias"
  ){
    id
  }
}
-Saída:
{
  "data": {
    "createConta": {
      "id": "5e697d20ca205032ecc17eb5"
    }
  }
}

### Listar Todas as Contas
- Entrada:
{
 contas{
    id
    numero
    saldo
    cliente
  }
}
-Saída:
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

### Dados de Uma Determinada Conta
- Entrada:
{
  conta(numero: 40401){
    id
    numero
    saldo
    cliente
  }
}
- Saída:
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

### Apenas Saldo de Uma Determinada Conta
- Entrada:
{
  conta(numero: 40401){
    saldo
  }
}
- Saída:
{
  "data": {
    "conta": {
      "saldo": 1230.46
    }
  }
}

### Depositar em uma conta


### Sacar de uma conta


### Sacar de uma conta sem saldo

## Sobre o Desafio 

Você deverá escolher um dos links abaixo e seguir as instruções:

* [PHP](/php.md)
* [Node.js](/node.md)
* [C#](/csharp.md)

Nós recomendamos que você tente manter o seu código o mais simples possível.

---

Ao finalizar o desafio, envie o seu código para um novo repositório público do GitHub. Por favor, **não se esqueça** de providenciar uma pequena documentação de como levantar e testar o seu projeto.

Por fim, envie o link para o seu repositório do Github para um dos e-mails abaixo: 

- **Rio de Janeiro:** rfilizzola@funcionalcorp.com.br (Renato Filizzola)
- **São Paulo:** flima@funcionalcorp.com.br (Flavio Lima)
- **Chapecó:** aquinot@funcionalcorp.com.br(Alan Quinot)

Se você precisar de qualquer informação adicional ou esclarecimento, você pode nos contatar pelos e-mails acima ou abrir uma nova issue neste repositório do GitHub.

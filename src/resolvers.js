const Conta = require("./Conta");

module.exports = {
  Query: {
    contas: () => Conta.find(),
    conta: (root, { numero }) => Conta.find({ numero })
  },

  Mutation: {
    createConta: (root, { numero, saldo, cliente }) => Conta.create({ numero, saldo, cliente })
  }
};
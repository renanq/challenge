const Conta = require("./Conta");
let newSaldo = 0;

module.exports = {
  Query: {
    contas: () => Conta.find(),
    conta: (root, { numero }) => Conta.findOne({ numero })
  },

  Mutation: {
    createConta: (root, { numero, saldo, cliente }) => Conta.create({ numero, saldo, cliente }),
    depositar: (root, { numero, valor }) => Conta.findOne({numero})
                                            .then(() => Conta.updateOne({numero},{$inc:{saldo : valor}}))
                                            .then(() => Conta.findOne({numero})),
    sacar: (root, { numero, valor }) => Conta.findOne({numero})
                                        .then((value) => newSaldo = value.saldo - valor)
                                        .then(result => { result < 0 
                                                        ? Promise.reject(new Error("Saldo Induficiente para realizar a operacao"))
                                                        : result})
                                        .then(() => Conta.updateOne({numero},{$set:{saldo: newSaldo}}))
                                        .then(() => Conta.findOne({numero}))
  },
}
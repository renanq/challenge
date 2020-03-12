const mongoose = require("mongoose");

const ContaSchema = new mongoose.Schema({
  numero: Number,
  saldo: Number,
  cliente: String
});

module.exports = mongoose.model("Conta", ContaSchema);
const { GraphQLServer } = require("graphql-yoga");
const path = require("path");
const resolvers = require("./resolvers");
const mongoose = require("mongoose");

mongoose.set('useFindAndModify', false);

mongoose.connect("mongodb+srv://graphql:101182@cluster0-7spmy.mongodb.net/test?retryWrites=true&w=majority", {
  useNewUrlParser: true,
  useUnifiedTopology: true
}, () => console.log("Banco de Dados MongoDB conectado!"));

const server = new GraphQLServer({
  typeDefs: path.resolve(__dirname, "schema.graphql"),
  resolvers
});

server.start(() => console.log("Servidor GraphQL rodando na porta 4000"));

module.exports = server;
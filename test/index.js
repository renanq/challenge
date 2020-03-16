var server = require("../src/server");
var chai = require("chai");
var chaiHttp = require("chai-http");
var should = require("should");
var request = require("request");
var expect = chai.expect;
chai.use(chaiHttp);

describe("GraphQL testes", function(){

    it("Deve retornar a informação de saldo da conta", function(done){
        chai.request("server")
            .post("/")
            .send({ query: '{conta(numero: 40401){ saldo }}'})
            .end(function(err, res, body){
                //sucesso na chamada 
                expect(res.statusCode).to.equal(200);
                //tem que retornar o saldo
                res.body.data.conta.should.have.property('saldo');
                done();
        });
        done();
    });

    it("Deve retornar o Saldo com o deposito", function(done){
        chai.request("server")
            .post("/")
            .send({ mutation: '{depositar(numero: 40401, valor: 100){ saldo }}'})
            .end(function(err, res, body){
                //sucesso na chamada 
                expect(res.statusCode).to.equal(200);
                //tem que retornar o saldo
                res.body.data.conta.should.have.property('saldo');
                done();
        });
        done();
    });

    it("Deve retornar o Saldo com o saque", function(done){
        chai.request("server")
            .post("/")
            .send({ mutation: '{sacar(numero: 40401, valor: 10){ saldo }}'})
            .end(function(err, res, body){
                //sucesso na chamada 
                expect(res.statusCode).to.equal(200);
                //tem que retornar o saldo
                res.body.data.conta.should.have.property('saldo');
                done();
        });
        done();
    });

    it("Deve retornar id da conta criada", function(done){
        chai.request("server")
            .post("/")
            .send({ mutation: '{createConta(numero: 42471, saldo: 10, cliente: "Alberto"){ id }}'})
            .end(function(err, res, body){
                //sucesso na chamada 
                expect(res.statusCode).to.equal(200);
                //tem que retornar o saldo
                res.body.data.conta.should.have.property('id');
                done();
        });
        done();
    });

    it("Deve retornar erro de saldo insuficiente", function(done){
        chai.request("server")
            .post("/")
            .send({ mutation: '{sacar(numero: 42471, valor: 200){ saldo }}'})
            .end(function(err, res, body){
                //sucesso na chamada 
                expect(res.statusCode).to.equal(200);
                //tem que retornar o saldo
                res.body.data.conta.should.have.property('errors');
                done();
        });
        done();
    });

});
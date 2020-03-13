var server = require("../src/server");
var chai = require("chai");
var chaiHttp = require("chai-http");
var should = require("should");
var request = require("request");
var Conta = require("../src/Conta");
var expect = chai.expect;
chai.use(chaiHttp);
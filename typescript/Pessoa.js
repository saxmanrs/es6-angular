"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Pessoa = /** @class */ (function () {
    function Pessoa(nome, carro, carroPreferido) {
        this.carro = carro;
        this.carroPreferido = carroPreferido;
        this.nome = nome;
    }
    Pessoa.prototype.dizerNome = function () {
        return this.nome;
    };
    Pessoa.prototype.dizerCarroPreferido = function () {
        return 'Carro preferido é: ' + this.carroPreferido;
    };
    Pessoa.prototype.comprarCarro = function (carro) {
        return this.carro;
    };
    Pessoa.prototype.dizerCarroQueTem = function (carro) {
        return this.carro;
    };
    return Pessoa;
}());
exports.Pessoa = Pessoa;

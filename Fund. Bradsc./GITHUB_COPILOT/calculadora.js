//criar calculador para app bancario com deposito, saque e transferência
// considerar saldo inicial e limite de saque
class Calculadora {
    constructor(saldoInicial = 0, limiteSaque = 1000) {
        this.saldo = saldoInicial;
        this.limiteSaque = limiteSaque;
    }

    depositar(valor) {
        if (valor > 0) {
            this.saldo += valor;
            return `Depósito de R$${valor} realizado. Saldo atual: R$${this.saldo}`;
        } else {
            return 'Valor de depósito inválido.';
        }
    }

    sacar(valor) {
        if (valor > 0 && valor <= this.limiteSaque && valor <= this.saldo) {
            this.saldo -= valor;
            return `Saque de R$${valor} realizado. Saldo atual: R$${this.saldo}`;
        } else if (valor > this.limiteSaque) {
            return `Valor excede o limite de saque de R$${this.limiteSaque}.`;
        } else if (valor > this.saldo) {
            return 'Saldo insuficiente para saque.';
        } else {
            return 'Valor de saque inválido.';
        }
    }

    transferir(valor, contaDestino) {
        if (valor > 0 && valor <= this.saldo) {
            this.saldo -= valor;
            contaDestino.saldo += valor;
            return `Transferência de R$${valor} para ${contaDestino.nome} realizada. Saldo atual: R$${this.saldo}`;
        } else if (valor > this.saldo) {
            return 'Saldo insuficiente para transferência.';
        } else {
            return 'Valor de transferência inválido.';
        }
    }

    getSaldo() {
        return `Saldo atual: R$${this.saldo}`;
    }
}

// Exemplo de uso
const contaJoao = new Calculadora(500, 300);
const contaMaria = new Calculadora(1000, 500);

console.log(contaJoao.depositar(200)); // Depósito de R$200 realizado. Saldo atual: R$700
console.log(contaJoao.sacar(100));     // Saque de R$100 realizado. Saldo atual: R$600
console.log(contaJoao.transferir(200, contaMaria)); // Transferência de R$200 para Maria realizada. Saldo atual: R$400
console.log(contaJoao.getSaldo());      // Saldo atual: R$400
console.log(contaMaria.getSaldo());     // Saldo atual: R$1200  
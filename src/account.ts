export class Account {
    name: string;
    conta: string
    saldo: number

    constructor(name: string, conta: string, saldo: number){
        this.name = name
        this.conta = conta
        this.saldo = saldo
    }

    public viewAccount(conta: string): boolean {
        console.log(`Nome: ${this.name}\nConta: ${conta}\nSaldo: ${this.saldo}`);  
        return true
    }

    /**
     * saque
     */
    public saque(valor: number): string {
        if (this.saldo > 0 && this.saldo > valor) {
            this.saldo = this.saldo - valor
            this.viewAccount(this.conta)
            return 'Saque realizado.'
        }

        else{
            return 'Saque não realizado.'
        }
    }

    /**
     * realiza a operação de deposito
     * @param valor valor do deposito
     */
    public deposito(valor: number): string {
        if (valor > 0 && valor != 0) {
            this.saldo = this.saldo + valor
            this.viewAccount(this.conta)
            return 'Deposito realizado com sucesso.'
        }

        else {
            return 'Deposito não realizado.'
        }
    }

    /**
     * realiza a operação de tranferência
     * @param conta2 conta do receptor
     * @param valor valor da transferência
     */
    public transferir(conta2: Account, valor: number): string {
        if (valor > this.saldo || valor < 0) {
            return 'O valor é maior que seu saldo ou é um valor inválido.'
        }
        
        else{
            this.saldo = this.saldo - valor
            conta2.saldo = conta2.saldo + valor

            console.log(`Nome: ${this.name}\nConta: ${this.conta}\nSaldo: ${this.saldo}`);  

            console.log(`Nome: ${conta2.name}\nConta: ${conta2.conta}\nSaldo: ${conta2.saldo}`); 

            return 'Transferência realizada com sucesso.'
            
        }
    }
}
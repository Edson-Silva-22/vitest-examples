import { describe, expect, test } from 'vitest'
import { Account } from './account'

describe('account', () => {
    test('viewAccount', () => {
        const account = new Account('Alex', '12345', 200)
        expect(account.viewAccount(account.conta)).toBe(true)
    })

    //Testendo operação de saque
    test('saque', () => {
        const account = new Account('Alex', '123450', 200)
        expect(account.saque(50)).toBe('Saque realizado.')
    })

    //Testendo operação de deposito
    test('deposito', () => {
        const account = new Account('Alex', '123450', 200)
        expect(account.deposito(50)).toBe('Deposito realizado com sucesso.')
    })

    //Testendo operação de transferência
    test('transferência', () => {
        const account1 = new Account('Alex', '123450', 200)
        const account2 = new Account('Maria', '54321', 100)
        expect(account1.transferir(account2, 50)).toBe('Transferência realizada com sucesso.')
    })
})
import { expect, test, describe } from 'vitest'
import { Fibonacci } from './fibonacci'

describe('Sequência de Fibonacci', () => {
    test('Executavel', () => {
        const fibonacci = new Fibonacci()
        expect(fibonacci.fibonacci(2)).toBe(true)
    })
})
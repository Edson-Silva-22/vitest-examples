import { expect, test, describe } from 'vitest'
import Triangle from './triangle'

describe('Triangle', () => {
  test('triângulo equilátero: quando todos os lados são iguais', () => {
    const triangle = new Triangle(5, 5, 5)
    expect(triangle.isEquilateralTriangle()).toBe("Esse é um triângulo equilátero.")

    const triangle2 = new Triangle(4, 5, 5)
    expect(triangle2.isEquilateralTriangle()).toBe("Esse não é um triângulo equilátero.")

    const triangle3 = new Triangle(5, 5, 6)
    expect(triangle3.isEquilateralTriangle()).toBe("Esse não é um triângulo equilátero.")
  })

  test('triângulo escaleno: quando todos os lados são diferentes', () => {
    const triangle = new Triangle(3, 4, 5)
    expect(triangle.isScaleneTriangle()).toBe("Esse é um triângulo escaleno.")

    const triangle2 = new Triangle(5, 5, 5)
    expect(triangle2.isScaleneTriangle()).toBe("Esse não é um triângulo escaleno.")

    const triangle3 = new Triangle(4, 4, 4)
    expect(triangle3.isScaleneTriangle()).toBe("Esse não é um triângulo escaleno.")
  })

  test('triângulo isósceles: quando dois lados são iguais', () => {
    const triangle = new Triangle(3, 4, 4)
    expect(triangle.isIsoscelesTriangle()).toBe("Esse é um triângulo isósceles.")

    const triangle2 = new Triangle(5, 4, 3)
    expect(triangle2.isIsoscelesTriangle()).toBe("Esse não é um triângulo isósceles.")

    const triangle3 = new Triangle(5, 4, 6)
    expect(triangle3.isIsoscelesTriangle()).toBe("Esse não é um triângulo isósceles.")

  })
})
import { describe, expect, test } from 'vitest'
import { User } from './user'

describe('User', () => {
  test('Registro de usuário', () => {
    const user = new User('Alexandre', 'alexandre@gmail.com', '123456')
    expect(user.register()).toBe(true)
  })

  test('Verificação de campo de nome obrigatório', () => {
    const user = new User(undefined , 'alexandre@gmail.com', '123456')
    expect(user.register()).toBe(true)
  })

  test('Verificação de campo de email obrigatório', () => {
    const user = new User('Alex' , undefined, '123456')
    expect(user.register()).toBe(true)
  })

  test('Verificação de campo de nome obrigatório', () => {
    const user = new User('Alex' , 'alexandre@gmail.com', undefined)
    expect(user.register()).toBe(true)
  })

  test('Verificação de email único.', () => {
    const user = new User('Alex' , 'alex@gmail.com', '123456')
    expect(user.register()).toBe(true)
  })

  test('Verificação cadastro de um novo usuário.', () => {
    const user = new User('jose' , 'jose@gmail.com', '123456')
    expect(user.register()).toBe(true)
  })
})
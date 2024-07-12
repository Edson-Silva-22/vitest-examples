export class User{
  name: string | null;
  email: string | null;
  password: string | null;

  constructor(name?: string, email?: string, password?: string) {
    this.name = name  ? name : null;
    this.email = email ? email : null;
    this.password = password ? password : null;
  }

  public register() {
    const emailSalved = 'alex@gmail.com';
    const emailSalved2 = 'jose@gmail.com'
    const nameSalved = 'jose'
    
    if (!this.name) {
      console.log('O campo nome é obrigatório.')
      return false;
    }

    if (!this.email) {
      console.log('O campo email é obrigatório.')
      return false;
    }

    if (!this.password) {
      console.log('O campo senha é obrigatório.')
      return false;
    }

    if (this.email == emailSalved) {
      console.log('Email já foi cadastrado.')
      return false;
    }

    if (this.email == emailSalved2 && this.name == nameSalved) {
      console.log('Esse usuário já foi cadastrado.')
      return false;
    }

    console.log(`Nome: ${this.name}\nEmail: ${this.email}\nSenha: ${this.password}`);
    console.log('usuário registrado com sucesso.')

    return true;
  }
}
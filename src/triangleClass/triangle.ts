
class Triangle {
    a: number
    b: number
    c: number

    constructor( a:number,  b:number,  c:number) {
        this.a = a;
        this.b = b;
        this.c = c;
    }

    public isTriangle(){
        if (this.a < this.b + this.c && this.b < this.a + this.c && this.c < this.a + this.b) {
            return "Os valores informados podem forma um triângulo";
        }
    
        else{
            return "Os valores informados não podem forma um triângulo";
        }
    }

    public sumIsEqual(){
        if (this.a == this.b + this.c || this.b == this.a + this.c || this.c == this.a + this.b) {
            return "A soma de dois dos lados é igual ao terceiro.";
        }

        else {
            return "A soma de dois dos lados é diferente ao terceiro.";
        }
    }

    public sideZero(){
        if (this.a == 0 || this.b == 0 || this.c == 0) {
            return "Um dos valores é zero";
        }
    
        else {
            return "Todos os valores são diferentes de zero";
        }
    }

    public sideNegative(){
        if (this.a < 0 || this.b < 0 || this.c < 0) {
            return "Um dos valores é negativo";
        }
    
        else {
            return "Todos os valores são positivos";
        }
    }

    public allSideZero(){
        if (this.a == 0 && this.b == 0 && this.c == 0) {
            return "Todos os lados são iguais a zero";
        }

        else{
            return "Todos os lados são diferentes de zero";
        }
    }

    public valuesNotInt( n1: number,  n2: number,  n3: number){
        if (typeof n1 == 'number' && typeof n2 == 'number' && typeof n3 == 'number') {
            return "Todos os valores são números inteiros";
        }

        else {
            return "Um dos valores não é um número inteiro";
        }
    }

    // public paramsQuantity(...arguments: any[]){
    //     if (arguments.length == 3) {
    //         return "Número de entradas correto";
    //     }

    //     else {
    //         return "Número de entradas incorreto.";
    //     }
    // }

    public isScaleneTriangle(){
        if (this.isTriangle() == "Os valores informados podem forma um triângulo") {
            if (this.a != this.b && this.b != this.c && this.a != this.c) {
                return "Esse é um triângulo escaleno.";
            }
    
            else {
                return "Esse não é um triângulo escaleno.";
            }
        }

        else{
            return "Esse não é um triângulo escaleno.";
        }
    }

    public isEquilateralTriangle(){
        if (this.isTriangle() == "Os valores informados podem forma um triângulo") {
            
            if (this.a == this.b && this.b == this.c) {
                return "Esse é um triângulo equilátero.";
            }
    
            else {
                return "Esse não é um triângulo equilátero.";
            }
        }

        else {
            return "Esse não é um triângulo equilátero.";
        }
    }

    public isIsoscelesTriangle(){
        if (this.isTriangle() == "Os valores informados podem forma um triângulo") {
            
            if (this.isEquilateralTriangle() == "Esse não é um triângulo equilátero." && this.isScaleneTriangle() == "Esse não é um triângulo escaleno.") {
                return "Esse é um triângulo isósceles.";
            }
    
            else {
                return "Esse não é um triângulo isósceles.";
            }
        }

        else {
            return "Esse não é um triângulo isósceles.";
        }
    }
}

export default Triangle;
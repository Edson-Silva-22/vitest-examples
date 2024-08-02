export class Fibonacci{
    i: number
    a: number
    b: number
    n: number

    public fibonacci(n: number){
        this.i = 1
        this.a = 0
        this.b = 1
        this.n = n

        if (n > 1) {
            while (this.i < this.n){
                const temp = this.b
                this.b = this.b + this.a
                this.a = temp
                this.i = this.i + 1
            }
        }

        console.log(this.b)
        return true
    }
}
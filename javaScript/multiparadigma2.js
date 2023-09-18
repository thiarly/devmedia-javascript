class Calculadora extends Components {
    constructor(propos){
        super(propos);
        this.somar = this.somar.bind(this);
    }
    somar(n1, n2){
        return n1 + n2;
    }
}

console.log(new Calculadora().somar(10, 20));
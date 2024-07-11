export class Numero{
    constructor(numero){
        this.numero = numero
    }

    get numero(){
        return this._numero
    }

    set numero(n){
        this._numero = +n
    }

    parImpar(){
        if ((this.numero%2) == false){
            return "par"
        } 
        else{return "Impar"}

    }

}
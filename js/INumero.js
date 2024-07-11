export class INumero{

    leerNumero(){
        return prompt("Introducir número")
    }

    reporte(a,b){
        return `
        Número: ${a}
        <br> Calificación: ${b}
        
        `
    }
}
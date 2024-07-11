import { Numero } from "./Numero.js";
import { INumero } from "./INumero.js"


let INum = new INumero(),
    n = INum.leerNumero(),
    Num = new Numero(n)

salida = document.getElementById("salida")

salida.innerHTML = INum.reporte(n,Num.parImpar())



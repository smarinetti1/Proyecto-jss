//* Variables

let nombreCompleto = "Santino Marinetti";
let edad = 18;
let altura = 1.77;
const dni = 45084891;

console.log ("Hola, mi nombre es" + nombreCompleto + "y mi edad es" + edad)


//* Condicionales

    //! Tipos de operadores:  (!= = Distinto) (== Comun) (=== = Estricto)  (> = Mayor y >= = Mayor/igual) (< = Menor y <= Menor/igual)


let miNumero = 6;
if (miNumero == 6) {

    console.log ("si, mi numero vale 6")
}else{
    console.log ("No, mi numero no vale eso")
}


//* Bucles 

let contador = -10;
while(contador < 0) {
    console.log (contador);

    contador = contador + 1;
}

for(let i = 0; i < 20; i++) {
console.log (i);
}

let valorAlfajor = 150;
let valorChocolate = 300;
let valorFernet = 1200;
let valorGalletas = 220;


let mercado = prompt("Hola, bienvenido al Mercado Hermanos del sur ¿Que desea? \n1-alfajor. \n2-chocolate. \n3-Fernet 750cc. \n4-Galletas surtidas \n5-Presiona X para salir")
while (mercado != "X" && mercado != "x") {
    switch (mercado) {
        case "1":
            let cantidadAlfajor = parseInt(prompt("Cuantos alfajores desea llevar"));
            if (cantidadAlfajor <= 30 && cantidadAlfajor > 0) {
                valorAlfajor *= cantidadAlfajor;
                alert("El valor total de los alfajores es de " + valorAlfajor + "$" );
            }
            else if (cantidadAlfajor==0)
                {
                    alert("Elije una cantidad valida")
                }
            
            else {
                alert("No tenemos esa cantidad disponible")
            }
            break;
        case "2":

                let cantidadChocolate = parseInt(prompt("Cuantos chocolates desea llevar"));
                if ( cantidadChocolate <= 23 && cantidadChocolate > 0) {
                    valorChocolate *= cantidadChocolate
                    alert("El valor total de los chocolates es de " +  valorChocolate+ "$" );
                }
                else if (cantidadChocolate==0)
                    {
                        alert("Elije una cantidad valida")
                    }
                
                else {
                    alert("No tenemos esa cantidad disponible")
                }
                break;
        case "3":

                let cantidadFernet = parseInt(prompt("Cuantas botellas desea llevar"));
                if (cantidadFernet <= 8 && cantidadFernet > 0) {
                    valorFernet *= cantidadFernet
                    alert("El valor total del fernet es de " +  valorFernet+ "$" );
                }
                else if (cantidadFernet==0)
                    {
                        alert("Elije una cantidad valida")
                    }
                
                else {
                    alert("No tenemos esa cantidad disponible")
                }
                break;
        case "4":
                let cantidadGalletas = parseInt(prompt("Cuantos paquetes  desea llevar"));
                if (cantidadGalletas <= 52 && cantidadGalletas > 0) {
                    valorGalletas *= cantidadGalletas
                    alert("El valor total de las galletas es de " + valorGalletas + "$" );
                }
                else if (cantidadGalletas==0)
                    {
                        alert("Elije una cantidad valida")
                    }
                
                else {
                    alert("No tenemos esa cantidad disponible")
                }
                break;
            default:
                alert("Elija una opcion valida")
                break;
    }

        valorAlfajor = 150;
        valorChocolate = 300;
        valorFernet = 1200;
        valorGalletas = 220;


    mercado = prompt("Hola, bienvenido al Mercado Hermanos del sur ¿Que desea? \n1-alfajor. \n2-chocolate. \n3-Fernet 750cc. \n4-Galletas surtidas \n5-Presiona X para salir")
}
// class Producto {
//     constructor(nombre,tipo,precio,stock,id){
// this.nombre = nombre;
// this.tipo = tipo;
// this.precio = parseFloat(precio);
// this.stock = parseInt(stock);
// this.id = id;
//     }

// asignarId(array){
//     this.id = array.length;
// }    
// }

// const Productos=[
// new Producto("Alfajor","golosina",150,30,1),
// new Producto("Chocolate","golosina",280,25,2),
// new Producto("Yogur","lacteo",320,29,3),
// new Producto("Leche","lacteo",250,40,4),
// new Producto("Fanta","gaseosa",270,20,5),
// new Producto("Sprite","gaseosa",265,22,6),
// new Producto("Fideos","alimento",120,50,7),
// new Producto("Atun","alimento",99,44,8)
// ]



// let agregar = false; 

// for(let i = 2; i >= 0; i--){
//     let pedirId = prompt("Si es empleado por favor ingrese su numero de identificacion. Si no es el caso pulse X")
// if (pedirId == 1986) {
//     agregar = true;
//     break;
// }

// else if (pedirId.toUpperCase() == "X") {
//     alert("Perdon por la molestia, puede continuar");
//         break;
// }

// else {
//     if(i>=1){
//             alert("El numero de identificacion es incorrecto. Quedan "+i+ " intentos");
//     }
//     else{
//         alert("Se quedo sin intentos.");
//     }
// }
// }


// while(agregar){
//     let nuevoProducto = prompt("Si ingreso un nuevo producto al mercado, porfavor agreguelo a la base de datos, especificando: nombre,tipo,precio,stock, separados por (/). Si no desea agragar nada puede pulsar X para salir");


// if (nuevoProducto.toUpperCase() == "X") {
//     agregar = false;
//     break;
// }

// let info = nuevoProducto.split("/");
// console.log(info);
// const producto = new Producto(info[0],info[1],info[2],info[3],info[4]);

// Productos.push(producto);
// producto.asignarId(Productos);
// console.log(Productos);
// }

// let metodo = prompt("Elige la forma en la que se van a ver ordenados los productos: \n1 - Tipo de alimento \n2 - Precio (Mayor a Menor) \n3 - Precio (Menor a Mayor) \n4 - Stock disponible");

// function ordenar(metodo,array){

//     let arrayOrdenado = array.slice(0);

//     switch (metodo) {
//     case "1":
//             let tipoAlimento = arrayOrdenado.sort((a, b) => a.tipo.localeCompare(b.tipo));
//             return tipoAlimento;
        
//     case "2":
//             return arrayOrdenado.sort((a, b) => b.precio - a.precio);
        

//     case "3":
//             return arrayOrdenado.sort((a, b) => a.precio - b.precio);
    

//     case "4":
//             return arrayOrdenado.sort((a, b) => b.stock - a.stock);
        

//     default:
//         alert("Eige una opcion valida!")
//     }
// }

// function crearStringResultado(array){
//     let informacion="";

// array.forEach(Producto => {

//     informacion += "Nombre: " + Producto.nombre + "\nTipo: " + Producto.tipo + "\nPrecio: $" + Producto.precio + "\nStock disponible: " + Producto.stock + " unidades disponibles. \n\n"

// })    

// return informacion;
// }

// alert(crearStringResultado( ordenar(metodo, Productos)))




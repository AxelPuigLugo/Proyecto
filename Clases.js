/* function cliente (nombre,edad,domicilio){
    this.nombre = nombre; 
    this.edad = edad;
    this.domicilio = domicilio;
    this.saludar = function () {
        console.log(`Saludos ${this.nombre}!`)
    }
}
const cliente1 = new cliente ("Axel", 27, "Heroes Coacalco")
const cliente2 = new cliente ("Karen", 27, "Villa de las flores")

console.log (cliente1)

cliente2.saludar()

 */
/* 
const array = ["Axel",27,true,"Esta estudiando JS"];
for (let i = 0; i <= 3; i++) {
    console.log (array[i]);
    
} */

/* const usuario = ["Axel",27,true,"Esta estudiando JS"];

console.log (usuario.length) */
/* 
const productos = ["Modelo especial",25,"Cerveza"];

//TODO Forma de agregar un objeto al array

productos.push("IVA");

//TODO Forma de borrar objetos de un array 

productos.pop();


console.log (productos); 

 */
/* 
const nombres = ["Axel","Andre","Regina","Karen"];
/*

//TODO Eliminar elementos de un array de cualquier posicion

nombres.splice(1,2); 

//TODO Join une los elmentos de un array con el parametro indicado

console.log(nombres.join(", ")); */

//TODO Slice guarada parte de un array dentro de otro array nuevo
/* 
const nombres = ["Pedro","Rita","Axel","Andre","Regina"];

const masculinos = nombres.slice(3,5)

console.log(masculinos);
 */

//TODO Cargar datos y almacenarlos en un array 
/* 
const listaNombres = [];
let cantidad = 5;

do{
    let entrada = prompt ("Ingresar nombre");
    listaNombres.push(entrada.toUpperCase());
    console.log(listaNombres.length);
}while (listaNombres.length != cantidad) 
    const nuevaLista = listaNombres.concat(["Karen","Regina"]);

console.log(nuevaLista);

alert(nuevaLista.join("\n")); */

//TODO Eliminar cualquier elemento

const nombres = ['Axel'];

function nombre() {
    let i = nombres.indexOf(nombre);
    return console.log(i);
}
nombre('Axel');
//console.log(nombre('Axel'));
console.log(nombres.indexOf('Axel'))


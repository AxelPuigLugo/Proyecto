alert ("¡Bienvenido a la cerveceria Kaax!")

var volver = 0
var producto_1 = "Modelo Especial"
var producto_2 = "Negra Modelo"
var producto_3 = "Pacifico"
var producto_4 = "Stela Artois"
let producto 
let Unidad_de_medida
let cantidad
let valor_del_producto
let precio_final
let valor 
let orden = 0;

while (volver <=1){
    calculo_de_precios()
    volver = Number(prompt(`¿Desea agregar otra cosa al pedido?
1.Si
2.No`))
}

alert(`El valor total de la orden es $${orden}`)


function calculo_de_precios() {

    producto = Number(prompt (`El catalogo de productos es el siguiente...
                                    1.Modelo especial
                                    2.Negra Modelo
                                    3.Pacifico
                                    4.Stela Artrois
Indeque que producto desea comprar usando el numero`))

    Unidad_de_medida = Number(prompt(`Elija la unidad de medida de su producto
                                         1.Caja grande con 24 pza
                                         2.Caja chica con 12 pza
                                         3.Six con 6 pza
                                         4.Botella  1  pza`))

    cantidad = Number(prompt(`Ìngrese la contidad deseada del producto seleccionado`))

if (cantidad <1) {
    alert("La cantidad solicitada no es valida")
}

switch (producto) {
    case 1:
        valor_del_producto = 10
        console.log(`${producto_1}`)
        console.log (`Precio unitario $${valor_del_producto}`)
break;
    case 2:
        valor_del_producto = 20
        console.log(`${producto_2}`)
        console.log (`Precio unitario $${valor_del_producto}`)
break;
    case 3:
        valor_del_producto = 30
        console.log(`${producto_3}`)
        console.log (`Precio unitario $${valor_del_producto}`)
break;
    case 4:
        var valor_del_producto = 40
        console.log(`${producto_4}`)
        console.log (`Precio unitario $${valor_del_producto}`)
break;
    default:
        alert("Producto no valido")
break;
}
switch (Unidad_de_medida) {
    case 1:
        console.log(`${cantidad} Caja grande`)
        valor = valor_del_producto * 24
        console.log(`El precio por unidad de medida $${valor}`)
break;
    case 2:
        console.log(`${cantidad} Caja chica`)
        valor = valor_del_producto * 12
        console.log (`El precio por unidad de medida $${valor}`)
break;
    case 3:
        console.log(`${cantidad} Six`)
        valor = valor_del_producto * 6
        console.log (`El precio por unidad de medida $${valor}`)
break;
    case 4:
        console.log(`${cantidad} Botella`)
        valor = valor_del_producto 
        console.log (`El precio por unidad de medida $${valor}`)
break;
    default:
        alert("Unidad de medida no valida")
break;
}
precio_final = cantidad * valor
console.log(`Precio final $${precio_final}`)

orden += precio_final
alert (`El valor actual de la orden es $${orden}`)
return orden
}

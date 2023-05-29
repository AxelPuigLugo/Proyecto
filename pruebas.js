// Definición de los productos
var productos = [
    { nombre: 'Modelo especial', precio: 10 },
    { nombre: 'Negra modelo', precio: 15 },
    { nombre: 'Pacifico', precio: 20 },
    { nombre: 'Stela Artrois', precio: 25 }
  ];
  let carrito;
  let precioTotalCarrito;
  let seleccion;
  let productoSeleccionado;
  let unidadMedida;
  let cantidadPiezas;
  let unidadMedidaSeleccionada;
  let cantidadCajas;
  let cantidadCajasEntero;
  let precioTotalProducto;
  
  // Función principal
  function agregarAlCarrito() {
    carrito = []; // Array para almacenar los productos seleccionados
    precioTotalCarrito = 0; // Variable para almacenar el precio total del carrito
  
    while (true) {
      // Solicitar al usuario que elija un producto
     seleccion = Number(prompt(`Elija el producto de su preferencia...
      1.Modelo especial         $ 10
      2.Negra Modelo            $ 15
      3.Pacifico                      $ 20
      4.Stela Artrois               $ 25
Indeque que producto desea comprar usando el numero
Si desea terminar el pedido ingrese 0`));
  

      // Verificar si el usuario desea finalizar la selección
      if (seleccion === 0) {
        break;
      }
  
      // Verificar si la selección es válida
      if (seleccion >= 1 && seleccion <= productos.length) {
        // Obtener el producto seleccionado
        productoSeleccionado = productos[seleccion - 1];
  
        // Solicitar al usuario que elija la unidad de medida
        unidadMedida = prompt(`Elija la unidad de medida de su producto
        1.Caja grande con 24 pza
        2.Caja chica con 12 pza
        3.Six
        4.Botella`);
  
        // Definir la cantidad de piezas según la unidad de medida seleccionada
        
        switch (unidadMedida) {
          case '1':
            cantidadPiezas = 24;
            unidadMedidaSeleccionada = 'Caja de 24 piezas';
            break;
          case '2':
            cantidadPiezas = 12;
            unidadMedidaSeleccionada = 'Caja de 12 piezas';
            break;
          case '3':
            cantidadPiezas = 6;
            unidadMedidaSeleccionada = 'Six';
            break;
          case '4':
            cantidadPiezas = 1;
            unidadMedidaSeleccionada = 'Botella';
            break;
          default:
            cantidadPiezas = 0;
            unidadMedidaSeleccionada = 'Unidad de medida inválida';
            break;
        }
  
        // Verificar si la cantidad de piezas es válida
        if (cantidadPiezas > 0) {
          // Solicitar al usuario la cantidad de cajas a comprar
          cantidadCajas = Number(prompt('Ingrese la cantidad desea comprar:'));
  
          // Verificar si la cantidad de cajas es válida
          if ( cantidadCajas > 0) {
            // Calcular el precio total del producto
            precioTotalProducto = productoSeleccionado.precio * cantidadCajas * cantidadPiezas;
  
            // Agregar el producto al carrito
            carrito.push({
              producto: productoSeleccionado.nombre,
              precio: productoSeleccionado.precio,
              cantidadUnidadMedida: cantidadCajas,
              precioTotal: precioTotalProducto,
              unidadMedida: unidadMedidaSeleccionada
            });  
            // Actualizar el precio total del carrito
            precioTotalCarrito += precioTotalProducto;
            // Mostrar el precio actual de la orden
            alert(`El valor actual de la orden es $${precioTotalCarrito}`);
          } else {
            console.log('Cantidad de cajas inválida');
          }
        } else {
          console.log('Unidad de medida inválida');
        }
      } else {
        console.log('Selección inválida');
      }
    }












    // Mostrar el carrito de compras
    if (carrito.length > 0) {
      console.log('Carrito de compras:');
      for (var i = 0; i < carrito.length; i++) {
        console.log(`Producto: ${carrito[i].producto}`);
        console.log(`Precio: $${carrito[i].precio}`);
        console.log(`Unidad de medida: ${carrito[i].unidadMedida}`);
        console.log(`Cantidad de Cajas/six/botellas: ${carrito[i].cantidadUnidadMedida}`);
        console.log(`Precio total: $${carrito[i].precioTotal}`);
        console.log('---------------------------');
      }
      console.log(`Precio total del carrito: $${precioTotalCarrito}`);
    } else {
      console.log('Carrito de compras vacío.');
    }
  }
  
  // Llamar a la función principal
  agregarAlCarrito();

  
// Obtener todas las secciones del SPA
const sections = document.querySelectorAll('.spa-section');

// Variable para almacenar el valor total del carrito
let carrito = 0;

// Array para almacenar los productos en el carrito
const productosEnCarrito = [];

// Array para almacenar todas las categorías
const categorias = [];

// Función para mostrar una sección y ocultar las demás
function mostrarSeccion(seccionId) {
  sections.forEach((seccion) => {
    if (seccion.id === seccionId) {
      seccion.style.display = 'block';
    } else {
      seccion.style.display = 'none';
    }
  });
}

// Función para manejar el cambio de página
function cambiarPagina() {
  const hash = window.location.hash;

  // Si no hay hash, mostrar la primera sección por defecto
  if (!hash || hash === '#') {
    mostrarSeccion(sections[0].id);
    return;
  }

  // Mostrar la sección correspondiente al hash
  const seccionId = hash.substring(1);
  const seccion = document.getElementById(seccionId);
  if (seccion) {
    mostrarSeccion(seccionId);
  } else {
    // Si la sección no existe, mostrar la primera sección por defecto
    mostrarSeccion(sections[0].id);
  }
}

// Función para agregar un producto al carrito
function agregarAlCarrito(precio, producto, productId, imagen) {
  const cantidadInput = document.getElementById(`cantidad-${productId}`);
  const cantidad = parseInt(cantidadInput.value);

  if (cantidad <= 0) {
    Swal.fire({
      icon: 'error',
      title: 'Error',
      text: 'La cantidad debe ser mayor que cero',
    });
    return;
  }

  const subtotal = precio * cantidad;
  carrito += subtotal;
  productosEnCarrito.push({ producto, precio, cantidad, imagen });
  actualizarCarrito();
  Swal.fire({
    position: 'top-end',
    icon: 'success',
    title: 'Producto agregado al carrito!',
    showConfirmButton: false,
    timer: 1500
  });
}

function eliminarDelCarrito(precio, producto, cantidad) {
  const cantidadInput = document.getElementById(`cantidad-${producto}`);
  const cantidadEliminar = parseInt(cantidadInput.value);

  if (cantidadEliminar <= 0 || cantidadEliminar > cantidad) {
    Swal.fire({
      icon: 'error',
      title: 'Error',
      text: 'La cantidad a eliminar debe ser mayor que cero y menor o igual a la cantidad en el carrito',
    });
    return;
  }

  const subtotalEliminar = precio * cantidadEliminar;
  carrito -= subtotalEliminar;

  const index = productosEnCarrito.findIndex(item => item.producto === producto);
  if (index !== -1) {
    const item = productosEnCarrito[index];
    item.cantidad -= cantidadEliminar;

    if (item.cantidad <= 0) {
      productosEnCarrito.splice(index, 1);
    }
  }

  Swal.fire({
    position: 'top-end',
    icon: 'success',
    title: 'Producto eliminado del carrito!',
    showConfirmButton: false,
    timer: 1500
  });

  actualizarCarrito();
}

// Función para actualizar el carrito en el HTML
function actualizarCarrito() {
  const carritoListElement = document.getElementById('carrito-list');
  const carritoTotalElement = document.getElementById('carrito-total');

  carritoListElement.innerHTML = '';

  productosEnCarrito.forEach((item) => {
    const div = document.createElement('div');
    const subtotal = item.precio * item.cantidad;
    div.innerHTML = `
      <div class="carrito-item">
        <img src="${item.imagen}" alt="${item.producto}" class="carrito-item-img" style="width: 150px; height: 150px;">
        <div class="carrito-item-info">
          <p>${item.producto}<br>
          Precio: ${item.precio.toFixed(2)}<br>
          Cantidad: ${item.cantidad}  <br>
          Subtotal: $${subtotal.toFixed(2)}</p>
        </div>
        <input type="number" id="cantidad-${item.producto}" min="1" max="${item.cantidad}" value="1">
        <button class="btn btn-primary" onclick="eliminarDelCarrito(${item.precio}, '${item.producto}', ${item.cantidad})">Eliminar</button>
      </div>
    `;

    carritoListElement.appendChild(div);
  });

  carritoTotalElement.textContent = `Total: $${carrito.toFixed(2)}`;
}

// Función para obtener y agregar productos mediante una API
const product = document.querySelector('.prod');
const productList = document.getElementById('product-list');
const categoryBar = document.createElement('div');
categoryBar.id = 'category-bar';

const pedirprod = async () => {
  try {
    const resp = await fetch('https://fakestoreapi.com/products');
    const data = await resp.json();

    data.forEach((prod) => {
      const div = document.createElement('div');
      div.classList.add('col');
      div.classList.add('product-item');
      div.dataset.category = prod.category;
      div.innerHTML = `
        <div class="card" style="width: 18rem;">
          <img src="${prod.image}" class="card-img-top">
          <div class="card-body">
            <h5 class="title-prod">${prod.title}</h5>
            <p class="price-prod">$ ${prod.price.toFixed(2)}</p>
            <input type="number" id="cantidad-${prod.id}" min="1" value="1">
            <button class="btn btn-primary" onclick="agregarAlCarrito(${prod.price}, '${prod.title}', ${prod.id}, '${prod.image}')">Agregar al carrito</button>
          </div>
        </div>
      `;

      productList.appendChild(div);

      // Agregar categoría al array de categorías
      if (!categorias.includes(prod.category)) {
        categorias.push(prod.category);
      }
    });

    // Agregar botones de categoría
    const categoriasElement = document.getElementById('categorias');
    const allCategoryButton = document.createElement('button');
    allCategoryButton.textContent = 'Todos';
    allCategoryButton.classList.add('btn', 'btn-primary', 'me-2');
    allCategoryButton.addEventListener('click', () => {
      filtrarProductos('');
    });
    categoriasElement.appendChild(allCategoryButton);

    categorias.forEach((categoria) => {
      const button = document.createElement('button');
      button.textContent = categoria;
      button.classList.add('btn', 'btn-primary', 'me-2');
      button.addEventListener('click', () => {
        filtrarProductos(categoria);
      });
      categoriasElement.appendChild(button);
    });

    categoryBar.appendChild(categoriasElement);
    productList.parentElement.insertBefore(categoryBar, productList);

    product.textContent = 'Productos';
  } catch (error) {
    product.textContent = 'Error al cargar los productos';
    console.log(error);
  }
};

// Función para filtrar los productos por categoría
function filtrarProductos(categoria) {
  const productItems = document.querySelectorAll('.product-item');
  productItems.forEach((item) => {
    if (categoria === '' || item.dataset.category === categoria) {
      item.style.display = 'block';
    } else {
      item.style.display = 'none';
    }
  });
}


// Funcion para mostrar el formulario de validacion de pago
function mostrarFormularioPago() {
    const formularioPago = document.getElementById('formulario-pago');
    formularioPago.style.display = 'block';
  }
  
  function vaciarCarrito() {
    carrito = 0;
    productosEnCarrito.length = 0;
    actualizarCarrito();
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Pago realizado y carrito vaciado',
      showConfirmButton: false,
      timer: 1500
    });
  }
  
  

// Evento para cambiar de página cuando se cambia el hash en la URL
window.addEventListener('hashchange', cambiarPagina);

// Evento para cargar los productos cuando se carga la página
window.addEventListener('load', pedirprod);

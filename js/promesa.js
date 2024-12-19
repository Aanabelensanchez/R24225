document.addEventListener("DOMContentLoaded", () => { 
    var cardContainer = document.querySelector("#card-container");
    var cart = JSON.parse(localStorage.getItem("cart")) || []; // Inicializar el carrito desde el LocalStorage o vacío


    updateCartCount();


    fetch("https://fakestoreapi.com/products?limit=19")
        .then(response => response.json()) // Promesa que devuelve los datos en bruto y encabezados del JSON
        .then((data) => {
            var productos = data; // La API devuelve directamente un array de productos

            cardContainer.innerHTML = ""; // Limpiar el contenedor antes de agregar contenido

            // Recorrer los productos y crear las tarjetas
            productos.forEach((product) => {
                var cardDiv = document.createElement('div'); // Crear un elemento div
                cardDiv.className = 'col-md-4 d-flex align-items-stretch mb-3'; // Clase de Bootstrap para grillas y altura uniforme

                // Contenido de la tarjeta
                cardDiv.innerHTML = `
                    <div class="card h-100">
                        <img src="${product.image}" class="card-img-top" alt="${product.title}">
                        <div class="card-body d-flex flex-column">
                            <h5 class="card-title">${product.title}</h5>
                            <p class="card-text flex-grow-1">$${product.price}</p>
                            <a href="#" class="btn btn-primary mt-auto">Agregar</a>
                        </div>
                    </div>
                `;

                // Capturar el botón
                const botonAgregar = cardDiv.querySelector("a.btn-primary");

                // Asociar el evento click al botón
                botonAgregar.addEventListener("click", (event) => {
                    event.preventDefault(); // Evitar que el enlace recargue la página
                    cart.push(product); // Agregar el producto al carrito
                    localStorage.setItem("cart", JSON.stringify(cart)); // Guardar el carrito actualizado en el LocalStorage
                    updateCartCount();
                    alert(`Producto "${product.title}" agregado al carrito.`); // Mostrar alerta
                });

                // Agregar la tarjeta al contenedor
                cardContainer.appendChild(cardDiv);
            });
        })
        .catch(error => console.error('Error al obtener los datos:', error));
});


/* Es la parte de Javascript del carrito de compras */
        
/*    Me lee  el carrito desde el LocalStorage   */
const cart = JSON.parse(localStorage.getItem("cart")) || [];

/*  Obtener el contenedor donde se mostrarán los productos */
var cartContainer = document.getElementById("cart-container");

// Si el carrito está vacío, mostrar un mensaje
if (cart.length === 0) {
    cartContainer.innerHTML = `<p class="text-center">El carrito está vacío.</p>`;
} else {
    // Recorrer los productos del carrito y agregarlos al HTML
    cart.forEach((product, index) => {
        const productDiv = document.createElement("div");
        productDiv.className = "col-md-4 d-flex align-items-stretch mb-3";

        productDiv.innerHTML = `
            <div class="card h-100">
                <img src="${product.image}" class="card-img-top" alt="${product.title}">
                <div class="card-body d-flex flex-column">
                    <h5 class="card-title">${product.title}</h5>
                    <p class="card-text flex-grow-1">$${product.price}</p>
                    <button class="btn btn-danger mt-auto" data-index="${index}">Eliminar</button>
                </div>
            </div>
        `;

        // Agregar el producto al contenedor
        cartContainer.appendChild(productDiv);
    });
}

// Evento para eliminar productos
cartContainer.addEventListener("click", (e) => {
    if (e.target.classList.contains("btn-danger")) {
        const index = e.target.dataset.index; // Obtener el índice del producto
        cart.splice(index, 1); // Eliminar el producto del array
        localStorage.setItem("cart", JSON.stringify(cart)); // Actualizar el LocalStorage
        location.reload(); // Recargar la página para reflejar los cambios
    }
});


/*  para Agregar cantidad al CARRITO del navbar */

let cartCount = 0; /* es el ID DEL CONTADOR DEL NAVBAR */

const addToCartButtons = document.querySelector("a.btn-primary"); /* LE PUSE LA CLASE DEL BOTTON DE AGREGAR */

addToCartButtons.forEach(button => {
    button.addEventListener('click', () => {
        cartCount++;
        updateCartCount();
    });
});

function updateCartCount() {
    const cart = JSON.parse(localStorage.getItem("cart")) || []; // Obtener el carrito desde el LocalStorage
    const cartCountElement = document.getElementById('cart-count'); // Elemento donde se mostrará el número
    cartCountElement.textContent = cart.length; // Actualizamos el texto con la cantidad de artículos en el carrito
}
import { nombresTiposProductos, productosPorTipo } from "./Tienda.js";
import { MacBook } from "./MacBook.js";	
import { Chromebook } from "./Chromebook.js";
import { WindowsLaptop } from "./WindowsLaptop.js";

window.onload = () => {
    function mostrarProductos(producto) {
        var template = `
            <div class="product-card" margin: 10px;">
                <div style="font-size: 20px; font-weight: bold;">${producto.marca}</div>
                <p><span style="font-weight: bold;">Modelo:</span> ${producto.modelo}</p>
                <p><span style="font-weight: bold;">Precio:</span> ${producto.precio}€</p>
        `;
        if (producto instanceof MacBook) {
            template += `
                <p><span style="font-weight: bold;">Procesador:</span> ${producto.procesador}</p>
            `;
        }

        if (producto instanceof Chromebook) {
            template += `
                <p><span style="font-weight: bold;">Almacenamiento:</span> ${producto.tipoDeAlmacenamiento}</p>
            `;
        }
       
        if (producto instanceof WindowsLaptop) {
            template += `
                <p><span style="font-weight: bold;">Capacidad:</span> ${producto.capacidad}</p>
            `;
        }
        
        template += `
                    <button class="comprar-btn" disabled>Comprar</button>
                    <input type="number" min="0" max="9" value="0" class="cantidad-spinner">
            `;
        template += `</div>`;

        return template;
    }

    var macbooks = document.getElementById("MacBooks");
    macbooks.innerHTML = `<h2 style="">${nombresTiposProductos[0]}</h2>`;
    for (let i = 0; i < productosPorTipo[0].length; i++) {
        macbooks.innerHTML += mostrarProductos(productosPorTipo[0][i]);
    }

    var chromebooks = document.getElementById("Chromebooks");
    chromebooks.innerHTML = `<h2>${nombresTiposProductos[1]}</h2>`;
    for (let i = 0; i < productosPorTipo[1].length; i++) {
        chromebooks.innerHTML += mostrarProductos(productosPorTipo[1][i]);
    }

    var ordenadoreswindows = document.getElementById("OrdenadoresWindows");
    ordenadoreswindows.innerHTML = `<h2>${nombresTiposProductos[2]}</h2>`;
    for (let i = 0; i < productosPorTipo[2].length; i++) {
        ordenadoreswindows.innerHTML += mostrarProductos(productosPorTipo[2][i]);
    }

    // Agregar evento change al selector de cantidad para habilitar/deshabilitar el botón de compra y actualizar su texto
    var cantidadSpinners = document.querySelectorAll('.cantidad-spinner');
    cantidadSpinners.forEach(spinner => {
        spinner.addEventListener('change', () => {
            var productCard = spinner.parentElement;
            var comprarButton = productCard.querySelector('.comprar-btn');
            var cantidadSeleccionada = parseInt(spinner.value);
            if (cantidadSeleccionada > 0 && cantidadSeleccionada <= 9) {
                comprarButton.disabled = false;
                comprarButton.textContent = `Comprar (${cantidadSeleccionada})`;
            } else {
                comprarButton.disabled = true;
                comprarButton.textContent = `Comprar`;
            }
        });
    });

    var carrito = [];

    // Agregar evento de clic al botón "Comprar" para agregar productos al carrito
    var comprarButtons = document.querySelectorAll('.comprar-btn');
    comprarButtons.forEach(button => {
        button.addEventListener('click', () => {
            var productCard = button.parentElement;
            var productBrand = productCard.querySelector('div').textContent;
            var productName = productCard.querySelector('p').textContent.split(':')[1].trim();
            var quantity = parseInt(productCard.querySelector('.cantidad-spinner').value);

            var carrito = document.getElementById('Carrito');
            carrito.innerHTML = `<h2>Carrito</h2>`;
            carrito.style.display = 'block';

            var productoEnCarrito = document.createElement('p');
            productoEnCarrito.textContent = `${productBrand} ${productName}, Cantidad: ${quantity}`;
            carrito.appendChild(productoEnCarrito);
        });
    });
}

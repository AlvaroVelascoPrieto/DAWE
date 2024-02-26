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
}
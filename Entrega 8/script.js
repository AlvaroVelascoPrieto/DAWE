document.addEventListener("DOMContentLoaded", function() {
    const formulario = document.getElementById("formulario");
    const estadoLista = document.getElementById("estadoLista");

    formulario.addEventListener("submit", function(event) {
        event.preventDefault(); // Evitar que el formulario se envíe automáticamente
        
        // Limpiar mensajes de estado anteriores
        estadoLista.innerHTML = "";

        // Realizar las validaciones
        let errores = [];

        // Validar nombre
        const nombreInput = document.getElementById("nombre");
        const nombreValor = nombreInput.value.trim();
        if (nombreValor === "") {
            errores.push("El campo nombre es obligatorio");
        }

        // Validar teléfono
        const telefonoInput = document.getElementById("telefono");
        const telefonoValor = telefonoInput.value.trim();
        const telefonoPatron = /^\d{3}-?\d{3}-?\d{3}$/;
        if (!telefonoPatron.test(telefonoValor)) {
            errores.push("El campo teléfono debe tener el formato 123-456-789 (los guiones son opcionales)");
        }

        // Validar email
        const emailInput = document.getElementById("email");
        const emailValor = emailInput.value.trim();
        const emailPatron = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPatron.test(emailValor)) {
            errores.push("El campo email debe tener el formato nombre@dominio (p.e. adrian@gmail.com)");
        }

        // Validar cantidad de libros
        const cantidadInput = document.getElementById("cantidad");
        const cantidadValor = parseInt(cantidadInput.value);
        if (isNaN(cantidadValor) || cantidadValor < 1 || cantidadValor > 5) {
            errores.push("El campo cantidad de libros debe tener un valor entre 1 y 5 (ambos inclusive)");
        }

        // Mostrar errores si los hay
        if (errores.length > 0) {
            errores.forEach(function(error) {
                const li = document.createElement("li");
                li.textContent = error;
                estadoLista.appendChild(li);
            });
        } else {
            // Si no hay errores, enviar el formulario
            formulario.submit();
        }
    });
});

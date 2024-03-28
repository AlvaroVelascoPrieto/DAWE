document.addEventListener("DOMContentLoaded", function() {
    const formulario = document.getElementById("formulario");
    const estadoLista = document.getElementById("estadoLista");

    // Obtén el elemento de entrada de libros
    const librosInput = document.getElementById('libros');

    // Crea un datalist para las sugerencias de libros
    const librosDatalist = document.createElement('datalist');
    librosDatalist.id = 'libros-sugerencias';

    // Crea las opciones para el datalist
    const libros = ['Libro1', 'Libro2', 'Libro3', 'Libro4', 'Libro5'];
    for (const libro of libros) {
        const option = document.createElement('option');
        option.value = libro;
        librosDatalist.appendChild(option);
    }

    // Obtén el elemento de entrada de archivos y la lista de mensajes de estado
    const fileInput = document.getElementById('file');

    // Agrega un controlador de eventos para el evento 'change' del campo de entrada de archivos
    fileInput.addEventListener('change', function() {
        // Limpia la lista de mensajes de estado
        estadoLista.innerHTML = '';

        // Crea un elemento de lista para cada archivo cargado
        for (const file of fileInput.files) {
            const li = document.createElement('li');
            li.textContent = `Datos del fichero: ${file.name} tipo: ${file.type} tamaño: ${file.size} Bytes`;
            estadoLista.appendChild(li);
        }
    });

    // Añade el datalist al documento
    document.body.appendChild(librosDatalist);

    // Asigna el datalist a la entrada de libros
    librosInput.setAttribute('list', 'libros-sugerencias');

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
            console.log("Formulario enviado")
        }
    });
});

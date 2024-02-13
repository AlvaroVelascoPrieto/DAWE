window.onload = () => {
	// [AQUI VUESTRO CODIGO]

    //////////////////////////////EJERCICIO 1//////////////////////////////
    //Crear nueva sección
    var nuevaSection = document.createElement("section");
    var main = document.querySelector("main");
    main.appendChild(nuevaSection);

    //Añadir encabezado
    var nuevaSectionHeading = document.createElement("h1");
    nuevaSection.appendChild(nuevaSectionHeading);

    //Añadir artículos
    for (var i = 1; i <= 3; i++) {
        var nuevaArticle = document.createElement("article");
        var articleHeading = document.createElement("h2");
        articleHeading.textContent = "Artículo " + i;
        var articleText = document.createElement("p");
        articleText.textContent = "Este es el contenido del artículo " + i + ".";
        nuevaArticle.appendChild(articleHeading);
        nuevaArticle.appendChild(articleText);
        nuevaSection.appendChild(nuevaArticle);
    }
    //////////////////////////////EJERCICIO 2//////////////////////////////
    //Función para añadir un enlace a un menú
    function agregarEnlace(ulSelector, textoEnlace, claseEnlace) {
        //Crear el elemento de enlace
        var nuevoEnlace = document.createElement("a");
        nuevoEnlace.textContent = textoEnlace;
        nuevoEnlace.setAttribute("href", "#");

        //Crear el elemento de lista
        var nuevoItemLista = document.createElement("li");
        nuevoItemLista.appendChild(nuevoEnlace);

        //Agregar la clase al elemento de lista
        nuevoItemLista.classList.add(claseEnlace); // Agregar la clase al elemento <li>

        //Obtener la lista ul y añadir el nuevo item de lista
        var ulMenu = document.querySelector(ulSelector);
        ulMenu.appendChild(nuevoItemLista);
    }

    //Añadir enlaces al menú vertical del aside
    agregarEnlace("aside .aside-menu", "Enlace 1", "nav-item");
    agregarEnlace("aside .aside-menu", "Enlace 2", "nav-item");
    agregarEnlace("aside .aside-menu", "Enlace 3", "nav-item");

    //Añadir enlace al menú horizontal superior
    agregarEnlace("header .nav-menu", "Nuevo Enlace", "nav-item");

    //Añadir enlace al menú del footer
    agregarEnlace("footer .footer-menu", "Enlace Footer", "nav-item");

    //////////////////////////////EJERCICIO 3//////////////////////////////
    //Reducir el tamaño de la fuente de los textos en los <article>
    var articulos = document.querySelectorAll("article");
    articulos.forEach(function(articulo) {
        articulo.style.fontSize = "smaller";
    });

    //Cambiar el estilo de texto de los enlaces del aside
    var enlacesAside = document.querySelectorAll("aside .aside-menu a");
    enlacesAside.forEach(function(enlace) {
        enlace.style.textDecoration = "none"; //Eliminar subrayado
        enlace.style.fontStyle = "italic"; //Estilo cursiva
    });

    //Cambiar el estilo de los enlaces del <nav>
    var enlacesNav = document.querySelectorAll("nav a");
    enlacesNav.forEach(function(enlace) {
        enlace.style.fontSize = "smaller"; //Tamaño de fuente menor
        enlace.style.fontWeight = "bold"; //Texto en negrita
    });

    //////////////////////////////EJERCICIO 4//////////////////////////////
    // Contar el número de elementos <li> después de realizar las tareas anteriores
    var elementosLi = document.querySelectorAll("li");
    console.log("La cantidad de <li> es:", elementosLi.length);
}
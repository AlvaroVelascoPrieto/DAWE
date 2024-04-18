/* postits.js
 *
 */

window.onload = init;
var focus = null;

function init() {
	var button = document.getElementById("add_button");
	button.onclick = createSticky;

	var clearButton = document.getElementById("clear_button");
    clearButton.onclick = clearStickyNotes;


	// cargar las notas postit de localStorage  
	// cada nota se guarda como un par así: postit_X = texto_de_la_nota
	// donde X es el número de la nota
	// por cada una de ellas, llamar al método
	// addStickyToDOM(texto_de_la_nota);

	var claves = Object.keys(localStorage);
	claves.forEach(function(clave) {
		if (clave.startsWith("postit")) {
			addStickyToDOM(localStorage.getItem(clave));
		}
	});

	var totalKB = calculateStorageSize();
    var tamano = document.createElement("div");
    tamano.innerHTML = "Espacio total utilizado: " + totalKB.toFixed(2) + " KB";
    document.body.appendChild(tamano);

	var stickies = document.getElementById("stickies");
    stickies.addEventListener("mouseover", function(event) {
        if (event.target.tagName === "LI") {
            event.target.classList.add("focused");
            focusedPostIt = event.target;
        }
    });

    stickies.addEventListener("mouseout", function(event) {
        if (event.target.tagName === "LI") {
            event.target.classList.remove("focused");
            focusedPostIt = null;
        }
    });

    document.addEventListener("keydown", function(event) {
        if (event.keyCode === 8 || event.keyCode === 46) {
            if (focusedPostIt) {
                focusedPostIt.remove();
                var postId = focusedPostIt.getAttribute("id");
                localStorage.removeItem(postId);
            }
        }
    });
}

function createSticky() {
	var value = document.getElementById("note_text").value;
	
        // crear la nota con nombre postit_X, donde X es un número entero
	// (postit_1, postit_2, ...)  y guardarla en el localStorage
	
	var num_notas = Object.keys(localStorage).filter(key => key.startsWith("postit")).length;
	var id_nuevo = "postit" + (num_notas + 1);
	localStorage.setItem(id_nuevo, value);

	addStickyToDOM(value);
}


function addStickyToDOM(value) {
	var stickies = document.getElementById("stickies");
	var postit = document.createElement("li");
	var span = document.createElement("span");
	span.setAttribute("class", "postit");
	span.innerHTML = value;
	postit.appendChild(span);
	stickies.appendChild(postit);
}

function clearStickyNotes() {
	// Crear un nuevo botón en la ventana de postit notes que al pulsarlo,
	// elimine las notas de pantalla y de localStorage
	// Algoritmo:	
	// obtener una referencia a la capa "stickies"
	// recorrer los hijos (childNodes) de esa referencia,
	// eliminándolos uno a uno (removeChild)

	var stickies = document.getElementById("stickies");
    stickies.innerHTML = "";

    var claves = Object.keys(localStorage).filter(clave => clave.startsWith("postit"));
		claves.forEach(function(clave) {
        localStorage.removeItem(clave);
    });
}

function calculateStorageSize() {
    var total = 0;

    for (var i = 0; i < localStorage.length; i++) {
        var key = localStorage.key(i);
        if (key.startsWith("postit")) {
            total += localStorage.getItem(key).length * 2; 
        }
    }

    var totalKB = total / 1024; 
    return totalKB;
}
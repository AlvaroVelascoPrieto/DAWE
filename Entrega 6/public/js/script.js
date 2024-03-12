const spritesheetCanvas = document.getElementById('spritesheetCanvas');
const spritesheetCtx = spritesheetCanvas.getContext('2d');
const viewportCanvas = document.getElementById('viewportCanvas');
const viewportCtx = viewportCanvas.getContext('2d');

const spriteSheet = new Image();
spriteSheet.src = './images/spritesheet.png'; // Ruta de tu spritesheet

const spriteSize = 32; // Tamaño de cada sprite en el spritesheet
const viewportSize = 128; // Tamaño de la ventana deslizante
let viewportX = 0; // Posición X inicial de la ventana
let viewportY = 0; // Posición Y inicial de la ventana

spriteSheet.onload = function() {
    drawSpritesheet();
    updateViewport();
}

function drawSpritesheet() {
    spritesheetCtx.drawImage(spriteSheet, 0, 0, spritesheetCanvas.width, spritesheetCanvas.height);
    // Dibujar la ventana en el spritesheet
    spritesheetCtx.strokeStyle = 'red';
    spritesheetCtx.strokeRect(viewportX, viewportY, viewportSize, viewportSize);
    // Mostrar la posición de la ventana
    spritesheetCtx.fillStyle = 'black';
    spritesheetCtx.font = '12px Arial';
    spritesheetCtx.fillText(`Ventana: (${viewportX},${viewportY})`, 10, 20);
}

function updateViewport() {
    viewportCtx.clearRect(0, 0, viewportCanvas.width, viewportCanvas.height);
    // Obtener el contenido dentro de la ventana en el spritesheet y mostrarlo en el canvas de la ventana
    const imageData = spritesheetCtx.getImageData(viewportX, viewportY, viewportSize, viewportSize);
    viewportCtx.putImageData(imageData, 0, 0);
}

document.addEventListener('keydown', function(event) {
    switch(event.key) {
        case 'ArrowLeft':
            viewportX = Math.max(0, viewportX - 5);
            break;
        case 'ArrowRight':
            viewportX = Math.min(spritesheetCanvas.width - viewportSize, viewportX + 5);
            break;
        case 'ArrowUp':
            viewportY = Math.max(0, viewportY - 5);
            break;
        case 'ArrowDown':
            viewportY = Math.min(spritesheetCanvas.height - viewportSize, viewportY + 5);
            break;
    }

    updateViewport();
    drawSpritesheet();
});

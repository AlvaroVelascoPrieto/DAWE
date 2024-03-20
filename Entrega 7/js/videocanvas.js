var efecto = null;
var clip = "videos/demovideo1"; // nombre del vídeo, sin extensión
var rotando = false;
var rotation = 0;
window.onload = function() {

	var video = document.getElementById("video");
	var botonByN = document.getElementById("byn");
	botonByN.onclick = cambiarEfecto;
	var botonNormal = document.getElementById("normal");
	botonNormal.onclick = cambiarEfecto;
	var botonPausa = document.getElementById("pausa");
	botonPausa.onclick = togglePause;
	var botonScifi = document.getElementById("scifi");
	botonScifi.onclick = cambiarEfecto;
	var botonRotar = document.getElementById("rotar");
	botonRotar.onclick = toggleRotar;
	var botonPlayAudio = document.getElementById("tocarAudio");
	botonPlayAudio.onclick = function() {
		loadAudio("audio/soundtrack.mp3").then(audio => audio.play());
	};
	var botonPip = document.getElementById("pip");
	botonPip.onclick = pip;	
	
				
	video.addEventListener("play", procesarFrame, false);
	
	video.src = clip + getFormatExtension();
	video.load();
	video.play();
	
}

function cambiarEfecto(e){
    var id = e.target.getAttribute("id");
    if (id == "byn") {
        efecto = byn;
    } else if (id == "scifi") {
        efecto = scifi;
    } else {
        efecto = null;
    }
}

function getFormatExtension() {
	var video = document.getElementById("video");
	if (video.canPlayType("video/mp4") != "") {
		return ".mp4";
	} 
	else if (video.canPlayType("video/ogg") != "") {
		return ".ogv";
	}
	else if (video.canPlayType("video/webm") != "") {
		return ".webm";
	} 
}


function procesarFrame(e) {
	var video = document.getElementById("video");

	if (video.paused || video.ended) {
		return;
	}

	var bufferCanvas = document.getElementById("buffer");
    var displayCanvas = document.getElementById("display");
    var buffer = bufferCanvas.getContext("2d");
    var display = displayCanvas.getContext("2d");

	if (rotando) {
		buffer.save();
		buffer.translate(bufferCanvas.width / 2, bufferCanvas.height / 2);
		buffer.rotate(rotation);
		buffer.drawImage(video, -video.width / 2, -video.height / 2);
		buffer.restore();
		rotation += 0.01;
	} else {
		buffer.drawImage(video, 0, 0, bufferCanvas.width, bufferCanvas.height);
	}
    

    var frame = buffer.getImageData(0, 0, bufferCanvas.width, bufferCanvas.height);
    var length = frame.data.length / 4;	

	for (var i = 0; i < length; i++) {
		var r = frame.data[i * 4 + 0];
		var g = frame.data[i * 4 + 1];
		var b = frame.data[i * 4 + 2];
		if (efecto){		
			efecto(i, r, g, b, frame.data);
		}
	}
	display.putImageData(frame, 0, 0);

	setTimeout(procesarFrame, 0);
	// en los navegadores modernos, es mejor usar :
	// requestAnimationFrame(procesarFrame);

}

function byn(pos, r, g, b, data) {
	var gris = (r+g+b)/3;

	data[pos * 4 + 0] = gris;
	data[pos * 4 + 1] = gris;
	data[pos * 4 + 2] = gris;
}

function togglePause() {
    var video = document.getElementById("video");
    if (video.paused) {
        video.play();
    } else {
        video.pause();
    }
}

function scifi(pos, r, g, b, data) {
    var offset = pos * 4;
    data[offset] = Math.round(255 - r);
    data[offset+1] = Math.round(255 - g);
    data[offset+2] = Math.round(255 - b);
}

function toggleRotar() {
	rotando = !rotando;
}

function loadAudio(url) {
    return new Promise((resolve, reject) => {
        var audio = new Audio();
        audio.onloadeddata = () => resolve(audio);
        audio.onerror = reject;
        audio.src = url;
    });
}

function pip() {
    var video = document.getElementById("video");
    video.requestPictureInPicture().catch(error => {
        console.error(`Failed to start Picture-in-Picture mode: ${error}`);
    });
};
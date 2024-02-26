import {Producto} from './Producto.js';

export class MacBook extends Producto {
	constructor(marca, modelo, precio, procesador){
		super(marca, modelo, precio);
		this.procesador = procesador;
	}
	
	getMemoria(){
		return this.procesador;
	}

	setMemoria(procesador){
		this.procesador = procesador;
	}

	mostrar(){
		return this.procesador;
	}

	static getTipoProducto() {
		return "MacBooks";
	}
}
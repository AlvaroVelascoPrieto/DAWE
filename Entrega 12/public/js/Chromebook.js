import {Producto} from './Producto.js';

export class Chromebook extends Producto {
	constructor(marca, modelo, precio, tipoDeAlmacenamiento){
		super(marca, modelo, precio);
		this.tipoDeAlmacenamiento = tipoDeAlmacenamiento;
	}

	getCpu(){
		return this.tipoDeAlmacenamiento;
	}

	setCpu(cpu){
		this.cpu = this.tipoDeAlmacenamiento;
	}

	mostrar(){
		return this.tipoDeAlmacenamiento;
	}

	static getTipoProducto() {
        return "Chromebooks";
    }
}
import { Producto } from "./Producto.js";  

export class WindowsLaptop extends Producto {
    constructor(marca, modelo, precio, capacidad){
        super(marca, modelo, precio);
        this.capacidad = capacidad;
    }

    getCapacidad(){
        return this.capacidad;
    }

    setConectividad(capacidad){
        this.capacidad = capacidad;
    }
    
    mostrar(){
        return this.capacidad;
    }
    
    static getTipoProducto() {
        return "OrdenadoresWindows";
    }
}
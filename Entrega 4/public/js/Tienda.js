import {Chromebook} from './Chromebook.js';
import {MacBook} from './MacBook.js';
import {WindowsLaptop} from './WindowsLaptop.js';

//Crear cada unos de los productos de la tienda
const mac1 = new MacBook("Apple", "MacBook Pro 16 M3 Max", 2900, "AppleSilicon M3 Max");
const mac2 = new MacBook("Apple", "MacBook Pro 16 M3 Pro", 2500, "AppleSilicon M3 Pro");
const mac3 = new MacBook("Apple", "MacBook Pro 14 M3 Pro", 2300, "AppleSilicon M3 Pro");
const mac4 = new MacBook("Apple", "MacBook Pro 14 M3", 1800, "AppleSilicon M3");
const mac5 = new MacBook("Apple", "MacBook Air 512GB", 1200, "AppleSilicon M2");
const mac6 = new MacBook("Apple", "MacBook Air 256GB", 1000, "AppleSilicon M2");


const chrome1 = new Chromebook("Asus", "Chromebook Plus CX34", 499, "EMMc");
const chrome2 = new Chromebook("Acer", "Chromebook 16 GE", 1099, "M.2");
const chrome3 = new Chromebook("Asus", "Chromebook Flip C433", 549, "SSD");
const chrome4 = new Chromebook("Lenovo", "IdeaPad hromebook 3I 15", 449, "HDD");
const chrome5 = new Chromebook("Asus", "Chromebook Vibe CX55 Flip", 699, "SSD");
const chrome6 = new Chromebook("Lenovo", "Lenovo Chromebook Duet 5", 499, "HDD");

const laptop1 = new WindowsLaptop("Microsoft", "Surface Laptop 3", 1500, "2TB");
const laptop2 = new WindowsLaptop("Dell", "XPS 13 Plus", 1300, "1.5TB");
const laptop3 = new WindowsLaptop("LG", "Gram", 1200, "I1TB");
const laptop4 = new WindowsLaptop("Huawei", "Matebook D14", 950, "1TB");

// Crear la lista con cada tipo de producto
const nombresTiposProductos = [
    Chromebook.getTipoProducto(),
    MacBook.getTipoProducto(),
    WindowsLaptop.getTipoProducto()
];

// Array de dos dimensiones con productos
const productosPorTipo = [
    [chrome1, chrome2, chrome3, chrome4, chrome5, chrome6],
    [mac1, mac2, mac3, mac4, mac5, mac6],
    [laptop1, laptop2, laptop3, laptop4]
];

export { nombresTiposProductos, productosPorTipo };
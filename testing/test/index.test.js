const carritoCompra = require("../index.js");

describe("test de carritoCompra", () => {
it("este obejeto es un array vacio",() =>{
    const carrito = new carritoCompra();
    expect(carrito.productos).toHaveLength(0);
});

it("esta funcion agrega un objeto",() => {
    const carrito = new carritoCompra();
    expect(carrito.agregarProducto).toBeDefined();
    carrito.agregarProducto({name: "fideo", precio: 100});
    expect(carrito.productos.length).toBe(1);
});

it("esta funcion calcula el total",() =>{
    const carrito = new carritoCompra();
    expect(carrito.calcularTotal).toBeDefined();
    carrito.agregarProducto({name: "fideo", precio: 100});
    carrito.agregarProducto({name: "polenta", precio: 150});
    carrito.agregarProducto({name: "arroz", precio: 200});
    expect(carrito.calcularTotal()).toBe(450);
});

it("esta funcion da el total con el porcentaje de descuento",() =>{
   const carrito = new carritoCompra();
   expect(carrito.aplicarDescuento).toBeDefined();
   carrito.agregarProducto({name: "fideo", precio: 100});
   carrito.agregarProducto({name: "polenta", precio: 150});
   carrito.agregarProducto({name: "arroz", precio: 200});
   expect(carrito.aplicarDescuento(10)).toBe(405);
});
})
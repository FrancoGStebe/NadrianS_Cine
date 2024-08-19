class carritoCompra {
    constructor(){
        this.productos = [];
    }

agregarProducto(producto){
this.productos.push(producto);
}

calcularTotal(){
return this.productos.reduce((acu, producto) => acu + producto.precio, 0);
}

aplicarDescuento(num){
 const total = this.calcularTotal();
 return total - (total * num) / 100; 
}
};

module.exports = carritoCompra;
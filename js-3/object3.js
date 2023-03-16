let receta = {};

receta.nombre = "Sandwich";
receta.ingredientes = [];

let ingrediente1 = {
    nombre: "Pan",
    cantidad: 2
}

receta.ingredientes.push(ingrediente1);

let ingrediente2 = {
    nombre: "Queso",
    cantidad: 1
}

receta.ingredientes.push(ingrediente2);

console.log(receta.ingredientes[0].nombre);

let cantidades = 0;
for (let i = 0; i < receta.ingredientes.length; i++) {
    cantidades += receta.ingredientes[i].cantidad;
}

console.log(cantidades);
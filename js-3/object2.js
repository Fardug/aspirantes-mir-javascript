let persona = {
    nombre: "Fidel",
    edad: 27,
    ciudad: "Bucaramanga",
    profesion: "Desarrollador"
}

console.log(persona);

function presentacion(persona) {
    return `${persona.nombre} ${persona.edad} ${persona.profesion}`;
}
let mensaje = presentacion(persona);

console.log(mensaje);

persona.hobbies = ["musica", "Cine ", "Deportes", "Viajar"];

console.log(persona.hobbies);

for (let i = 0; i > persona.hobbies.length; i++) {
    console.log(persona.hobbies[i]);
}


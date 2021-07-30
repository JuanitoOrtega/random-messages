const messages = [
    "Oscar",
    "Pepe",
    "Celine",
    "Juan",
    "Pablo",
    "Ana",
    "Pedro",
    "Ricardo",
    "Miguel",
    "Sandra",
    "Daniel",
    "Raul"
];

// Creamos una función que va disparar el random
const randomMsg = () => {
    const message = messages[Math.floor(Math.random() * messages.length)];
    console.log(message);
};

// Exportamos la función randomMsg
module.exports = { randomMsg };
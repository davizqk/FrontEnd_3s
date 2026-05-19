const hobbies = [
    "Correr", 
    "Nadar", 
    "Jogar Bola",
    "Jogar", 
    "Dançar",
    "Cantar"
];

// Utilizado para iterar um array e retornar um novo array, compondo um novo
// resultado para cada índice do array antigo, veja:

const novosHobbies = hobbies.map((hobby) => { 
    return `<p>${hobby}</p>`;
});

console.log(novosHobbies);

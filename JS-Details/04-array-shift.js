let frutasVermelhas = [];
let frutasCitricas = ["Limão", "Abacaxi", "Maracujá", "Tangerina", "Acerola"];

frutasVermelhas.push("Morango");
frutasVermelhas.push("Groselha");
frutasVermelhas.push("Framboesa");
frutasVermelhas.push("Amora");
frutasVermelhas.push("Cereja");
frutasVermelhas.push("Mirtilo");

console.log(`Frustas Vermelhas: ${frutasVermelhas}`);
// console.log(`Frutas Citricas: ${frutasCitricas}`);

let frutaRemovidaInicio = frutasVermelhas.shift() // remove o primeiro item do array
console.log(frutasVermelhas);
console.log(`${frutaRemovidaInicio} foi removido da cesta!`);
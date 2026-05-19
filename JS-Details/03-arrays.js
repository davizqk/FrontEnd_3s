let frutasVermelhas = new Array();
let frutasCitricas = ["Limão", "Abacaxi", "Maracujá", "Tangerina", "Acerola"];

frutasVermelhas.push("Morango");
frutasVermelhas.push("Groselha");
frutasVermelhas.push("Framboesa");
frutasVermelhas.push("Amora");
frutasVermelhas.push("Cereja");
frutasVermelhas.push("Mirtilo");

console.log(`Frustas Vermelhas: ${frutasVermelhas}`);
// console.log(`Frutas Citricas: ${frutasCitricas}`);

let frutaRemovida = frutasVermelhas.pop() // remove o ultimo item do array
console.log(frutasVermelhas);
console.log(`${frutaRemovida} foi removido da cesta!`);

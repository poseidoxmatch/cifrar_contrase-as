// Importamos la librería crypto-js para utilizar el algoritmo SHA-256


const CryptoJS = require("crypto-js");

// Función para cifrar la contraseña
function cifrarPassword(password) {
  // Usamos el algoritmo SHA-256 para crear un hash de la contraseña
  const hash = CryptoJS.SHA256(password);
  // Convertimos el hash a una cadena hexadecimal
  const hashStr = hash.toString(CryptoJS.enc.Hex);
  // Devolvemos el hash cifrado
  return hashStr;
}

// Ejemplo de uso de la función para cifrar una contraseña
const password = "miContraseña123";
const passwordCifrada = cifrarPassword(password);
console.log(`La contraseña "${password}" cifrada es: ${passwordCifrada}`);

const { registrar, leer } = require("./operaciones");

const [,,operacion, nombre, edad, tipo, color, enfermedad] = process.argv;

if (operacion === "registrar") {
  registrar(nombre, edad, tipo, color, enfermedad);
} else if (operacion === "leer") {
  leer();
} else {
  console.log('Operacion no reconocida');
}

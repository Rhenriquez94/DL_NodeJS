const fs = require('fs');

function registrar(nombre, edad, tipo, color, enfermedad) {
    const data = fs.readFileSync('citas.json', 'utf8');
    const citas = JSON.parse(data);
    
    const nuevaCita = {
        nombre,
        edad,
        tipo,
        color,
        enfermedad
    };

    citas.push(nuevaCita);

    fs.writeFileSync('citas.json', JSON.stringify(citas, null, 2), 'utf8');

    console.log('Cita registrada con exito!!');
}

function leer() {
    const data = fs.readFileSync('citas.json', 'utf8');
    const citas = JSON.parse(data);

    console.log('Citas registradas:');
    citas.forEach((cita, index) => {
        console.log(`${index + 1}. ${cita.nombre}, ${cita.edad}, ${cita.tipo}, ${cita.color}, ${cita.enfermedad}`);
    });
}

module.exports = {
    registrar,
    leer
};

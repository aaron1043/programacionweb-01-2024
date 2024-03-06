function removerCeros(arreglo) {
    let arregloSinCeros = [];
    for (let i = 0; i < arreglo.length; i++) {
        if (arreglo[i] !== 0) {
            arregloSinCeros.push(arreglo[i]);
        }
    }
    return arregloSinCeros;
}

// escribe tu respuesta acá

// código de prueba
console.log(removerCeros([0, 1, 0, 2, 0, 3])) // [1, 2, 3]
console.log(removerCeros([9, 3, 6, 4])) // [9, 3, 6, 4]
console.log(removerCeros([0, 0, 0])) // []
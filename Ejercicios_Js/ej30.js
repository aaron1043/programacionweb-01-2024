function numAsteriscos(matriz) {
    let contador = 0;
    for (let i = 0; i < matriz.length; i++) {
        for (let j = 0; j < matriz[i].length; j++) {
            if (matriz[i][j] === '*') {
                contador++;
            }
        }
    }
    return contador;
}
// escribe tu función acá

// código de prueba
console.log(numAsteriscos([
    ['*', '', '*'],
    ['', '*', ''],
    ['*', '', '*']
  ]))
  // 5
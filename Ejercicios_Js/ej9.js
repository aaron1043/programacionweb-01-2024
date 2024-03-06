function numeroDeAes(cadena) {
    let contador = 0;
    for (let i = 0; i < cadena.length; i++) {
        if (cadena[i].toLowerCase() === 'a') {
            contador++;
        }
    }
    return contador;
}

console.log(numeroDeAes("abracadabra")) // 5
console.log(numeroDeAes("etinol")) // 0
console.log(numeroDeAes("")) // 0
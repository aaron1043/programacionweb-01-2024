function contarRango(numero1, numero2) {
    let contador = 0;
    for (let i = numero1 + 1; i < numero2; i++) {
        contador++;
    }
    return contador;
}

// escribe tu respuesta acá

// código de prueba
console.log(contarRango(1, 9)) // 7
console.log(contarRango(1332, 8743)) // 7410
console.log(contarRango(5, 6)) // 0
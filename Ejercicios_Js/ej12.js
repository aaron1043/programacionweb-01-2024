function multiplicarArreglo(arreglo){
    let multiplicar = 1;
    for (let i = 0; i < arreglo.length; i++) {
        multiplicar *= arreglo[i];
        
    }
    return multiplicar;

}

// escribe tu respuesta acá

// código de prueba
console.log(multiplicarArreglo([4, 1, 2, 3])) // 24
console.log(multiplicarArreglo([1, 2, 3, 4, 5, 6, 7, 8])) // 40320
console.log(multiplicarArreglo([])) // 1
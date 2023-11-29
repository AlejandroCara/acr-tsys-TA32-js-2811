var valores = [true, 4, false, "hola", "adios", 2];

if (valores[3] > valores[4]) {
    console.log("El valor " + valores[3] + " es mayor que " + valores[4]);
} else {
    
    console.log("El valor " + valores[4] + " es mayor que " + valores[3]);
}

valores.forEach(valor => {
    if(valor){
        console.log("Esto es un true")
    } else if(!valor) {
        console.log("Esto es un false")
    }
});

console.log(valores[1] + valores[5])
console.log(valores[1] - valores[5])
console.log(valores[1] * valores[5])
console.log(valores[1] / valores[5])
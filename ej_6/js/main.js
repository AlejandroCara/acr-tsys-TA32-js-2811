var letras = ["T", "R", "W", "A", "G", "M", "Y", "F", "P", "D", "X", "B", "N", "J", "Z", "S", "Q", "V", "H", "L", "C", "K", "E", "T"];


let inDni = prompt('DNI');
let inLetra = prompt('Letra');
let letra;

if (inDni < 0 && inDni > 99999999) {
    alert("Valor no valido");
} else {
    letra = letras[inDni%23];

    if (letra == inLetra){
        alert("Numero y letra correctos")
    } else {
        alert("No es correcto")
    }
}

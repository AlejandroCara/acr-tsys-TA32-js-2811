let inTexto = prompt("Texto");


let isPalindromo = (texto) => {
    
    let palindromo = true;
    let incr = 0;
    let decr = texto.length - 1;

    while(palindromo && incr < texto.length){
        if (texto.charAt(incr) != texto.charAt(decr)) {
            palindromo = false;
        }

        incr += 1;
        decr -= 1;
    }

    return palindromo;
}


if (isPalindromo(inTexto)) {
    alert("Es palindromo");
} else {
    alert("No es palindromo");
}
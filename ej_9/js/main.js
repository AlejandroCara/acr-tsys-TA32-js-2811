let inText = prompt("Texto");
let onlyUpperCase = false;
let onlyLowerCase = false;
let i = 0;


let upperAndLowerCase = (text) => {
    while(i < text.length){
        if (text.charCodeAt(i) > 64 && text.charCodeAt(i) < 91) {
            onlyUpperCase = true;
        }

        if (text.charCodeAt(i) > 96 && text.charCodeAt(i) < 123) {
            onlyLowerCase = true;
        }
        i++;
    }

    if(onlyUpperCase && !onlyLowerCase){
        alert("Solo mayusculas");
    } else if (onlyLowerCase && !onlyUpperCase) {
        alert("Solo minusculas");
    } else {
        alert("Mezcla mayusculas minusculas");
    }
}

upperAndLowerCase(inText);
let num = prompt('Numero');
let result = 1;

for(let i = 0; i <= num; i++){
    result *= num;
    num--;
    console.log(result + " " + num)
}
result *= num;
alert(result);
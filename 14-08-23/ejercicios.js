//EJERCICIO 1
//SANTIAGO DE LA CRUZ LÒPEZ VECINO

//IMPRIMIR AÑO ACORDE A LA EDAD

function calcAge(age) {
    let actualYear = 2023;
    let calcAge = actualYear - age;
    console.log(`Usted naciò en ${calcAge}`);
}

calcAge(20);


//EJERCICIO 2
//SANTIAGO DE LA CRUZ LÒPEZ VECINO

//tome un valor de grado Celsius como parámetro y conviértalo en Fahrenheit.

function convertToFahrenheit(celsius) {
    let fahrenheit = (celsius * 9/5) + 32;
    console.log(fahrenheit);
}

convertToFahrenheit(30);



//EJERCICIO 3
//SANTIAGO DE LA CRUZ LÒPEZ VECINO

//una funciòn que tome un array de numeros y un valor objetivo como entrada y devuelva los dos numeros que suman el valor objetivo

function twoSum(nums, target) {
    let result = [];
    for(let i = 0; i < nums.length; i++) {
        for(let j = i+1; j < nums.length; j++) {
            if(nums[i] + nums[j] === target) {
                result.push([nums[i], nums[j]]);
            }
        }
    }
    return result;
}

console.log(twoSum([2,7,11,15,8,3], 10));
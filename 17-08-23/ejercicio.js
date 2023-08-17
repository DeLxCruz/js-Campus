// Ejericicio 1

// Santiago López

// Crea un arreglo de 10 posiciones de nùmeros con valores aleatorios. Muestra por consola el ìndice y el valor al que corresponde. Usa dos mètodos, uno para rellenar valores y otro para mostrar.

// Solución

let arr = [];

function fillArray() {
    for (let i = 0; i < 10; i++) {
        arr.push(Math.floor(Math.random() * 100));
    }
    return arr;
}

function showArray() {
    for (let i = 0; i < 10; i++) {
        console.log("Índice: " + i + " Valor: " + arr[i]);
    }
}

fillArray();
showArray();

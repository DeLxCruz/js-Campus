// RETO

// SANTIAGO LÒPEZ

// Solution

let projectCosts = [364147530, 61825163, 107306571, 128124602, 139946991, 428047635, 491595254, 879792181, 106926279];
let target = 1;
let count = 0;

if (projectCosts.length >= 5 && projectCosts.length <= Math.pow(10, 5)) {

    let validCosts = true;
    for (let i = 0; i < projectCosts.length; i++) {
        if (projectCosts[i] < 0 || projectCosts[i] > 2 * Math.pow(10, 9)) {
            validCosts = false;
            break;
        }
    }

    if (validCosts && new Set(projectCosts).size === projectCosts.length) {
        if (target >= 1 && target <= Math.pow(10, 9)) {
            for (let i = 0; i < projectCosts.length; i++) {
                for (let j = 0; j < projectCosts.length; j++) {
                    if (Math.abs(projectCosts[i] - projectCosts[j]) === target) {
                        count++;
                    }
                }
            }
            console.log(count / 2);   
        } else {
            console.log('El valor de target no es válido.');
        }
    } else {
        console.log('Los valores de projectCosts no son válidos.');
    }
} else {
    console.log('El número de elementos en projectCosts no es válido.');
}



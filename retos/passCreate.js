// Reto Password Creation

//Santiago López

// A password manager wants to create new passwords using two strings given by the user, then combined to create a harder-to- guess combination. Given two strings,
// interleave the characters of the strings to create a new string. Beginning with an empty string, alternately append a character from string a and from string b. If one of the strings is exhausted before the other, append the remaining letters from the other
// string all at once. The result is the new password.

// Example:

// Input: "abc", "12345"
// Output: "a1b2c345"

// Input: "abcde", "123"
// Output: "a1b2c3de"

//Solution

let si = "SIza";
let sii = "mani";

function passwordCreation(str1, str2) {
    let result = "";
    let i = 0;
    let j = 0;
    
    if (str1.toLowerCase() === str1 && str2.toLowerCase() === str2) {
        while (i < str1.length || j < str2.length) {
            if (i < str1.length) {
                result += str1[i];
                i++;
            }
            if (j < str2.length) {
                result += str2[j];
                j++;
            }
        }
        return result;
    } else {
        return "Las palabras deben estar en minúscula";
    }
}

console.log(passwordCreation(si, sii));

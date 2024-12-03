let arr = [1, 2, 3];
arr[1] = 10
console.log(arr[1])
let Arr = ['string', 'string', 'string']
Arr.push('string4')
console.log(Arr)
let ar = [1, 2, 3]
let suma = 0
for(let i = 0; i < ar.length ;i++) {
    suma += ar[i]
}
console.log(suma)
let masuv = [1, 2, 3, 4, 5]
for(i = 0;i < masuv.length;i++) {
    console.log(masuv[i])
}
let masiv = ['11 символів', '5symb', '5имво', '9 символи', '8 символ']
for(let i = 0; i < masiv.length; i++) {
    if(masiv[i].length > 5) {
        console.log(masiv[i])
    }
}
let massiv = [3, 7, 2, 9, 12, 5, 4, 11, 8, 10];

let max = massiv[0];

for (let i = 0; i < massiv.length; i++) {
    if (massiv[i] > max) {
        max = massiv[i];
    }
}

console.log(max);


let masssiv = [3, 7, 2, 9, 12, 5, 4, 11, 8, 10];
for(let i = 0;i < masssiv.length ; i++) {
    if(masssiv[i] % 2 === 0) {
        console.log(masssiv[i])
    }
}
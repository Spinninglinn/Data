// data type
const box0 = 'lang tekst'; // string 
const box1 = "dette er en string";
const box2 = 'en tekst ${box0}';
console.group(box2);

const age = 3456; // nummer

const isLogIn = true // false Dette er boolean

let firstName;
console.log(firstName); // Denne heter undefinded

let secondName = null;
console.log(secondName); // if... (hvios denne har verdi, vil js hente denne verdien)


// arrays

const names = ['Thomas', 
    'Linn', 
    'Emil', 
    45,
    'Silje', 
    true,

    [
        'Hoppe',
        'Danse'
    ]
]; 

// dette blir en boks med mange navn, så her kan vi hente ut navn, eller en liste med navn
//names.push('Harry'); // denne adder navnet, og vil poppe op som siste navn i console.log. Fjerner jeg denne vil Silje være siste navnet.
//names.pop(); // tar bort det siste navnet
//names.reverse(); // reverserer navnrekken

console.log(names.slice(1, 3)); // tar bort eller beholde forskjellige elementer
console.log(names.length)
console.log(names)
console.log(names.includes('Harry'));
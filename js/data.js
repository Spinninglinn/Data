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
console.log(names.length);
console.log(names.includes('Harry'));
names[0] = 'Asbjørn'; // legger til navn, og overskriver sånn at første navn blir dette
console.log(names);


//__________________________________________////
// OBJECTS ///

const person = {
    firstName: 'Linn',
    lastName: 'Øst',
    age: 36,
    hobbier: ('hoopdance', 'danse', 'drikke'),
    kjønn: 'jente',
    isWorking: true,
    // isteden for å lage koden const firstName.
//console.log (person.firstName)
//person.firstName = 'Ole'

}


const persons = [
    {
        firstName: 'Linn',
        age: 36,

    },
    {
        firstName: 'Emil',
        age: 32,
    },
    {
        firstName: 'Silje',
        age: 28,
        hobby: ['strikke', 'gaming']
    }

]
console.log(persons);
console.clear;
console.log(`Silje sin hoved hobby er: ${persons[2].hobby[1]}`);



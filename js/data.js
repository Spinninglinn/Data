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

const names = [
    'Thomas', 
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


console.clear;

const ansatte = [
    {
        person: {
        fornavn: 'Emil',
        etternavn: 'Østensen',
        alder: 32,
        født: '1991-04-19',
        },
        yrke: ['Programmerer', 'Enkelmannsforetak'],
        adresse: { 
            gate: 'Åsengata',
            husnummer: 28,
            postkode: '0480',
            by: 'Oslo',
            epost: 'lalala@gmail.com',
        },
    },
    {
        person: {
            fornavn: 'Silje',
            etternavn: 'Skravdal',
            alder: 28,
            født: '1993-10-26',
        },
        yrke: [
            'Lærer', 'Blomsterdekoratør'
        ],
        adresse: {
            gate: 'Hellesletta',
            husnummer: 4,
            postkode: '1900',
            by: 'Fetsund',
            epost: 'lilili@gmail.com',
        },
    },
    {
        person: {
            fornavn: 'Linn',
            etternavn: 'Skravledal',
            alder: 36,
            født: 1987-01-08,
        },

        yrke: [
            'Blomsterdekoratør', 'Programmerer'
        ],
        adresse: {
            gate: 'Hellaveien',
            husnummer: 765,
            postkode: '2007',
            by: 'Lillestrøm',
            epost: 'lululu@gmail.com',
        

        },

    },
    {
        person: {
            fornavn: 'Harry',
            etternavn: 'Østensen',
            alder: 55,
            født: '1955-10-28',
        },

        yrke: [
            'Lærer', 'Enkelmannsforetak'
        ],
        adresse: {
            gate: 'Elgsletta',
            husnummer: 34,
            postkode: '0506',
            by: 'Oslo',
            epost: 'lålålå@gmail.com',
        
        },

    },
    {
        person: {
            fornavn: 'Anne',
            etternavn: 'Skansen',
            alder: 59,
            født: '1963-09-20',
        },

        yrke: [
            'Lærer', 'Blomsterdekoratør'
        ],
        adresse: {
            gate: 'Elvegata',
            husnummer: 41,
            postkode: '2681',
            by: 'Vestre Gausdal',
            epost: 'lhlhlhl@gmail.com',
        },

    },
    {
        person: {
            fornavn: 'Asbjørn',
            etternavn: 'Grønland',
            alder: 64,
            født: '1960-01-28',
        },

        yrke: [
            'Programmerer', 'Lærer'
        ],
        adresse: {
            gate: 'Hallasletta',
            husnummer: 678,
            postkode: '0909',
            by: 'Askim',
            epost: 'lqlqlqlq@gmail.com',
        },

    },
    {
        person: {
            fornavn: 'Lulu',
            etternavn: 'Innvdal',
            alder: 32,
            født: '1999-10-06',
        },

        yrke: [
            'Lærer'
        ],
        adresse: {
            gate: 'Lølesletta',
            husnummer: 4,
            postkode: 1900,
            by: 'Fetsund',
            epost: 'lili9@gmail.com',
        

        },

    },
    {
            person: {
            fornavn: 'Knut',
            etternavn: 'Hotensen',
            alder: 32,
            født: '1003-06-19',
            },
            yrke: ['Programmerer', 'Lærer'],
            adresse: { 
                gate: 'Åselia',
                husnummer: 200,
                postkode: 2020,
                by: 'Oslo',
                epost: 'lalala00@gmail.com',
            },
        },
        {
            person: {
                fornavn: 'Sil',
                etternavn: 'Kravdal',
                alder: 28,
                født: '1990-12-06',
            },
            yrke: ['Lærer', 'Blomsterdekoratør'],
            adresse: {
                gate: 'Hellesletta',
                husnummer: 4,
                postkode: 1900,
                by: 'Fetsund',
                epost: 'lilili22@gmail.com',
            },
        }
    ];

console.log(ansatte);
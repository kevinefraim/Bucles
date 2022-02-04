// --------------Ejercicio 1-------------------

for (let i = 0; i <= 17; i++) {
  console.log(i);
}

// --------------Ejercicio 2-------------------

for (let i = 7; i <= 12; i++) {
  console.log(i);
}

// ----------Ejercicio 3----------------

let arr = [4, 5, 734, 43, 45];

const getRandom = (min, max) => {
  return Math.floor(Math.random() * (max - min)) + min;
};

arr.push(getRandom(1, 99));
arr.push(getRandom(1, 99));

console.log(arr);

// ------------Ejercicio 4--------------
let arr = [4, 5, 734, 43, 45];

const getRandom = (min, max) => {
  return Math.floor(Math.random() * (max - min)) + min;
};

for (let i = 0; i < 10; i++) {
  arr.push(getRandom(1, 99));
}

console.log(arr);

// ------------------Ejercicio 5--------------

let myArray = [
  232, 32, 1, 4, 55, 4, 3, 32, 3, 24, 5, 5, 5, 34, 2, 3, 5, 5365743, 52, 34, 3,
  55, 33, 435, 4, 6, 54, 63, 45, 4, 67, 56, 47, 1, 34, 54, 32, 54, 1, 78, 98, 0,
  9, 8, 98, 76, 7, 54, 2, 3, 42, 456, 4, 3321, 5,
];

for (let i = 0; i < myArray.length; i++) {
  console.log(myArray[i]);
}

// ---------------Ejercicio 6----------------

let mySampleArray = [
  3423, 5, 4, 47889, 654, 8, 867543, 23, 48, 56432, 55, 23, 25, 12,
];
for (let i = mySampleArray.length - 1; i >= 0; i--) {
  console.log(mySampleArray[i]);
}

// -----------Ejercicio 7---------------

let mySampleArray = [
  3423, 5, 4, 47889, 654, 8, 867543, 23, 48, 56432, 55, 23, 25, 12,
];
for (let i = 0; i < mySampleArray.length; i = i + 2) {
  console.log(mySampleArray[i]);
}

// --------------Ejercicio 8--------------
let people = [
  "Lebron",
  "Aaliyah",
  "Diamond",
  "Dominique",
  "Aliyah",
  "Jazmin",
  "Darnell",
  "Hatfield",
  "Hawkins",
  "Hayden",
  "Hayes",
  "Haynes",
  "Hays",
  "Head",
  "Heath",
  "Hebert",
  "Henderson",
  "Hendricks",
  "Hendrix",
  "Henry",
  "Hensley",
  "Henson",
  "Herman",
  "Hernandez",
  "Herrera",
  "Herring",
  "Hess",
  "Hester",
  "Hewitt",
  "Hickman",
  "Hicks",
  "Higgins",
  "Hill",
  "Hines",
  "Hinton",
  "Hobbs",
  "Hodge",
  "Hodges",
  "Hoffman",
  "Hogan",
  "Holcomb",
  "Holden",
  "Holder",
  "Holland",
  "Holloway",
  "Holman",
  "Holmes",
  "Holt",
  "Hood",
  "Hooper",
  "Hoover",
  "Hopkins",
  "Hopper",
  "Horn",
  "Horne",
  "Horton",
  "House",
  "Houston",
  "Howard",
  "Howe",
  "Howell",
  "Hubbard",
  "Huber",
  "Hudson",
  "Huff",
  "Waldo",
  "Hughes",
  "Hull",
  "Humphrey",
  "Hunt",
  "Hunter",
  "Hurley",
  "Hurst",
  "Hutchinson",
  "Hyde",
  "Ingram",
  "Irwin",
  "Jackson",
  "Jacobs",
  "Jacobson",
  "James",
  "Jarvis",
  "Jefferson",
  "Jenkins",
  "Jennings",
  "Jensen",
  "Jimenez",
  "Johns",
  "Johnson",
  "Johnston",
  "Jones",
  "Jordan",
  "Joseph",
  "Joyce",
  "Joyner",
  "Juarez",
  "Justice",
  "Kane",
  "Kaufman",
  "Keith",
  "Keller",
  "Kelley",
  "Kelly",
  "Kemp",
  "Kennedy",
  "Kent",
  "Kerr",
  "Key",
  "Kidd",
  "Kim",
  "King",
  "Kinney",
  "Kirby",
  "Kirk",
  "Kirkland",
  "Klein",
  "Kline",
  "Knapp",
  "Knight",
  "Knowles",
  "Knox",
  "Koch",
  "Kramer",
  "Lamb",
  "Lambert",
  "Lancaster",
  "Landry",
  "Lane",
  "Lang",
  "Langley",
  "Lara",
  "Larsen",
  "Larson",
  "Lawrence",
  "Lawson",
  "Le",
  "Leach",
  "Leblanc",
  "Lee",
  "Leon",
  "Leonard",
  "Lester",
  "Levine",
  "Levy",
  "Lewis",
  "Lindsay",
  "Lindsey",
  "Little",
  "Livingston",
  "Lloyd",
  "Logan",
  "Long",
  "Lopez",
  "Lott",
  "Love",
  "Lowe",
  "Lowery",
  "Lucas",
  "Luna",
  "Lynch",
  "Lynn",
  "Lyons",
  "Macdonald",
  "Macias",
  "Mack",
  "Madden",
  "Maddox",
  "Maldonado",
  "Malone",
  "Mann",
  "Manning",
  "Marks",
  "Marquez",
  "Marsh",
  "Marshall",
  "Martin",
  "Martinez",
  "Mason",
  "Massey",
  "Mathews",
  "Mathis",
  "Matthews",
  "Maxwell",
  "May",
  "Mayer",
  "Maynard",
  "Mayo",
  "Mays",
  "Mcbride",
  "Mccall",
  "Mccarthy",
  "Mccarty",
  "Mcclain",
  "Mcclure",
  "Mcconnell",
  "Mccormick",
  "Mccoy",
  "Mccray",
  "Waldo",
  "Mcdaniel",
  "Mcdonald",
  "Mcdowell",
  "Mcfadden",
  "Mcfarland",
  "Mcgee",
  "Mcgowan",
  "Mcguire",
  "Mcintosh",
  "Mcintyre",
  "Mckay",
  "Mckee",
  "Mckenzie",
  "Mckinney",
  "Mcknight",
  "Mclaughlin",
  "Mclean",
  "Mcleod",
  "Mcmahon",
  "Mcmillan",
  "Mcneil",
  "Mcpherson",
  "Meadows",
  "Medina",
  "Mejia",
  "Melendez",
  "Melton",
  "Mendez",
  "Mendoza",
  "Mercado",
  "Mercer",
  "Merrill",
  "Merritt",
  "Meyer",
  "Meyers",
  "Michael",
  "Middleton",
  "Miles",
  "Miller",
  "Mills",
  "Miranda",
  "Mitchell",
  "Molina",
  "Monroe",
  "Lucas",
  "Jake",
  "Scott",
  "Amy",
  "Molly",
  "Hannah",
  "Lucas",
];
for (let i = 0; i < people.length; i++) {
  if (people[i] === "Waldo") {
    console.log(people[i]);
    break;
  }
}

// -----------------Ejercicio 9------------

let par =
  "Lorem ipsum dolor sit amet consectetur adipiscing elit Curabitur eget bibendum turpis Curabitur scelerisque eros ultricies venenatis mi at tempor nisl Integer tincidunt accumsan cursus";

const letterCount = (letter) => {
  let qty = 0;
  for (let i = 0; i < par.length; i++) {
    if (letter === par[i].toLowerCase()) {
      qty++;
    }
  }
  return qty;
};

let counts = {
  l: letterCount("l"),
  o: letterCount("o"),
  r: letterCount("r"),
  e: letterCount("e"),
  m: letterCount("m"),
  i: letterCount("i"),
  p: letterCount("p"),
  s: letterCount("s"),
  u: letterCount("u"),
  d: letterCount("d"),
  s: letterCount("s"),
  t: letterCount("t"),
  a: letterCount("a"),
  c: letterCount("c"),
  n: letterCount("n"),
  g: letterCount("g"),
  b: letterCount("b"),
  q: letterCount("q"),
};
console.log(counts);

// ----------------Ejercicio 10----------------

let arr = [45, 67, 87, 23, 5, 32, 60];
let arrayInvertido = [];

for (let i = arr.length - 1; i >= 0; i--) {
  arrayInvertido.push(arr[i]);
}
console.log(arrayInvertido);

// ---------------Ejercicio 11---------------

let mix = [42, true, "towel", [2, 1], "hello", 34.4, { name: "juan" }];
let arrTypes = [];
for (let i = 0; i < mix.length; i++) {
  arrTypes.push(typeof mix[i]);
}
console.log(arrTypes);

// ---------------------Ejercicio 12--------------

let myArray = [
  3344, 34334, 454543, 342534, 4563456, 3445, 23455, 234, 262, 2335, 43323,
  4356, 345, 4545, 452, 34, 5, 434, 36, 345, 4334, 5454, 345, 4352, 23, 365,
  345, 47, 63, 425, 6578759, 768, 834, 754, 35, 32, 445, 4534, 56, 56, 7536867,
  3884526, 4234, 35353245, 53244523, 566785, 7547, 743, 4324, 523472634, 26665,
  6, 3432, 54645, 32, 453625, 7568, 5669576, 754, 64356, 542644, 35, 243, 371,
  3251, 351223, 13231243, 7, 34, 856, 56, 53, 234342, 56, 545343,
];
let ar = [14, 28, 34];

myArray.forEach((number) => {
  if (number % 14 === 0) {
    console.log(number);
  }
});

// --------------------Ejercicio 13---------------

let i = 20;

do {
  i--;
  if (i % 5 === 0) {
    console.log(`${i}!`);
  } else {
    console.log(i);
  }
} while (i > 0);
console.log(`${i} LIFTOFF`);

// -------------------Ejercicio 14---------------

let myArray = [
  43, 23, 6, 87, 43, 1, 4, 6, 3, 67, 8, 3445, 3, 7, 5435, 63, 346, 3, 456, 734,
  6, 34,
];
let max = myArray[0];

for (let i = 1; i < myArray.length; i++) {
  if (myArray[i] > max) {
    max = myArray[i];
  }
}
console.log(max);

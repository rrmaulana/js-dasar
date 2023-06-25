

// undefined adalah variable yg belum didefinisikan


let nama; // jika nilai variablenya kosong maka hasilnya akan undefined
if (nama === undefined) {
    console.log("UNDEFINED");
} else {
    console.log("DEFINED")
}


// undefined array value
const names = ["Riko", "Maulana"];

if (names[2] === undefined) {
    console.log("ARRAY UNDEFINED")
} else {
    console.log("ARRAY DEFINED");
}


// undefined object property
const person = {};
if (person.name === undefined) {
    console.log("OBJECT UNDEFINED");
} else {
    console.log("OBJECT DEFINED");
}
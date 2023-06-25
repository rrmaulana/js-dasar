// konversi string ke Number
const value1 = parseInt("1");
const value2 = 1;
const sum = value1 + value2;
console.info(`${sum}`);

console.info(parseInt("1.9"));
console.info(parseFloat("1.1"));
console.info(Number("1.1"));

// konversi number to string
const angka = 100;
console.info(angka.toString(10));

// contoh konversi number ke strinf
const a = 5;
const b = 5;
const jumlah = a.toString() + b.toString();
console.info(`${jumlah}`);

// NaN (not a number)
console.log(`${parseInt("salah")}`);
console.log(`${parseFloat("1.1text")}`);

// number() tidak akan mentolelir kesalahan pada data
console.log(`${Number("1.1ups")}`);
console.log(`${Number("1x")}`);
console.log(`${Number("bukan number")}`);

// kode operasi pada NaN
const valueA = Number("salah");
const valueB = 100;
const sum1 = valueA + valueB;
console.log(`${sum1}`);

// isNaN function untuk mengecek apakah sebuah number itu nan atau bukan
console.log(`${isNaN(valueA)}`);
console.log(`${isNaN(100)}`);

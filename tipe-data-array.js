let arrayKosong = []; //ini array kosong

let arrayNama = ["Riko","Ganteng","Maulana",1,true];

console.table(arrayNama);


// menambah array
const names = [];
names.push("riko","ganteng","maulana");
names.push("ucup","surucup","udin","sururudin");
console.table(names);


// array.push(value) > menambahkan data ke array
// array.length > untuk mendapatkan panjang array
// array [index] > mendapatkan data diposisi index
// array[index] = value > mengubah data diposisi index
// delete array[index] > menghapus data di index namum index tidak bergeser


console.log(names[0]); // mengambil data index

names[0] = "budi"; // mengubah data index array
console.table(names);


delete names[3];
console.table(names);


names.push("riko lagi");
console.table(names);

names[3] = "tambah lagi";
names.push(1,2,3,4,5);
console.table(names);


// array di dalam array (multidimensi array)
names.push(["riko","ganteng","maulana"]);
console.table(names);

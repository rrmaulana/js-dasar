

const person = {}; // object kosong


// ubah property / ataribut
person ["nama"] = "riko";
person ["alamat"] = "indonesia";
person ["umur"] = 21;

console.table(person);

// menghapus index pada object
delete person["umur"];

console.table(person);


// membuat object dengan dengan properties
const orang = {
  nama : "riko rahma maulana",
  alamat : "bekasi",
  umur : 25
};

console.table(orang);

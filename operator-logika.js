
const nilaiUjian = 70;
const nilaiAbsensi = 76;

const lulusUjian = nilaiUjian > 75;
const lulusAbsensi = nilaiAbsensi > 75;


// operator "dan" (&&), jika kedua nilai true maka hasilnya akan true, selain itu akan false
console.info(lulusUjian && lulusAbsensi);

// operator "atau" (||), jika salah satu nilai bernilai true maka hasilnya akan true
console.info(lulusUjian || lulusAbsensi);

// operator unary, operator kebalikan (!)
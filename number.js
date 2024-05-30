// cara deklarasi variabel bertipe number
// cirinya angka ditulis tanpa tanpa petik

let angka1 = 50;        // number   ==> integer / bulat
let angka2 = 65.999;    // number   ==> float / pecahan

console.log(angka1);
console.log(angka2);

// melakukan pembulatan bilangan
// pembulatan ke atas
console.log('Pembulatan ke atas: ');
console.log(Math.ceil(angka2));

// pembulatan ke bawah
console.log('Pembulatan ke bawah: ');
console.log(Math.floor(angka2));

// pembulatan dinamis ke integer / bilangan bulat terdekat
console.log(Math.round(angka2));

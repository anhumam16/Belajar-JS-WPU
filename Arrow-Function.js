// declaration function biasa
function santri(nama) {
    return `Halo, ${nama}, selamat pagi`;
}

// Arrow Function Biasa
let santri = function(nama) {
    return `Halo ${nama}, selamat pagi`;
}

// Arrow Function satu parameter satu eksekusi
let santri = nama => `Halo ${nama}, selamat pagi`;
console.log(santri('Humam'));

// Arrow Function dua parameter satu eksekusi 'Wajib pakai kurung buka'
let santri = (nama, waktu) => `Halo ${nama}, selamat ${waktu}`;


let santri = ['Humam', 'Andi', 'Dika'];

// Praktik 1 "mengembalikan array"
let jumlahHuruf = santri.map(nama => nama.length);

// Praktik 2 "Mengembalikan Object"
let jumlahHuruf = santri.map(nama => ({nama, jmlHuruf: nama.length}));


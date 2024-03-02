// // Object Literal
let santri1 = {
    nama: "Herland",
    power: 10,
    ngaji: function(jam) {
        this.power = this.power + jam;
        console.log(`Halo ${this.nama}, powermu bertambah!`);
    },
    ngopi: function(lama) {
        this.power = this.power - lama;
        console.log(`Halo ${this.nama}, powermu berkurang!`);
    }
}

let santri2 = {
    nama: "Kazlan",
    power: 10,
    ngaji: function(jam) {
        this.power = this.power + jam;
        console.log(`Halo ${this.nama}, powermu bertambah!`);
    },
    ngopi: function(lama) {
        this.power = this.power - lama;
        console.log(`Halo ${this.nama}, powermu berkurang!`);
    }
}

// // function Declaration
function Santri(nama, power) {
    let santri = {};
    santri.nama = nama;
    santri.power = power;

    santri.ngaji = function (jam) {
        this.power += jam;
        console.log(`Halo ${nama}, powermu bertambah`);
    }

    santri.ngopi = function (lama) {
        this.ngopi -= lama;
        console.log(`Halo ${nama}, powermu berkurang`);
    }

    return santri;
}

let Herland = Santri('Herland', 15);
let Kazlan = Santri('Kazlan', 20);

// Constructor Function
// keyword new
function Santrii(nama, power) {
    this.nama = nama;
    this.power = power;

    this.ngaji = function (jam) {
        this.power += jam;
        console.log(`Halo ${nama}, powermu bertambah`);
    }

    this.ngopi = function (lama) {
        this.power -= lama;
        console.log(`Halo ${nama}, powermu berkurang`);
    }
}

let Herland = new Santrii('Herland', 15);


// Object.create
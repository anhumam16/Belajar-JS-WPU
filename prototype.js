// versi prototype
function Santri(nama, power) {
    this.nama = nama;
    this.power = power;
}

Santri.prototype.ngaji = function(lama) {
    this.power += lama;
    return `Halo ${this.nama}, powermu bertambah`;
}

Santri.prototype.ngopi = function(jam) {
    this.power -= jam;
    return `Halo ${this.nama}, powermu berkurang`;
}

Santri.prototype.tidur = function(jam) {
    this.power += jam * 2;
    return `Halo ${this.nama}, selamat tidur`;
}

let herland = new Santri('herland', 10);
let kazlan =  new Santri('kazlan', 20);


// versi class
class Santri {
    constructor(nama, power) {
        this.nama = nama;
        this.power = power;
    }

    ngaji(lama) {
        this.power += lama;
        return `Halo ${this.nama}, powermu bertambah`;
    }

    ngopi(jam) {
        this.power -= jam;
        return `Halo ${this.nama}, powermu berkurang`;
    }

    tidur(jam) {
        this.power += jam * 2;
        return `Halo ${this.nama}, selamat tidur`;
    }
}

let herland = new Santri('herland', 15);
let kazlan = new Santri('kazlan', 20);
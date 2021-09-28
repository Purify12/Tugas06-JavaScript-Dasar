/// Soal - 01
/// Kita sudah belajar mengenai variable scope yang dimiliki oleh Javascript
/// dan kamu diminta untuk merangkum tentang:
/// - ada berapa banyak jumlah variable scope pada Javascript?
console.log("Terdapat 2 variabel scope yaitu Global dan Local scope");
/// - jelaskan secara singkat setiap variable scope yang dimiliki oleh Javascript
console.log("Global Scope menunjukkan suatu variabel dapat diakses dimapun dalam sebuah file, yang biasanya dideklarasikan diluar blocks dan dapat selalu diakses dalam blocks");

console.log("Local Scope menunjukkan variabel yang hanya dapat diakses pada blocks tempatnya dideklarasaikan(tidak bisa diakses diluar blocks)");
/// - buatlah implementasi sederhana dari tiap-tiap variable scope yang dimiliki oleh Javascript
let a = "Hello, ";
function greet() {
    let b = "Jose"
    console.log(a + b);
}

console.log("a menunjukkan variabel global dan b menunjukkan lokal");

/// WRITE YOUR ANALYSIS HERE

/// Soal - 02
/// Kamu diminta untuk melakukan analisa terhadap baris kode dibawah ini
/// - apa yang akan tampil didalam comsole.log ?
/// - apa alasan yang menyebabkan hasil dari console itu bukan nilai dari variable name?

/// WRITE YOUR ANALYSIS HERE
//Hasil yang dikeluarkan adalah mariah 
//Alasannya variabel name sudah dire-assign pada fungsi printFirstName yang menyatakan 
//name sekarang adalah variabel lokal yang kemudian diambil indeks ke 0 dari kalimat yang telah di split.
const name = "John Watson";

function printFirstName(name) {
  return name.split(" ")[0];
}

console.log(printFirstName("Mariah Carey"));


/// Soal - 01
/// Kamu diminta untuk menjelaskan apa perbedaan antara
/// /// Soal - 01
/// Kamu diminta untuk menjelaskan apa perbedaan antara
/// - Type Error
/// - Reference Error
/// - Range Error
/// - Syntax Error

/// WRITE YOUR ANALYSIS HERE
// - Type Error : Error yang dihasilkan oleh kesalahan yang terjadi saat variabel atau parameter bukan tipe yang valid.
// - Reference Error : Error yang dihasilkan oleh kesalahan yang terjadi saat mereferensikan referensi yang tidak valid.
// - RangeError : Error yang dihasilkan oleh kesalahan yang terjadi saat variabel numerik atau parameter berada di luar rentang validnya.
// - Syntax Error :  Error yang dihasilkan oleh kesalahan sintaks.

/// Soal - 02
/// Kamu diminta untuk melakukan analisa terhadap baris kode dibawah dengan instruksi detail sebagai berikut:
/// - apabila kita menjalankan baris kode dibawah apa yang akan terjadi?
/// - apabila terjadi error, termasuk dalam kategori manakah error tersebut?
/// - apabila terjadi error, jelaskan mengapa hal tersebut bisa terjadi

/// WRITE YOUR ANALYSIS HERE
// Apabila code dijalankan akan menampilkan error
// Menghasilkan ReferenceError : Cannot access 'salaryWithConst' before initialization
// Hal ini terjadi karena pada line 37 meminta akses nilai salaryWithConst, namun 
// salaryWithConst didefenisikan setelahnya menggunakan const sehingga tidak 
// memiliki akses global saat dipanggil sebelum inisialisasi.
console.log(salaryWithVar)
console.log(salaryWithConst)

var salaryWithVar = 15000000;
const salaryWithConst = 15000000;


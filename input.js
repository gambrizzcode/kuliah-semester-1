// var nama = prompt("Masukkan Nama Anda : " , "Nama Lengkap")
// document.write("Selamat Sore " + nama)
// alert("Selamat Sore " + nama)

// var nama = prompt("Masukkan Nama Anda" , "Nama Lengkap")
// var umur = prompt("Masukkan Umur Anda" , "Pakai Angka")
// var tinggi = prompt("Masukkan Tinggi Badan Anda" , "Dalam cm")

// document.write("Selamat Sore " + nama + "<br>")
// document.write("Umur Anda " + umur + " Tahun <br>")
// document.write("Tinggi Anda " + tinggi + " cm")

// var jawaban = confirm("Anda Yakin ????????????????????????????????")
// document.write("jawaban : " + jawaban)

// "use strict"
// var v = 100
// document.write(v)

function jumlah() {
	bil1 = document.formku.bil1.value;
	bil2 = document.formku.bil2.value;

	bil1 = isNaN(bil1) == true ? 0 : Number(bil1);
	bil2 = isNaN(bil2) == true ? 0 : Number(bil2);

	var jml = bil1+bil2;

	alert("Hasilnya adalah " + jml);

	document.formku.bil1.value = "";
	document.formku.bil2.value = "";
}

function kali() {
	bil1 = document.formku.bil1.value;
	bil2 = document.formku.bil2.value;

	bil1 = isNaN(bil1) == true ? 0 : Number(bil1);
	bil2 = isNaN(bil2) == true ? 0 : Number(bil2);

	var kali = bil1*bil2;

	alert("Hasilnya adalah " + kali);

	document.formku.bil1.value = "";
	document.formku.bil2.value = "";
}
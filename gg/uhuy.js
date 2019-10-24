"use strict";

// function go() {
	// var uhu = parseFloat(document.getElementById("bil").value);
	// var y = uhu%2;

	// if (y == 0) { alert("GENAP"); }else{ alert("GANJIL"); }
// }

var angka = prompt("Masukkan Bilangan Anda", "0");
// var x = angka%2;
// if (x == 0) { alert("GENAP"); }else{ alert("GANJIL"); }

// if (angka > 0) {
// 	alert("Bilangan Positif");
// }else if(angka < 0){
// 	alert("Bilangan Negatif");
// }else if(angka == 0){
// 	alert("Bilangan Nol");
// }else if(isNaN(angka)){
// 	alert("Bilangan Salah");
// }else{
// 	alert("Ndak Tauuuuu");
// }

if ((angka >= 90) && (angka <= 100)) {
	alert("Skor Anda A");
}else if((angka >= 80) && (angka < 90)){
	alert("Skor Anda B");
}else if((angka >= 60) && (angka < 80)){
	alert("Skor Anda C");
}else if((angka >= 50) && (angka < 60)){
	alert("Skor Anda D");
}else if((angka >= 0) && (angka < 50)){
	alert("Skor Anda E");
}else{
	alert("Anda Tidak Punya Skor");
}
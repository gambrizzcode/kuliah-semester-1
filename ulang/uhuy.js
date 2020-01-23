"use strict";

// function go() {
	// var uhu = parseFloat(document.getElementById("bil").value);
	// var y = uhu%2;

	// if (y == 0) { alert("GENAP"); }else{ alert("GANJIL"); }
// }

var angka = prompt("Masukkan Bilangan Anda", "0");
var x = angka%2;
if (x == 0) { alert("GENAP"); }else{ alert("GANJIL"); }

if (angka > 0) {
	alert("Bilangan Positif");
}else if(angka < 0){
	alert("Bilangan Negatif");
}else if(angka == 0){
	alert("Bilangan Nol");
}else if(isNaN(angka)){
	alert("Bilangan Salah");
}else{
	alert("Ndak Tauuuuu");
}
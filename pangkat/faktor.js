"use strict";

function faktorial(n) {
	var faktor = 1;
	for (var i = 1; i <= n; i++) {
		faktor = faktor * i;
	}
	return faktor;
}

// document.write("faktorial loop : " + faktorial(5));

function faktorialRek(n){
	if (n == 0) {
		return 1;
	}else{
		return n * faktorialRek(n-1);
	}
}

// var yolo = prompt("Masukkan Bilangan untuk di faktorial");
// document.write("faktorial rekursif : " + faktorialRek(yolo));

function pangkat(bil, bilPang){
	var hasil = 1;
	for (var i = 0; i < bilPang; i++) {
		hasil = hasil * bil;
	}
	return hasil;
}

// document.write("hasil pangkat adalah : ",pangkat(2,2));

function pangkatRek(bil, bilPang){
	if (bilPang == 0) {
		return 1;
	}else{
		return bil * pangkatRek(bil,bilPang-1);
	}
}

var ang  = prompt("Masukkan Angka");
var pang = prompt("Masukkan Pangkat");

document.write("hasil pangkat rekursif adalah : ",pangkatRek(ang,pang));
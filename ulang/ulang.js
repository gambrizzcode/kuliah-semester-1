"use strict";

var bil, ket

var ket = prompt("Masukkan kata yang akan diulang","");
var bil = prompt("Masukkan jumlah perulangan","");

for(var i=1;i<=bil;i++){
	document.write(i + ". " +ket + "<br>");
}
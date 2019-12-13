// "use strict";

function warna(pilihan) {
	alert("Anda Memilih Warna " + pilihan);
	document.bgColor=pilihan;
}

function cari(){
	var kata  = document.formcari.keyword.value;
	var hasil = "http://www.google.com/search?q=" + kata;
	window.open(hasil, 'google', config='height=500,width=750 scrollbars=yes');
}

var pesan = "Lorem ipsum dolor sit amet, consectetur adipisicing elit ";

function p(){
	document.basis.kotak.value=pesan;

	pesan = pesan.substr(1,pesan.length)+pesan.substr(0,1);
	window.status = pesan;
	setTimeout("p()",120);
}
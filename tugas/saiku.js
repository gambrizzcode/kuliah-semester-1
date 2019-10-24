"use strict";

function tampil() {
	var nim 		= document.sumber.nim.value;
	var nama 		= document.sumber.nama.value;
	var prodi 		= document.sumber.prodi.value;
	var tgl_lahir 	= document.sumber.tgl_lahir.value;
	var jk 			= document.sumber.jk.value;
	var agama 		= document.sumber.agama.value;
	var status 		= document.sumber.status.value;
	var hobi1 		= document.sumber.hobi1;
	var hobi2 		= document.sumber.hobi2;
	var hobi3 		= document.sumber.hobi3;
	var hobi4 		= document.sumber.hobi4;
	var hobi5 		= document.sumber.hobi5;
	var hobi6 		= document.sumber.hobi6;
	var hobi7 		= document.sumber.hobi7;
	var alamat 		= document.sumber.alamat.value;

	if ((nim != "" || nama != "" || prodi != "" || tgl_lahir != "" || jk != "" || agama != "" || status != "" || alamat != "") && 
		(hobi1.checked == true || hobi2.checked == true || hobi3.checked == true || hobi4.checked == true || hobi5.checked == true || hobi6.checked == true || hobi7.checked == true)) {

		document.getElementById("h_nim").innerHTML 		= nim;
		document.getElementById("h_nama").innerHTML 	= nama;
		document.getElementById("h_prodi").innerHTML 	= prodi;

		var tgl 	= tgl_lahir == "" ? new Date() : new Date(tgl_lahir);
		var bulan 	= [ "Januari",
						"Februari",
						"Maret",
						"April",
						"Mei",
						"Juni",
						"Juli",
						"Agustus",
						"September",
						"Oktober",
						"November",
						"Desember" ];
		document.getElementById("h_tgl_lahir").innerHTML = tgl.getDate() + " " + bulan[tgl.getMonth()] + " " + tgl.getFullYear();

		document.getElementById("h_jk").innerHTML 		= jk;
		document.getElementById("h_agama").innerHTML 	= agama;
		document.getElementById("h_status").innerHTML 	= status;
		document.getElementById("h_alamat").innerHTML 	= alamat;

		if (hobi1.checked == true) { var hoby1 = hobi1.value+"<br>"; }else{ hoby1 = ""; }
		if (hobi2.checked == true) { var hoby2 = hobi2.value+"<br>"; }else{ hoby2 = ""; }
		if (hobi3.checked == true) { var hoby3 = hobi3.value+"<br>"; }else{ hoby3 = ""; }
		if (hobi4.checked == true) { var hoby4 = hobi4.value+"<br>"; }else{ hoby4 = ""; }
		if (hobi5.checked == true) { var hoby5 = hobi5.value+"<br>"; }else{ hoby5 = ""; }
		if (hobi6.checked == true) { var hoby6 = hobi6.value+"<br>"; }else{ hoby6 = ""; }
		if (hobi7.checked == true) { var hoby7 = hobi7.value+"<br>"; }else{ hoby7 = ""; }

		document.getElementById("h_hobi").innerHTML 	= hoby1 + hoby2 + hoby3 + hoby4 + hoby5 + hoby6 + hoby7;

		document.getElementById("hasil").style.display = "block";
	}else{
		alert("Mohon Lengkapi Data Terlebih Dahulu !!");
	}	
}

function reseto() {
	document.getElementById("h_hobi").innerHTML = "";
	document.getElementById("hasil").style.display = "none";
}
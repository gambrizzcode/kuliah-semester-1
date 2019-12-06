"use strict";

var tanggal = new Date(); // buat ojek baru bernama tanggal
var hari 	= tanggal.getDay(); // urutan hari
var tgl 	= tanggal.getDate()+1; // tanggal 0-6

var dino = ['','Senin','Selasa','Rabu','Kamis','Jumat','Sabtu','Minggu'];

document.write("tanggal hari ini adalah : " + tanggal + "<br>");
document.write("hari : " + hari + "<br>");
document.write("nama hari : " + dino[hari] + "<br><hr>");

var bulan = tanggal.getMonth()+1; // bulan dalam angka 0-11

var wulan = ['','Januari','Februari','Maret','April','Mei','Juni','Juli','Agustus','September','Oktober','November','Desember'];

document.write("bulan : " + bulan + "<br>");
document.write("nama bulan : " + wulan[bulan] + "<br><hr>");

var tahun = tanggal.getFullYear(); // tahun penuh

document.write("tahun : " + tahun + "<br>");

document.write("tanggal : " + tgl + ", bulan : " + wulan[bulan] + ", tahun : " + tahun + "<br>");

document.write(tgl + " - " + wulan[bulan] + " - " + tahun + "<br>");
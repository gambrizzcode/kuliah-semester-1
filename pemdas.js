alert("Menghitung Luas Persegi Panjang")

var panjang = prompt("Masukkan Panjang")
//muncul alert isian untuk memasukkan nilai panjang
var lebar 	= prompt("Masukkan Lebar")
//muncul alert isian untuk memasukkan nilai lebar

var luas = panjang*lebar
var keliling = (2*panjang)+(2*lebar)

document.write("Menghitung Luas Persegi Panjang<br>")
document.write("<br> Panjang = "+panjang)
document.write("<br> Lebar = "+lebar)
document.write("<br> Luasnya adalah "+luas)
document.write("<br> Kelilingnya adalah "+keliling)
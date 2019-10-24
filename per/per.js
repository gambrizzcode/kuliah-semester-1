"use strict";


function sw() {
	var bil, ket;

	bil = document.getElementById("indomie").value;
	bil = eval(bil)

	switch(bil){
		case 1:
			ket = "Harga Indomie Ayam adalah 5.000 Rupiah"
		break

		case 2:
			ket = "Harga Indomie Rendang adalah 2.300 Rupiah"
		break

		case 3:
			ket = "Harga Indomie Seafood adalah 5.900 Rupiah"
		break

		case 4:
			ket = "Harga Indomie Kare Ayam adalah 4.500 Rupiah"
		break

		case 5:
			ket = "Harga Indomie Gulai adalah 9.000 Rupiah"
		break

		case 6:
			ket = "Harga Indomie Sambal Rica adalah 9.900 Rupiah"
		break

		default:
			ket = "Inputan Salah"
		break
	}

	// document.write("<br>"+ket);
	alert(ket);
	document.getElementById("indomie").value = "";
}

// var bil, ket;

// bil = prompt("masukkan angka 1 sampai 10","0");
// bil = eval(bil);

// switch(bil){
// 	case 1:
// 		ket = "Angka Satu"
// 	break

// 	case 2:
// 		ket = "Angka Dua"
// 	break

// 	case 3:
// 		ket = "Angka Tiga"
// 	break

// 	case 4:
// 		ket = "Angka Empat"
// 	break

// 	case 5:
// 		ket = "Angka Lima"
// 	break

// 	case 6:
// 		ket = "Angka Enam"
// 	break

// 	case 7:
// 		ket = "Angka Tujuh"
// 	break

// 	case 8:
// 		ket = "Angka Delapan"
// 	break

// 	case 9:
// 		ket = "Angka Sembilan"
// 	break

// 	case 10:
// 		ket = "Angka Sepuluh"
// 	break
// }

// document.write("Angka yang diinputkan : " + bil + "<br>");
// document.write("Hasilnya Adalah : " + ket);


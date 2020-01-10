var pemilik = prompt("masukkan nama pemilik hewan");
var jml 	= prompt("masukkan jumlah hewan");
var dokter 	= 250000;
var vaksin	= 145000;

document.write("Nama Pemilik Hewan : "+pemilik+"<br>");

document.write("<table border='1'>");
document.write("<tr><th>Nama Hewan</th>");
document.write("<th>Kategori</th>");
document.write("<th>Biaya Dokter</th>");
document.write("<th>Biaya Vaksin</th></tr>");

for (i=1; i<=jml; i++) {
	var nama = prompt("masukkan nama hewan ke "+i);
	var kategori = prompt("masukkan kategori hewan ke "+i+" 1 : kucing, 2 : unggas, 3 : reptil");
	kategori = eval(kategori);

	document.write("<tr><td>"+nama+"</td>");

	switch(kategori){
		case 1:
			var namakat = "Kucing";
		break;

		case 2:
			namakat = "Unggas";
		break;

		case 3:
			namakat = "Reptil";
		break;

		default:
			namakat = "kategori apa ini";
	}

	document.write("<td>"+namakat+"</td>");
	document.write("<td>"+dokter+"</td>");
	document.write("<td>"+vaksin+"</td></tr>");
}
document.write("</table>");

var total_dokter = dokter*jml;
var total_vaksin = vaksin*jml;
var total_semua = total_dokter+total_vaksin;

document.write("Total Biaya Dokter : "+total_dokter+"<br>");
document.write("Total Biaya Vaksin : "+total_vaksin+"<br>");
document.write("Total Biaya Keseluruhan : "+total_semua+"<br>");

if (total_semua > 1000000) {
	var bayar = "Transfer Bank atau Kartu Kredit";
}else if(total_semua >= 500000 && total_semua <= 1000000){
	bayar = "Transfer Bank";
}else{
	bayar = "Cash";
}

document.write("Pembayaran Harus Menggunakan : "+bayar+"<br>");
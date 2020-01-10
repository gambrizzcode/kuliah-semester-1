"use strict";
// Agar Coding menjadi lebih ketat

function jalan(){ // Membuat function baru
    var jml = document.getElementById('jml').value;
    // membuat variabel baru
    // yang isinya adalah menangkap inputan sebelumnya
    var i = 0;
    // membuat variabel baru untuk perulangan yang dimulai dari 0
    while(i < jml){ // memulai perulangan dengan menggunakan while
        // kondisi yang dipakai adalah selama i kurang dari jumlah
        i++;
        // i ditambah satu
        document.write("<input type='text' id='nilai"+i+"' placeholder='Masukkan Nilai Ke "+i+"'><br>");
        // membuat inputan baru dengan id yang urut sesuai jumlah yang diinginkan
    }
    document.write("<br> <button type='button' onclick='lanjut("+jml+")'>CEK</button> <hr>");
    // membuat tombol untuk memulai proses berikutnya
    // tombol berisi function dengan parameter jumlah yang sebelumnya diinputkan
}

function lanjut(n){ // Membuat function baru
    // function berisi sebuah parameter
    // yang menangkap jumlah inputan dari function sebelumnya
    document.write("<table border='1' style='border-collapse:collapse'>");
	document.write("<tr><th>Nilai</th>");
    document.write("<th>Status</th></tr>");
    // membuat tabel beserta headernya

    var j = 0;
    // membuat variabel baru untuk memulai perulangan yang dimulai dari 0
    while(j < n){ // membuat perulangan dengan menggunakan while
        // kondisi yang dipakai adalah selama j kurang dari n
        j++;
        // j ditambah satu
        var nilai = document.getElementById("nilai"+j).value;
        // membuat variabel baru
        // yang digunakan untuk menangkap inputan dari perulangan sebelunya
        nilai = eval(nilai);
        // membuat variabel menjadi numerik

        if (nilai >= 90 && nilai <= 100) {
            // kondisi ketika nilai lebih dari sama dengan 90
            // tapi kurang dari sama dengan 100
            var huruf = "A";
            // membuat variabel baru yang berisi nilai huruf "A"
		}else if (nilai >= 80 && nilai < 90) {
            // kondisi ketika nilai lebih dari sama dengan 80
            // tapi kurang dari 90
            huruf = "B";
            // variabel huruf berisi nilai huruf "B"
		}else if (nilai >= 60 && nilai < 80) {
            // kondisi ketika nilai lebih dari sama dengan 60
            // tapi kurang dari 80
            huruf = "C";
            // variabel huruf berisi nilai huruf "C"
		}else if (nilai >= 50 && nilai < 60) {
            // kondisi ketika nilai lebih dari sama dengan 50
            // tapi kurang dari 60
            huruf = "D";
            // variabel huruf berisi nilai huruf "D"
		}else{
            // jika tidak ada kondisi yang memenuhi sama sekali
            // maka lakukan pilihan terakhir
            huruf = "E";
            // variabel huruf berisi nilai huruf "E"
        }
        
		document.write("<tr><td>"+nilai+"</td>");
        document.write("<td>"+huruf+"</td></tr>");
        // nilai dan nilai huruf ditampilkan ke dalam tabel
    }
    document.write("</table><br><hr>");
    // tutup tabel
}
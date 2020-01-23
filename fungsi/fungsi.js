// var halocoba = function cobahalo() {
// 	document.write('hallo semua', 'selamat malam');
// }

// halocoba();

function jumlahab(a,b) {
	return a+b;
}

var halo = function(x) {
	for (var i = 0; i < x; i++) {
		document.write("kucing <br>");
	}
}

// var hasil = jumlahab(2,8);
// document.write("hasil dari function jumlahab a + b = " + hasil + "<br>");

// document.write("hasil dari function jumlahab a + b = " + jumlahab(4,5) + "<br>");

// halo(2);

function fungsiku(){
	alert('pemanggilan dengan window.namafungsi()');
}

function tombolklik(){
	alert('klik yaaa !');
}

function ana(x){
	function budi(y){
		function cici(z){
			document.write("fungsi ana, budi, cici adalah = " + x + y + z + "<br>");
			var hasil = x+y+z;
			document.write("hasil penjumlahan keseluruhan adalah = " +  hasil + "<br>");
		}
		cici(2);
	}
	budi(8);
}
ana(4);